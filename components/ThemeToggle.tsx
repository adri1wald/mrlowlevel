import { useEffect, useState } from 'react'
import { useTheme } from 'next-themes'
import {
  IconSun as LightModeIcon,
  IconMoonStars as DarkModeIcon,
} from '@tabler/icons-react'
import { IconButton } from './IconButton'

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
      color={theme === 'dark' ? 'yellow' : 'indigo'}
    >
      {theme === 'dark' ? (
        <LightModeIcon size={16} />
      ) : (
        <DarkModeIcon size={16} />
      )}
    </IconButton>
  )
}
