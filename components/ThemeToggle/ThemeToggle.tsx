import { useEffect, useState } from 'react'
import { useTheme } from 'next-themes'
import {
  IconSun as LightModeIcon,
  IconMoonStars as DarkModeIcon,
} from '@tabler/icons-react'
import { rem } from '@/styles/utils'
import { IconButton } from '../IconButton'

export function ThemeToggle() {
  const [mounted, setMounted] = useState(false)
  const { theme, setTheme } = useTheme()
  useEffect(() => setMounted(true), [])
  if (!mounted) return null
  return (
    <IconButton
      type="button"
      aria-label="Toggle Dark Mode"
      onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
      color={theme === 'dark' ? 'yellow' : 'violet'}
    >
      {theme === 'dark' ? (
        <LightModeIcon size={rem(16)} />
      ) : (
        <DarkModeIcon size={rem(16)} />
      )}
    </IconButton>
  )
}
