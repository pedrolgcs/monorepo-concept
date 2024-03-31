'use client'

import { zodResolver } from '@hookform/resolvers/zod'
import { Button } from '@repo/ui/components/button'
import { Calendar } from '@repo/ui/components/calendar'
import { Checkbox } from '@repo/ui/components/checkbox'
import { Label } from '@repo/ui/components/label'
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '@repo/ui/components/popover'
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from '@repo/ui/components/select'
import dayjs from 'dayjs'
import isBetween from 'dayjs/plugin/isBetween'
import { usePathname, useRouter, useSearchParams } from 'next/navigation'
import React from 'react'
import { Controller, useForm } from 'react-hook-form'
import { z } from 'zod'

dayjs.extend(isBetween)

const carsFiltersSchema = z.object({
  pickUpLocation: z.string({
    required_error: 'Selecione um local de retirada',
  }),
  dropOffLocation: z.string().optional(),
  dateRange: z.object(
    {
      from: z.date(),
      to: z.date(),
    },
    { required_error: 'Selecione uma data' },
  ),
  startTime: z.string({
    required_error: 'Selecione um hora de partida',
  }),
  endTime: z.string({
    required_error: 'Selecione um hora de chegada',
  }),
})

type CarsFiltersSchema = z.infer<typeof carsFiltersSchema>

const MIN_DAYS_RANGE = 2

