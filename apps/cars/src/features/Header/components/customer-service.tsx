'use client'

import { Button } from '@repo/ui/components/button'
import * as Dropdown from '@repo/ui/components/dropdown-menu'
import { Label } from '@repo/ui/components/label'
import { Separator } from '@repo/ui/components/separator'
import { Menu, Pencil, X } from 'lucide-react'

export function CustomerService() {
  return (
    <div className="mx-auto flex w-full max-w-7xl items-center justify-between p-3">
      <Dropdown.DropdownMenu>
        <Dropdown.DropdownMenuTrigger asChild>
          <div className="flex gap-2">
            <Menu />
            Menu
          </div>
        </Dropdown.DropdownMenuTrigger>

        <Dropdown.DropdownMenuContent className="w-56">
          <Dropdown.DropdownMenuLabel>Navegação</Dropdown.DropdownMenuLabel>
          <Dropdown.DropdownMenuSeparator />
          <Dropdown.DropdownMenuGroup>
            <Dropdown.DropdownMenuItem>Home</Dropdown.DropdownMenuItem>
            <Dropdown.DropdownMenuItem>Minha Agenda</Dropdown.DropdownMenuItem>
            <Dropdown.DropdownMenuItem>
              Central de Reservas
            </Dropdown.DropdownMenuItem>
            <Dropdown.DropdownMenuItem>
              Painel de Performance
            </Dropdown.DropdownMenuItem>
            <Dropdown.DropdownMenuItem>
              Show de Ofertas
            </Dropdown.DropdownMenuItem>
          </Dropdown.DropdownMenuGroup>
        </Dropdown.DropdownMenuContent>
      </Dropdown.DropdownMenu>

      <div className="flex items-center gap-2">
        <Button size="sm" variant="outline">
          Chat CVC
        </Button>

        <div className="flex items-center gap-1">
          <Label className="font-bold">Cliente:</Label>
          <Label>Não identificado</Label>
        </div>

        <Separator orientation="vertical" className="h-5 bg-foreground" />

        <div className="flex items-center gap-1">
          <Label className="font-bold">Canal:</Label>
          <Label>Não identificado</Label>
        </div>

        <Button variant="outline" size="sm">
          <Pencil className="size-4" />
        </Button>

        <Button variant="outline" size="sm">
          <X className="size-4" />
        </Button>
      </div>
    </div>
  )
}
