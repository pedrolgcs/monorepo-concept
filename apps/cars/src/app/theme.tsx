'use client'

import '@repo/ui/styles.css'

import { useTheme } from '@repo/ui/context/theme-provider'

export function Theme({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  const { theme } = useTheme()

  return <div data-theme={theme}>{children}</div>
}
