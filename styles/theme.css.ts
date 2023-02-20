import {
  createGlobalTheme,
  createTheme,
  createThemeContract,
  createVar,
  globalStyle,
} from '@vanilla-extract/css'
import { getVarName } from '@vanilla-extract/private'
import { TypographicScale } from './typography'
import { TYPOGRAPHIC_SCALE_FACTOR, TYPOGRAPHIC_SCALE_BASE } from './constants'
import * as palette from './palette'

const PlayfairDisplayVar = createVar()
const OpenSansVar = createVar()

export const PlayfairDisplay = getVarName(PlayfairDisplayVar)
export const OpenSans = getVarName(OpenSansVar)

const typographicScale = new TypographicScale(
  TYPOGRAPHIC_SCALE_FACTOR,
).intoAbsolute(TYPOGRAPHIC_SCALE_BASE)

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
    xs: '2px',
    sm: '4px',
    md: '8px',
    lg: '16px',
    xl: '32px',
  },
  spacing: {
    xxxs: '2px',
    xxs: '4px',
    xs: '8px',
    sm: '12px',
    md: '16px',
    lg: '20px',
    xl: '24px',
    xxl: '32px',
    xxxl: '40px',
    x4l: '48px',
    x5l: '64px',
    x6l: '80px',
    x7l: '96px',
    x8l: '160px',
  },
  breakpoint: {
    xs: '576px',
    sm: '768px',
    md: '992px',
    lg: '1200px',
    xl: '1400px',
  },
  font: {
    heading: PlayfairDisplayVar,
    body: OpenSansVar,
  },
  color: {
    black: palette.black,
    white: palette.white,
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
  surface: palette.light.neutral[2],
  textDimmed: palette.light.neutral[11],
  text: palette.light.neutral[12],
  palette: palette.light,
})

export const darkTheme = createTheme(color, {
  background: palette.dark.neutral[1],
  surface: palette.dark.neutral[2],
  textDimmed: palette.dark.neutral[11],
  text: palette.dark.neutral[12],
  palette: palette.dark,
})

export const vars = {
  ...root,
  color: {
    ...root.color,
    ...color,
  },
}

globalStyle(':root', {
  background: vars.color.background,
  color: vars.color.text,
  fontFamily: vars.font.body,
  fontSize: vars.fontSize.md,
})
