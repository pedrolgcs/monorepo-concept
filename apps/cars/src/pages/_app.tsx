import { ThemeProvider } from '@repo/ui/context/theme-provider'
import { QueryClientProvider } from '@tanstack/react-query'
import { Provider as JotaiProvider } from 'jotai'
import type { AppProps } from 'next/app'

import { Header } from '@/features/header'
import { Theme } from '@/features/theme'
import { queryClient } from '@/lib/react-query'

if (process.env.NEXT_PUBLIC_API_MOCKING === 'enabled') {
  import('../lib/msw').then(({ initMocks }) => initMocks())
}

export default function App({ Component, pageProps }: AppProps) {
  return (
    <QueryClientProvider client={queryClient}>
      <ThemeProvider defaultTheme="shadcn">
        <JotaiProvider>
          <Theme>
            <Header />
            <Component {...pageProps} />
          </Theme>
        </JotaiProvider>
      </ThemeProvider>
    </QueryClientProvider>
  )
}
