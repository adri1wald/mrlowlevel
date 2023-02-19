import {
  mauve,
  blue,
  red,
  green,
  violet,
  mauveDark,
  blueDark,
  redDark,
  greenDark,
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

export const empty: Palette = {
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

export const light = {
  mauve: makePalette(mauve, 'mauve'),
  blue: makePalette(blue, 'blue'),
  red: makePalette(red, 'red'),
  green: makePalette(green, 'green'),
  violet: makePalette(violet, 'violet'),
} as const

export const dark = {
  mauve: makePalette(mauveDark, 'mauve'),
  blue: makePalette(blueDark, 'blue'),
  red: makePalette(redDark, 'red'),
  green: makePalette(greenDark, 'green'),
  violet: makePalette(violetDark, 'violet'),
}
