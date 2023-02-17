import {
  gray,
  blue,
  red,
  green,
  violet,
  grayDark,
  blueDark,
  redDark,
  greenDark,
  violetDark,
} from '@radix-ui/colors'
import {
  createGlobalTheme,
  createTheme,
  createThemeContract,
} from '@vanilla-extract/css'

const root = createGlobalTheme(':root', {
  space: {
    small: '4px',
    medium: '8px',
    large: '16px',
  },
  fonts: {
    heading: 'Georgia, Times, Times New Roman, serif',
    body: 'system-ui',
  },
})

export const color = createThemeContract({
  // grays
  gray1: '',
  gray2: '',
  gray3: '',
  gray4: '',
  gray5: '',
  gray6: '',
  gray7: '',
  gray8: '',
  gray9: '',
  gray10: '',
  gray11: '',
  gray12: '',
  // blues
  blue1: '',
  blue2: '',
  blue3: '',
  blue4: '',
  blue5: '',
  blue6: '',
  blue7: '',
  blue8: '',
  blue9: '',
  blue10: '',
  blue11: '',
  blue12: '',
  // reds
  red1: '',
  red2: '',
  red3: '',
  red4: '',
  red5: '',
  red6: '',
  red7: '',
  red8: '',
  red9: '',
  red10: '',
  red11: '',
  red12: '',
  // greens
  green1: '',
  green2: '',
  green3: '',
  green4: '',
  green5: '',
  green6: '',
  green7: '',
  green8: '',
  green9: '',
  green10: '',
  green11: '',
  green12: '',
  // violet
  violet1: '',
  violet2: '',
  violet3: '',
  violet4: '',
  violet5: '',
  violet6: '',
  violet7: '',
  violet8: '',
  violet9: '',
  violet10: '',
  violet11: '',
  violet12: '',
})

export const lightTheme = createTheme(color, {
  ...gray,
  ...blue,
  ...red,
  ...green,
  ...violet,
})

export const darkTheme = createTheme(color, {
  ...grayDark,
  ...blueDark,
  ...redDark,
  ...greenDark,
  ...violetDark,
})

export const vars = {
  ...root,
  color,
}
