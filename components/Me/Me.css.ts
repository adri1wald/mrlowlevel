import { style } from '@vanilla-extract/css'
import { vars } from '@/styles/theme.css'

export const root = style({
  display: 'inline-flex',
  alignItems: 'center',
  justifyContent: 'center',
  verticalAlign: 'middle',
  overflow: 'hidden',
  userSelect: 'none',
  width: '200px',
  height: '200px',
  borderRadius: '100%',
  backgroundColor: vars.color.palette['black.3'],
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
  backgroundColor: vars.color.palette['violet.3'],
  color: vars.color.palette['violet.11'],
  fontSize: vars.fontSize.md,
  fontWeight: 500,
})
