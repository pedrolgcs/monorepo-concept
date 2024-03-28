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

type DateRange = {
  from: Date | undefined
  to?: Date | undefined
}

export function Filters() {
  const [date, setDate] = React.useState<DateRange>({
    from: undefined,
    to: undefined,
  })
  const [deliveryInAnotherPlace, setDeliveryInAnotherPlace] =
    React.useState(false)

  const toDay = dayjs()
  const maxDate = toDay.add(1, 'year')

  const handleChangeDateRange = (range: DateRange | undefined) => {
    if (!range) return
    setDate(range)
  }

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

      <div className="grid w-full grid-cols-[repeat(5,1fr)_auto] gap-4">
        <Select>
          <SelectTrigger>
            <SelectValue placeholder="Local de retirada" />
          </SelectTrigger>
          <SelectContent>
            <SelectGroup>
              <SelectLabel>Retirada</SelectLabel>
              <SelectItem value="apple">Acari</SelectItem>
              <SelectItem value="banana">Currais Novos</SelectItem>
              <SelectItem value="blueberry">Cruzeta</SelectItem>
              <SelectItem value="grapes">São José</SelectItem>
              <SelectItem value="pineapple">Carnaúba</SelectItem>
            </SelectGroup>
          </SelectContent>
        </Select>

        <Select>
          <SelectTrigger disabled={!deliveryInAnotherPlace}>
            <SelectValue placeholder="Local de devolução" />
          </SelectTrigger>
          <SelectContent>
            <SelectGroup>
              <SelectLabel>Devolução</SelectLabel>
              <SelectItem value="apple">Acari</SelectItem>
              <SelectItem value="banana">Currais Novos</SelectItem>
              <SelectItem value="blueberry">Cruzeta</SelectItem>
              <SelectItem value="grapes">São José</SelectItem>
              <SelectItem value="pineapple">Carnaúba</SelectItem>
            </SelectGroup>
          </SelectContent>
        </Select>

        <Popover>
          <PopoverTrigger asChild>
            <Button variant="outline">
              {date.from && date.to ? (
                <span className="flex">
                  {dayjs(date.from).format('DD/MM/YYYY')} -{' '}
                  {dayjs(date.to).format('DD/MM/YYYY')}
                </span>
              ) : (
                <span>Escolha a data</span>
              )}
            </Button>
          </PopoverTrigger>
          <PopoverContent className="w-auto p-0">
            <Calendar
              mode="range"
              selected={date}
              numberOfMonths={2}
              disabled={{ before: new Date() }}
              min={3}
              onSelect={handleChangeDateRange}
              fromMonth={toDay.toDate()}
              toDate={maxDate.toDate()}
            />
          </PopoverContent>
        </Popover>

        <Select>
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

        <Select>
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

        <Button>Buscar carros</Button>
      </div>
    </div>
  )
}
