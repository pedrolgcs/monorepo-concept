import { Suspense } from 'react'

import { CustomerService } from './customer-service'
import { Filters } from './filters'
import { Navigation } from './navigation'

export function Header() {
  return (
    <header className="flex w-full flex-col">
      <CustomerService />
      <Navigation>
        <Suspense>
          <Filters />
        </Suspense>
      </Navigation>
    </header>
  )
}
