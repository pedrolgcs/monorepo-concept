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
import React from 'react'
import { Controller, useForm } from 'react-hook-form'
import { z } from 'zod'

const carsFiltersSchema = z.object({
  pickUpLocation: z.string().min(1, { message: 'Selecione uma localidade' }),
  dropOffLocation: z.string().optional(),
  dateRange: z.object({
    from: z.date(),
    to: z.date(),
  }),
  startTime: z.string().min(1, { message: 'Selecione uma hora' }),
  endTime: z.string().min(1, { message: 'Selecione uma hora' }),
})

type CarsFiltersSchema = z.infer<typeof carsFiltersSchema>

export function Filters() {
  const [deliveryInAnotherPlace, setDeliveryInAnotherPlace] =
    React.useState(false)

  const {
    watch,
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<CarsFiltersSchema>({
    resolver: zodResolver(carsFiltersSchema),
    defaultValues: {
      dateRange: {
        from: undefined,
        to: undefined,
      },
    },
  })

  const dateRange = watch('dateRange')

  const handleFilterCars = (data: CarsFiltersSchema) => {
    console.log(data)
  }

  const toDay = dayjs()
  const maxDate = toDay.add(1, 'year')

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
                    {dateRange.from && dateRange.to ? (
                      <span className="flex">
                        {dayjs(dateRange.from).format('DD/MM/YYYY')} -{' '}
                        {dayjs(dateRange.to).format('DD/MM/YYYY')}
                      </span>
                    ) : (
                      <span>Escolha a data</span>
                    )}
                  </Button>
                </PopoverTrigger>
                <PopoverContent className="w-auto p-0">
                  <Calendar
                    mode="range"
                    selected={dateRange}
                    numberOfMonths={2}
                    disabled={{ before: new Date() }}
                    min={3}
                    onSelect={field.onChange}
                    fromMonth={toDay.toDate()}
                    toDate={maxDate.toDate()}
                  />
                </PopoverContent>
              </Popover>
              <span className="text-xs leading-tight text-rose-400">
                {errors.dateRange?.to?.message}
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