export function Filters() {
  const [deliveryInAnotherPlace, setDeliveryInAnotherPlace] =
    React.useState(false)

  const searchParams = useSearchParams()
  const pathname = usePathname()
  const router = useRouter()

  const pickUpLocation = searchParams.get('pickUpLocation')
  const dropOffLocation = searchParams.get('dropOffLocation')
  const startDate = searchParams.get('startDate')
  const endDate = searchParams.get('endDate')
  const startTime = searchParams.get('startTime')
  const endTime = searchParams.get('endTime')

  const toDay = dayjs()
  const maxDate = toDay.add(1, 'year')

  const {
    control,
    reset,
    handleSubmit,
    setError,
    formState: { errors },
  } = useForm<CarsFiltersSchema>({
    resolver: zodResolver(carsFiltersSchema),
    defaultValues: {
      pickUpLocation: pickUpLocation ?? undefined,
      dropOffLocation: dropOffLocation ?? undefined,
      dateRange:
        startDate && endDate
          ? {
              from: new Date(startDate),
              to: new Date(endDate),
            }
          : undefined,
      startTime: startTime ?? undefined,
      endTime: endTime ?? undefined,
    },
  })

  const handleFilterCars = (data: CarsFiltersSchema) => {
    const { pickUpLocation, dropOffLocation, dateRange, startTime, endTime } =
      data
    const params = new URLSearchParams(searchParams)

    params.set('pickUpLocation', pickUpLocation)
    params.set('startDate', dateRange.from.toISOString())
    params.set('endDate', dateRange.to.toISOString())
    params.set('startTime', startTime)
    params.set('endTime', endTime)
    if (dropOffLocation) {
      params.set('dropOffLocation', dropOffLocation)
    } else {
      params.delete('dropOffLocation')
    }

    router.replace(`${pathname}?${params.toString()}`)
  }

  React.useEffect(() => {
    if (dropOffLocation) setDeliveryInAnotherPlace(true)
  }, [dropOffLocation])

  React.useEffect(() => {
    if (!startDate || !endDate) return

    const dateStartIsBetweenValidDates = dayjs(startDate).isBetween(
      toDay,
      maxDate,
      'day',
      '[]',
    )

    const dateEndIsBetweenValidDates = dayjs(endDate).isBetween(
      toDay.add(MIN_DAYS_RANGE - 1, 'day'),
      maxDate,
      'day',
      '[]',
    )

    if (!dateStartIsBetweenValidDates || !dateEndIsBetweenValidDates) {
      reset({
        dateRange: {
          from: undefined,
          to: undefined,
        },
      })

      setError('dateRange', {
        type: 'invalid_dates',
        message: 'Período de datas inválido',
      })
    }
  }, [])

  return (
    <div className="flex w-full flex-col gap-3">
      <div className="flex items-center space-x-2">
        <Checkbox
          id="deliveryInAnotherPlace"
          checked={deliveryInAnotherPlace}
          onCheckedChange={(checked) => setDeliveryInAnotherPlace(!!checked)}
        />
        <Label htmlFor="deliveryInAnotherPlace">
          Devolver carro em outro local
        </Label>
      </div>

      <form
        onSubmit={handleSubmit(handleFilterCars)}
        className="grid w-full grid-cols-[repeat(5,1fr)_auto] gap-4"
      >
        <Controller
          name="pickUpLocation"
          control={control}
          render={({ field }) => (
            <div className="flex flex-col gap-2">
              <Select onValueChange={field.onChange} value={field.value}>
                <SelectTrigger>
                  <SelectValue placeholder="Local de retirada" />
                </SelectTrigger>
                <SelectContent>
                  <SelectGroup>
                    <SelectLabel>Retirada</SelectLabel>
                    <SelectItem value="acari">Acari</SelectItem>
                    <SelectItem value="currais novos">Currais Novos</SelectItem>
                    <SelectItem value="cruzeta">Cruzeta</SelectItem>
                    <SelectItem value="são josé">São José</SelectItem>
                    <SelectItem value="carnaúba">Carnaúba</SelectItem>
                  </SelectGroup>
                </SelectContent>
              </Select>
              <span className="text-xs leading-tight text-rose-400">
                {errors.pickUpLocation?.message}
              </span>
            </div>
          )}
        />

        <Controller
          name="dropOffLocation"
          control={control}
          render={({ field }) => (
            <div className="flex flex-col gap-2">
              <Select onValueChange={field.onChange} value={field.value}>
                <SelectTrigger disabled={!deliveryInAnotherPlace}>
                  <SelectValue placeholder="Local de retirada" />
                </SelectTrigger>
                <SelectContent>
                  <SelectGroup>
                    <SelectLabel>Retirada</SelectLabel>
                    <SelectItem value="acari">Acari</SelectItem>
                    <SelectItem value="currais novos">Currais Novos</SelectItem>
                    <SelectItem value="cruzeta">Cruzeta</SelectItem>
                    <SelectItem value="são josé">São José</SelectItem>
                    <SelectItem value="carnaúba">Carnaúba</SelectItem>
                  </SelectGroup>
                </SelectContent>
              </Select>
              <span className="text-xs leading-tight text-rose-400">
                {errors.dropOffLocation?.message}
              </span>
            </div>
          )}
        />

        <Controller
          name="dateRange"
          control={control}
          render={({ field }) => (
            <div className="flex flex-col gap-2">
              <Popover>
                <PopoverTrigger asChild>
                  <Button variant="outline">
                    {field?.value?.from && field?.value?.to ? (
                      <span className="flex">
                        {dayjs(field.value.from).format('DD/MM/YYYY')} -{' '}
                        {dayjs(field.value.to).format('DD/MM/YYYY')}
                      </span>
                    ) : (
                      <span>Escolha a data</span>
                    )}
                  </Button>
                </PopoverTrigger>
                <PopoverContent className="w-auto p-0">
                  <Calendar
                    mode="range"
                    selected={{ from: field.value?.from, to: field.value?.to }}
                    numberOfMonths={2}
                    disabled={{ before: new Date() }}
                    min={MIN_DAYS_RANGE}
                    onSelect={field.onChange}
                    fromMonth={toDay.toDate()}
                    toDate={maxDate.toDate()}
                  />
                </PopoverContent>
              </Popover>
              <span className="text-xs leading-tight text-rose-400">
                {errors.dateRange?.message}
              </span>
            </div>
          )}
        />

        <Controller
          name="startTime"
          control={control}
          render={({ field }) => (
            <div className="flex flex-col gap-2">
              <Select onValueChange={field.onChange} value={field.value}>
                <SelectTrigger>
                  <SelectValue placeholder="Horário de retirada" />
                </SelectTrigger>
                <SelectContent>
                  <SelectGroup>
                    <SelectLabel>Retirada</SelectLabel>
                    <SelectItem value="08:00">00:00</SelectItem>
                    <SelectItem value="09:00">09:00</SelectItem>
                    <SelectItem value="10:00">10:00</SelectItem>
                    <SelectItem value="11:00">11:00</SelectItem>
                    <SelectItem value="12:00">12:00</SelectItem>
                  </SelectGroup>
                </SelectContent>
              </Select>
              <span className="text-xs leading-tight text-rose-400">
                {errors.startTime?.message}
              </span>
            </div>
          )}
        />

        <Controller
          name="endTime"
          control={control}
          render={({ field }) => (
            <div className="flex flex-col gap-2">
              <Select onValueChange={field.onChange} value={field.value}>
                <SelectTrigger>
                  <SelectValue placeholder="Horário de devolução" />
                </SelectTrigger>
                <SelectContent>
                  <SelectGroup>
                    <SelectLabel>Devolução</SelectLabel>
                    <SelectItem value="08:00">00:00</SelectItem>
                    <SelectItem value="09:00">09:00</SelectItem>
                    <SelectItem value="10:00">10:00</SelectItem>
                    <SelectItem value="11:00">11:00</SelectItem>
                    <SelectItem value="12:00">12:00</SelectItem>
                  </SelectGroup>
                </SelectContent>
              </Select>
              <span className="text-xs leading-tight text-rose-400">
                {errors.endTime?.message}
              </span>
            </div>
          )}
        />

        <Button type="submit">Buscar carros</Button>
      </form>
    </div>
  )
}
