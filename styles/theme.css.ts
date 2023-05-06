import {
  createGlobalTheme,
  createTheme,
  createThemeContract,
  createVar,
  globalStyle,
} from '@vanilla-extract/css'
import { getVarName } from '@vanilla-extract/private'
import { TYPOGRAPHIC_SCALE_BASE, TYPOGRAPHIC_SCALE_FACTOR } from './constants'
import * as palette from './palette'
import { TypographicScale } from './typography'
import { rem } from './utils'

const PlayfairDisplayVar = createVar()
const OpenSansVar = createVar()

export const PlayfairDisplay = getVarName(PlayfairDisplayVar)
export const OpenSans = getVarName(OpenSansVar)

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

const root = createGlobalTheme(':root', {
  fontSize: {
    xxs: typographicScale.get(-3),
    xs: typographicScale.get(-2),
    sm: typographicScale.get(-1),
    md: typographicScale.get(0),
    lg: typographicScale.get(1),
    xl: typographicScale.get(2),
    xxl: typographicScale.get(3),
    xxxl: typographicScale.get(4),
    x4l: typographicScale.get(5),
    x5l: typographicScale.get(6),
  },
  radius: {
    xs: rem(2),
    sm: rem(4),
    md: rem(8),
    lg: rem(16),
    xl: rem(32),
  },
  spacing: {
    xxxs: rem(2),
    xxs: rem(4),
    xs: rem(8),
    sm: rem(12),
    md: rem(16),
    lg: rem(20),
    xl: rem(24),
    xxl: rem(32),
    xxxl: rem(40),
    x4l: rem(48),
    x5l: rem(64),
    x6l: rem(80),
    x7l: rem(96),
    x8l: rem(160),
  },
  font: {
    heading: PlayfairDisplayVar,
    body: OpenSansVar,
  },
})

const color = createThemeContract({
  background: '',
  surface: '',
  text: '',
  textDimmed: '',
  palette: palette.empty,
})

export const lightTheme = createTheme(color, {
  background: 'white',
  surface: palette.light['neutral.2'],
  textDimmed: palette.light['neutral.11'],
  text: palette.light['neutral.12'],
  palette: palette.light,
})

export const darkTheme = createTheme(color, {
  background: palette.dark['neutral.1'],
  surface: palette.dark['neutral.2'],
  textDimmed: palette.dark['neutral.11'],
  text: palette.dark['neutral.12'],
  palette: palette.dark,
})

export const vars = {
  ...root,
  fontWeight,
  breakpoint,
  color,
}

globalStyle(':root', {
  background: vars.color.background,
  color: vars.color.text,
  fontFamily: vars.font.body,
  fontSize: vars.fontSize.md,
})
