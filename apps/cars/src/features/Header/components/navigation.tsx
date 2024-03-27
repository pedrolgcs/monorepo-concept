'use client'

import { Button } from '@repo/ui/components/button'
import { Label } from '@repo/ui/components/label'
import * as Menu from '@repo/ui/components/navigation-menu'
import {
  Briefcase,
  Bus,
  Car,
  CreditCard,
  Gift,
  Globe,
  Home,
  Hotel,
  LogOut,
  Luggage,
  Plane,
  ShieldCheck,
  Ship,
  ShoppingBag,
  Ticket,
  Wifi,
} from 'lucide-react'
import Image from 'next/image'
import React from 'react'

type NavigationProps = {
  children: React.ReactNode
}

export function Navigation({ children }: NavigationProps) {
  return (
    <div className="flex w-full flex-col border border-slate-200">
      <div className="mx-auto flex w-full max-w-7xl justify-between py-6">
        <div className="flex items-center gap-4">
          <Image src="/cvc-logo.png" width={80} height={80} alt="CVC" />

          <Menu.NavigationMenu>
            <Menu.NavigationMenuList>
              <Menu.NavigationMenuItem>
                <Menu.NavigationMenuLink href="#">
                  <Plane className="size-4" />
                  Passagens
                </Menu.NavigationMenuLink>
              </Menu.NavigationMenuItem>

              <Menu.NavigationMenuItem>
                <Menu.NavigationMenuLink href="#">
                  <Hotel className="size-4" />
                  Hotéis
                </Menu.NavigationMenuLink>
              </Menu.NavigationMenuItem>

              <Menu.NavigationMenuItem>
                <Menu.NavigationMenuLink href="#">
                  <Luggage className="size-4" />
                  A+H
                </Menu.NavigationMenuLink>
              </Menu.NavigationMenuItem>

              <Menu.NavigationMenuItem>
                <Menu.NavigationMenuLink href="#">
                  <Briefcase className="size-4" />
                  Pacote exclusivo
                </Menu.NavigationMenuLink>
              </Menu.NavigationMenuItem>

              <Menu.NavigationMenuItem>
                <Menu.NavigationMenuLink href="#">
                  <Globe className="size-4" />
                  Circuito
                </Menu.NavigationMenuLink>
              </Menu.NavigationMenuItem>

              <Menu.NavigationMenuItem>
                <Menu.NavigationMenuTrigger>Mais</Menu.NavigationMenuTrigger>
                <Menu.NavigationMenuContent>
                  <ul className="grid gap-3 p-4 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]">
                    <Menu.NavigationMenuLink href="#">
                      <Car className="size-4" />
                      Carros
                    </Menu.NavigationMenuLink>

                    <Menu.NavigationMenuLink href="#">
                      <Ticket className="size-4" />
                      Serviços
                    </Menu.NavigationMenuLink>

                    <Menu.NavigationMenuLink href="#">
                      <ShieldCheck className="size-4" />
                      Seguro viagem
                    </Menu.NavigationMenuLink>

                    <Menu.NavigationMenuLink href="#">
                      <Ship className="size-4" />
                      Cruzeiros
                    </Menu.NavigationMenuLink>

                    <Menu.NavigationMenuLink href="#">
                      <Home className="size-4" />
                      Casas
                    </Menu.NavigationMenuLink>

                    <Menu.NavigationMenuLink href="#">
                      <Bus className="size-4" />
                      Rodoviário
                    </Menu.NavigationMenuLink>

                    <Menu.NavigationMenuLink href="#">
                      <CreditCard className="size-4" />
                      Vale viagem
                    </Menu.NavigationMenuLink>

                    <Menu.NavigationMenuLink href="#">
                      <Gift className="size-4" />
                      Lista de presentes
                    </Menu.NavigationMenuLink>

                    <Menu.NavigationMenuLink href="#">
                      <Wifi className="size-4" />
                      Chip
                    </Menu.NavigationMenuLink>
                  </ul>
                </Menu.NavigationMenuContent>
              </Menu.NavigationMenuItem>
            </Menu.NavigationMenuList>
          </Menu.NavigationMenu>
        </div>

        <div className="flex items-center justify-start gap-6">
          <div className="flex flex-col gap-3">
            <Label>Filial 1002</Label>
            <Label>Olá, Pedro Henrique Lopes Galvão</Label>
            <Button size="sm" className="w-min gap-2">
              <LogOut />
              Sair
            </Button>
          </div>

          <ShoppingBag className="size-7 stroke-primary" />
        </div>
      </div>

      <div className="mx-auto flex w-full max-w-7xl pb-6">{children}</div>
    </div>
  )
}
