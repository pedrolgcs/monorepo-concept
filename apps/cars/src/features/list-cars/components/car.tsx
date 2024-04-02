'use client'

import { Badge } from '@repo/ui/components/badge'
import { Button } from '@repo/ui/components/button'
import { ScrollArea } from '@repo/ui/components/scroll-area'
import { Separator } from '@repo/ui/components/separator'
import { cn } from '@repo/ui/utils'
import {
  CheckCircle,
  Cog,
  Lock,
  Luggage,
  Snowflake,
  User,
  Zap,
} from 'lucide-react'
import Image from 'next/image'

export function Car() {
  return (
    <div className="grid w-full grid-cols-[1fr_2fr_auto] gap-3 rounded-md border border-slate-200 p-4 shadow-md">
      <div className="flex flex-col gap-4">
        <Image
          src="/car.jpeg"
          priority={false}
          width={200}
          height={200}
          alt="Onix"
          className="w-full"
        />

        <ScrollArea className="flex max-h-40 w-full flex-col rounded-md border border-slate-200 p-1">
          <div className="flex w-full flex-col gap-3 p-1">
            {Array.from({ length: 5 }).map((_, index) => (
              <div
                key={index}
                className={cn(
                  'flex w-full items-center justify-center gap-2 p-2',
                  index === 0 && 'border-l-4 border-l-sky-500',
                )}
              >
                <Image
                  src="/movida.png"
                  height={30}
                  width={60}
                  alt="Movida"
                  className="size-auto"
                />
                <div className="flex items-center gap-1">
                  <span className="text-sm font-semibold">R$ 268,00</span>
                  <span className="text-xs">por dia</span>
                </div>
              </div>
            ))}
          </div>
        </ScrollArea>
      </div>

      <div className="flex flex-col gap-3 border-r">
        <div className="flex items-center gap-2">
          <span className="text-base font-semibold">Econômico</span>

          <Separator orientation="vertical" />

          <Badge className="flex items-center gap-2 py-1" variant="outline">
            <User className="size-4" />
            <span className="text-xs">5</span>
          </Badge>

          <Badge className="flex items-center gap-2 py-1" variant="outline">
            <Luggage className="size-4" />
            <span className="text-xs">1</span>
          </Badge>

          <Badge className="flex items-center gap-2 py-1" variant="outline">
            <Lock className="size-4" />
            <span className="text-xs">1</span>
          </Badge>
        </div>

        <span className="text-base font-bold">
          Onix, Ford ka, Argo 1.0 ou similar
        </span>

        <div className="flex items-center gap-1 text-sm">
          <span className="font-semibold">Código da categoria:</span>
          <span>ECMN</span>
        </div>

        <div className="flex flex-wrap items-center gap-2">
          <Badge className="py-2" variant="secondary">
            Idade mínima 20 anos
          </Badge>

          <Badge className="py-2" variant="secondary">
            Mínimo de 2 anos de habilitação
          </Badge>
        </div>

        <span className="text-sm font-semibold">Este carro inclui</span>

        <div className="flex flex-wrap items-center gap-2 text-xs">
          <Badge variant="outline" className="flex items-center gap-2 py-1">
            <Cog className="size-4" />
            Câmbio manual
          </Badge>

          <Badge variant="outline" className="flex items-center gap-2 py-1">
            <Zap className="size-4" />
            Vidro elétrico
          </Badge>

          <Badge variant="outline" className="flex items-center gap-2 py-1">
            <Snowflake className="size-4" />
            Ar-condicionado
          </Badge>
        </div>

        <Separator orientation="horizontal" />

        <div className="flex flex-wrap items-center gap-2 text-sm text-slate-700">
          <span className="flex items-center gap-2">
            <CheckCircle className="size-4 stroke-emerald-500" />
            Quilometragem livre
          </span>

          <span className="flex items-center gap-2">
            <CheckCircle className="size-4 stroke-emerald-500" />
            Proteção do veículo
          </span>

          <span className="flex items-center gap-2">
            <CheckCircle className="size-4 stroke-emerald-500" />
            Proteção a terceiros
          </span>

          <span className="flex items-center gap-2">
            <CheckCircle className="size-4 stroke-emerald-500" />
            Taxas de serviço inclusas
          </span>
        </div>
      </div>

      <div className="flex flex-col items-end justify-between">
        <div className="flex flex-col gap-4">
          <div className="flex items-center gap-2">
            <Badge variant="secondary">20%</Badge>
            <Badge variant="secondary">Combo</Badge>
          </div>

          <div className="flex flex-col items-end gap-1">
            <span className="text-base font-semibold">Preço total</span>
            <div className="flex items-center gap-1 text-sm text-slate-500">
              <span>de</span>
              <span className="line-through">R$ 258 por</span>
            </div>

            <span className="text-xl font-bold text-slate-900">R$ 128,00</span>
          </div>
        </div>

        <Button>Conferir detalhes</Button>
      </div>
    </div>
  )
}
