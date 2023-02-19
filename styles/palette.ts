import {
  mauve,
  red,
  orange,
  yellow,
  green,
  indigo,
  violet,
  mauveDark,
  redDark,
  orangeDark,
  yellowDark,
  greenDark,
  indigoDark,
  violetDark,
} from '@radix-ui/colors'

type Palette = {
  readonly 1: string
  readonly 2: string
  readonly 3: string
  readonly 4: string
  readonly 5: string
  readonly 6: string
  readonly 7: string
  readonly 8: string
  readonly 9: string
  readonly 10: string
  readonly 11: string
  readonly 12: string
}

function makePalette(palette: Record<string, string>, prefix: string): Palette {
  const result: Record<string, string> = {}
  for (let i = 1; i <= 12; i++) {
    const color = palette[`${prefix}${i}`]
    if (color == null) {
      throw new Error(`Missing color ${prefix}${i}`)
    }
    result[i] = color
  }
  return result as Palette
}

export const emptyPalette: Palette = {
  1: '',
  2: '',
  3: '',
  4: '',
  5: '',
  6: '',
  7: '',
  8: '',
  9: '',
  10: '',
  11: '',
  12: '',
}

export const empty = {
  neutral: emptyPalette,
  red: emptyPalette,
  orange: emptyPalette,
  yellow: emptyPalette,
  green: emptyPalette,
  indigo: emptyPalette,
  violet: emptyPalette,
} as const

export const light = {
  neutral: makePalette(mauve, 'mauve'),
  red: makePalette(red, 'red'),
  orange: makePalette(orange, 'orange'),
  yellow: makePalette(yellow, 'yellow'),
  green: makePalette(green, 'green'),
  indigo: makePalette(indigo, 'indigo'),
  violet: makePalette(violet, 'violet'),
} as const

export const dark = {
  neutral: makePalette(mauveDark, 'mauve'),
  red: makePalette(redDark, 'red'),
  orange: makePalette(orangeDark, 'orange'),
  yellow: makePalette(yellowDark, 'yellow'),
  green: makePalette(greenDark, 'green'),
  indigo: makePalette(indigoDark, 'indigo'),
  violet: makePalette(violetDark, 'violet'),
}
