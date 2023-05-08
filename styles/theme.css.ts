import {
  createGlobalTheme,
  createTheme,
  createThemeContract,
  createVar,
  globalStyle,
} from '@vanilla-extract/css'
import { TYPOGRAPHIC_SCALE_BASE, TYPOGRAPHIC_SCALE_FACTOR } from './constants'
import * as palette from './palette'
import { TypographicScale } from './typography'
import { percent, rem } from './utils'

type CSSVarFunction = ReturnType<typeof createVar>

const typographicScale = new TypographicScale(TYPOGRAPHIC_SCALE_FACTOR).intoRem(
  TYPOGRAPHIC_SCALE_BASE,
)

const breakpoint = {
  xs: '576px',
  sm: '768px',
  md: '992px',
  lg: '1200px',
  xl: '1400px',
} as const

const fontWeight = {
  light: 300,
  regular: 400,
  medium: 500,
  semi: 600,
  bold: 700,
} as const

const absoluteSizes = {
  0.5: rem(2),
  1: rem(4),
  1.5: rem(6),
  2: rem(8),
  2.5: rem(10),
  3: rem(12),
  3.5: rem(14),
  4: rem(16),
  5: rem(20),
  6: rem(24),
  7: rem(28),
  8: rem(32),
  9: rem(36),
  10: rem(40),
  11: rem(44),
  12: rem(48),
  14: rem(56),
  16: rem(64),
  20: rem(80),
  24: rem(96),
  28: rem(112),
  32: rem(128),
  36: rem(144),
  40: rem(160),
  44: rem(176),
  48: rem(192),
  52: rem(208),
  56: rem(224),
  60: rem(240),
  64: rem(256),
  72: rem(288),
  80: rem(320),
  96: rem(384),
} as const

const percentSizes = {
  '1/2': percent(1 / 2),
  '1/3': percent(1 / 3),
  '2/3': percent(2 / 3),
  '1/4': percent(1 / 4),
  '2/4': percent(2 / 4),
  '3/4': percent(3 / 4),
  '1/5': percent(1 / 5),
  '2/5': percent(2 / 5),
  '3/5': percent(3 / 5),
  '4/5': percent(4 / 5),
  '1/6': percent(1 / 6),
  '2/6': percent(2 / 6),
  '3/6': percent(3 / 6),
  '4/6': percent(4 / 6),
  '5/6': percent(5 / 6),
  '1/12': percent(1 / 12),
  '2/12': percent(2 / 12),
  '3/12': percent(3 / 12),
  '4/12': percent(4 / 12),
  '5/12': percent(5 / 12),
  '6/12': percent(6 / 12),
  '7/12': percent(7 / 12),
  '8/12': percent(8 / 12),
  '9/12': percent(9 / 12),
  '10/12': percent(10 / 12),
  '11/12': percent(11 / 12),
} as const

const namedSizes = {
  xs: rem(320),
  sm: rem(384),
  md: rem(448),
  lg: rem(512),
  xl: rem(576),
  '2xl': rem(672),
  '3xl': rem(768),
  '4xl': rem(896),
  '5xl': rem(1024),
  '6xl': rem(1152),
  '7xl': rem(1280),
} as const

const root = createGlobalTheme(':root', {
  fontSize: {
    '2xs': typographicScale.get(-3),
    xs: typographicScale.get(-2),
    sm: typographicScale.get(-1),
    md: typographicScale.get(0),
    lg: typographicScale.get(1),
    xl: typographicScale.get(2),
    '2xl': typographicScale.get(3),
    '3xl': typographicScale.get(4),
    '4xl': typographicScale.get(5),
    '5xl': typographicScale.get(6),
  },
  radius: {
    xs: rem(2),
    sm: rem(4),
    md: rem(8),
    lg: rem(16),
    xl: rem(32),
  },
  spacing: {
    '3xs': rem(2),
    '2xs': rem(4),
    xs: rem(8),
    sm: rem(12),
    md: rem(16),
    lg: rem(20),
    xl: rem(24),
    '2xl': rem(32),
    '3xl': rem(40),
    '4xl': rem(48),
    '5xl': rem(64),
    '6xl': rem(80),
    '7xl': rem(96),
    '8xl': rem(160),
  },
  size: {
    absolute: absoluteSizes,
    percent: percentSizes,
    named: namedSizes,
  },
  font: {
    heading: 'var(--font-playfair-display)' satisfies CSSVarFunction,
    body: 'var(--font-open-sans)' satisfies CSSVarFunction,
  },
  palette: {
    shades: palette.shades,
  },
})

const paletteContract = createThemeContract({
  background: '',
  surface: '',
  text: '',
  textDimmed: '',
  color: palette.empty,
})

export const lightTheme = createTheme(paletteContract, {
  background: 'white',
  surface: palette.light['neutral.2'],
  textDimmed: palette.light['neutral.11'],
  text: palette.light['neutral.12'],
  color: palette.light,
})

export const darkTheme = createTheme(paletteContract, {
  background: palette.dark['neutral.1'],
  surface: palette.dark['neutral.2'],
  textDimmed: palette.dark['neutral.11'],
  text: palette.dark['neutral.12'],
  color: palette.dark,
})

export const vars = {
  ...root,
  fontWeight,
  breakpoint,
  palette: {
    ...root.palette,
    ...paletteContract,
  },
}

globalStyle(':root', {
  background: vars.palette.background,
  color: vars.palette.text,
  fontFamily: vars.font.body,
  fontSize: vars.fontSize.md,
})
