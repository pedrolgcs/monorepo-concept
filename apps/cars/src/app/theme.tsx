'use client'

import { useTheme } from '@repo/ui/context/theme-provider'

export function Theme({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  const { theme } = useTheme()

  return <div data-theme={theme}>{children}</div>
}
