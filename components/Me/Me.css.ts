import { style } from '@vanilla-extract/css'
import { vars } from '@/styles/theme.css'
import { rem } from '@/styles/utils'

export const root = style({
  display: 'inline-flex',
  alignItems: 'center',
  justifyContent: 'center',
  verticalAlign: 'middle',
  overflow: 'hidden',
  userSelect: 'none',
  width: rem(200),
  height: rem(200),
  borderRadius: '100%',
  backgroundColor: vars.palette.shades['black.3'],
})

export const image = style({
  objectFit: 'cover',
  objectPosition: 'center',
  borderRadius: 'inherit',
  width: '100%',
  height: '100%',
})

export const fallback = style({
  width: '100%',
  height: '100%',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  backgroundColor: vars.palette.color['violet.3'],
  color: vars.palette.color['violet.11'],
  fontSize: vars.fontSize.md,
  fontWeight: 500,
})
