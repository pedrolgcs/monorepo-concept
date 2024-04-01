'use client'

import { ThemeProvider } from '@repo/ui/context/theme-provider'
import { Provider as JotaiProvider } from 'jotai'

type ProvidersProps = {
  children: React.ReactNode
}

export function Providers({ children }: ProvidersProps) {
  return (
    <ThemeProvider defaultTheme="shadcn">
      <JotaiProvider>{children}</JotaiProvider>
    </ThemeProvider>
  )
}
