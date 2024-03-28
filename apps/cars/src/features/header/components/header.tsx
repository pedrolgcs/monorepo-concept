'use client'

import { CustomerService } from './customer-service'
import { Filters } from './filters'
import { Navigation } from './navigation'

export function Header() {
  return (
    <header className="flex w-full flex-col">
      <CustomerService />
      <Navigation>
        <Filters />
      </Navigation>
    </header>
  )
}
