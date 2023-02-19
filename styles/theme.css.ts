import {
  createGlobalTheme,
  createTheme,
  createThemeContract,
  globalStyle,
} from '@vanilla-extract/css'
import { TypographicScale } from './typography'
import { TYPOGRAPHIC_SCALE_FACTOR, TYPOGRAPHIC_SCALE_BASE } from './constants'
import * as palette from './colors'

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
  },
  radius: {
    xs: '2px',
    sm: '4px',
    md: '8px',
    lg: '16px',
    xl: '32px',
  },
  spacing: {
    xs: '10px',
    sm: '12px',
    md: '16px',
    lg: '20px',
    xl: '24px',
  },
  breakpoint: {
    xs: '576px',
    sm: '768px',
    md: '992px',
    lg: '1200px',
    xl: '1400px',
  },
  fonts: {
    heading: 'Georgia, Times, Times New Roman, serif',
    body: 'system-ui',
  },
})

export const color = createThemeContract({
  background: '',
  surface: '',
  text: '',
  textDimmed: '',
  neutral: palette.empty,
  blue: palette.empty,
  red: palette.empty,
  green: palette.empty,
  violet: palette.empty,
})

export const lightTheme = createTheme(color, {
  background: 'white',
  surface: palette.light.mauve[2],
  textDimmed: palette.light.mauve[11],
  text: palette.light.mauve[12],
  neutral: palette.light.mauve,
  blue: palette.light.blue,
  red: palette.light.red,
  green: palette.light.green,
  violet: palette.light.violet,
})

export const darkTheme = createTheme(color, {
  background: palette.dark.mauve[1],
  surface: palette.dark.mauve[2],
  textDimmed: palette.dark.mauve[11],
  text: palette.dark.mauve[12],
  neutral: palette.dark.mauve,
  blue: palette.dark.blue,
  red: palette.dark.red,
  green: palette.dark.green,
  violet: palette.dark.violet,
})

export const vars = {
  ...root,
  color,
}

globalStyle(':root', {
  background: vars.color.background,
  color: vars.color.text,
  fontFamily: vars.fonts.body,
  fontSize: vars.fontSize.md,
})
