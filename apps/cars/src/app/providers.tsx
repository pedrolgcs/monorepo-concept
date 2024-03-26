'use client'

import { ThemeProvider } from '@repo/ui/context/theme-provider'

type ProvidersProps = {
  children: React.ReactNode
}

export function Providers({ children }: ProvidersProps) {
  return <ThemeProvider>{children}</ThemeProvider>
}
