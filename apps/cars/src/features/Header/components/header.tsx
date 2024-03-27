import { CustomerService } from './customer-service'
import { Navigation } from './navigation'

type HeaderProps = {
  children: React.ReactNode
}

export function Header({ children }: HeaderProps) {
  return (
    <header className="flex w-full flex-col">
      <CustomerService />
      <Navigation>{children}</Navigation>
    </header>
  )
}
