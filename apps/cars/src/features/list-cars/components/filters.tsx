'use client'

import { Button } from '@repo/ui/components/button'
import { Checkbox } from '@repo/ui/components/checkbox'
import { Label } from '@repo/ui/components/label'
import { Slider } from '@repo/ui/components/slider'
import { SlidersHorizontal } from 'lucide-react'

const CHARACTERISTICS_MOCK = [
  {
    id: 'all',
    label: 'Todas as opções',
  },
  {
    id: 'five-place',
    label: '5 lugares',
  },
  {
    id: 'seven-place',
    label: '7 lugares',
  },
  {
    id: 'air-conditioning',
    label: 'Ar-condicionado',
  },
  {
    id: 'baggage',
    label: 'Até 2 malas',
  },
  {
    id: 'three-baggage',
    label: 'Até 3 malas',
  },
  {
    id: 'automatic-transmission',
    label: 'Câmbio automatico',
  },
  {
    id: 'manual-transmission',
    label: 'Câmbio manual',
  },
  {
    id: 'hydraulic-drive',
    label: 'Direção hidráulica',
  },
] as const

const RENTAL_COMPANIES = [
  {
    id: 'all',
    label: 'Todas as locadoras',
  },
  {
    id: 'alamo',
    label: 'Alamo',
  },
  {
    id: 'avis',
    label: 'Avis',
  },
  {
    id: 'budget',
    label: 'Budget',
  },
  {
    id: 'europcar',
    label: 'Europcar',
  },
  {
    id: 'Keddy',
    label: 'Keddy',
  },
] as const

const CATEGORIES = [
  {
    id: 'all',
    label: 'Todas as categorias',
  },
  {
    id: 'economy',
    label: 'Econômico',
  },
  {
    id: 'business',
    label: 'Intermediário',
  },
  {
    id: 'compact',
    label: 'Compact',
  },
  {
    id: 'suv',
    label: 'SUV',
  },
  {
    id: 'utility',
    label: 'Utilitário',
  },
  {
    id: 'luxury',
    label: 'Luxo',
  },
] as const

export function Filters() {
  return (
    <aside className="flex h-fit flex-col space-y-7 rounded-lg border border-slate-200 py-4">
      <div className="flex w-full items-center justify-between px-4">
        <div className="flex items-center gap-2">
          <SlidersHorizontal />
          <span className="text-base font-semibold">Filtros</span>
        </div>
        <Button size="sm" variant="outline">
          Limpar filtros
        </Button>
      </div>

      <div className="flex flex-col gap-5 px-4">
        <div className="flex items-center justify-between">
          <span className="text-base font-semibold">Valor do aluguel</span>
          <span className="text-base font-normal text-slate-700">
            R$ 1250,00
          </span>
        </div>
        <Slider defaultValue={[33]} max={100} step={1} />
      </div>

      <div className="flex flex-col gap-5">
        <div className="w-full bg-slate-100 py-2">
          <span className="px-4 text-base font-semibold">Características</span>
        </div>

        <div className="flex flex-col gap-4 px-4">
          {CHARACTERISTICS_MOCK.map((characteristic) => (
            <div key={characteristic.id} className="flex gap-3">
              <Checkbox id={characteristic.id} value={characteristic.id} />
              <Label htmlFor={characteristic.id} className="font-normal">
                {characteristic.label}
              </Label>
            </div>
          ))}
        </div>
      </div>

      <div className="flex flex-col gap-5">
        <div className="w-full bg-slate-100 py-2">
          <span className="px-4 text-base font-semibold">Locadoras</span>
        </div>

        <div className="flex flex-col gap-4 px-4">
          {RENTAL_COMPANIES.map((compagnie) => (
            <div key={compagnie.id} className="flex gap-3">
              <Checkbox id={compagnie.id} value={compagnie.id} />
              <Label htmlFor={compagnie.id} className="font-normal">
                {compagnie.label}
              </Label>
            </div>
          ))}
        </div>
      </div>

      <div className="flex flex-col gap-5">
        <div className="w-full bg-slate-100 py-2">
          <span className="px-4 text-base font-semibold">
            Categorias de carro
          </span>
        </div>

        <div className="flex flex-col gap-4 px-4">
          {CATEGORIES.map((category) => (
            <div key={category.id} className="flex gap-3">
              <Checkbox id={category.id} value={category.id} />
              <Label htmlFor={category.id} className="font-normal">
                {category.label}
              </Label>
            </div>
          ))}
        </div>
      </div>
    </aside>
  )
}
