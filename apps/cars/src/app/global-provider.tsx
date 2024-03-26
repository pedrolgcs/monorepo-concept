'use client'

import { ThemeProvider } from '@repo/ui/context/theme-provider'

type GlobalProvidersProps = {
  children: React.ReactNode
}

export function GlobalProvider({ children }: GlobalProvidersProps) {
  return <ThemeProvider>{children}</ThemeProvider>
}
