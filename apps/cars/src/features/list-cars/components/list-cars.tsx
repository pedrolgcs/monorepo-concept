import { Alert, AlertDescription, AlertTitle } from '@repo/ui/components/alert'
import { Button } from '@repo/ui/components/button'
import { ArrowUpDown, OctagonAlert } from 'lucide-react'

import { Car } from './car'
import { Filters } from './filters'

export function ListCars() {
  return (
    <div className="grid w-full grid-cols-[1fr_3fr] gap-4">
      <Filters />

      <div className="flex flex-col gap-5">
        <Alert>
          <OctagonAlert className="size-5 stroke-slate-700" />
          <AlertTitle>Regras gerais para locação!</AlertTitle>
          <AlertDescription className="flex flex-col items-start gap-2">
            Confira as condições, requisitos e informações necessarias para
            alugar um carro.
            <Button size="sm" variant="outline">
              Conferir regras
            </Button>
          </AlertDescription>
        </Alert>

        <div className="flex w-full items-center justify-between">
          <span className="text-base font-semibold">
            Mais de 45 opções de carros para você
          </span>

          <Button className="gap-2 font-semibold" size="sm" variant="outline">
            <ArrowUpDown className="size-5" />
            Ordenar
          </Button>
        </div>

        {Array.from({ length: 10 }).map((_, index) => (
          <Car key={index} />
        ))}
      </div>
    </div>
  )
}
