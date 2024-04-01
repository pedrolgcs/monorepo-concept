'use client'

import '@repo/ui/styles.css'

import { useTheme } from '@repo/ui/context/theme-provider'
import { Suspense } from 'react'

export function Theme({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  const { theme } = useTheme()

  return (
    <Suspense fallback={null}>
      <div data-theme={theme}>{children}</div>
    </Suspense>
  )
}
