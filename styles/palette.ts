import { Expand, Recordify } from '@/utils/types'
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
  blackA,
  whiteA,
} from '@radix-ui/colors'

type Scale = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12

type ScaleColor<
  Color extends string,
  ScaleValue extends Scale,
> = `${Color}.${ScaleValue}`

export function makeScaleColor<Color extends string, ScaleValue extends Scale>(
  color: Color,
  scale: ScaleValue,
): ScaleColor<Color, ScaleValue> {
  return `${color}.${scale}` as ScaleColor<Color, ScaleValue>
}

type ColorPalette<Color extends string> = {
  // Color = red, then red.1, red.2, ..., red.12
  [key in Color as ScaleColor<Color, Scale>]: string
}

function makeColorPalette<Color extends string>(
  palette: Record<string, string>,
  prefix: string,
  color: Color,
): Expand<ColorPalette<Color>> {
  const result: Record<string, string> = {}
  for (let i = 1; i <= 12; i++) {
    const actualColor = palette[`${prefix}${i}`]
    if (typeof actualColor !== 'string') {
      throw new Error(`Missing color ${prefix}${i}`)
    }
    result[`${color}.${i}`] = actualColor
  }
  return result as Expand<ColorPalette<Color>>
}

function makeEmptyColorPalette<Color extends string>(
  color: Color,
): Expand<ColorPalette<Color>> {
  const result: Record<string, string> = {}
  for (let i = 1; i <= 12; i++) {
    result[`${color}.${i}`] = ''
  }
  return result as Expand<ColorPalette<Color>>
}

export const COLORS = [
  'neutral',
  'red',
  'orange',
  'yellow',
  'green',
  'indigo',
  'violet',
  'black',
  'white',
] as const

export type Color = (typeof COLORS)[number]
export type Palette = Expand<ColorPalette<Color>>

export const color: Readonly<Recordify<Color>> = {
  neutral: 'neutral',
  red: 'red',
  orange: 'orange',
  yellow: 'yellow',
  green: 'green',
  indigo: 'indigo',
  violet: 'violet',
  black: 'black',
  white: 'white',
}

export const empty: Palette = {
  ...makeEmptyColorPalette('neutral'),
  ...makeEmptyColorPalette('red'),
  ...makeEmptyColorPalette('orange'),
  ...makeEmptyColorPalette('yellow'),
  ...makeEmptyColorPalette('green'),
  ...makeEmptyColorPalette('indigo'),
  ...makeEmptyColorPalette('violet'),
  ...makeEmptyColorPalette('black'),
  ...makeEmptyColorPalette('white'),
} as const

export const light: Palette = {
  ...makeColorPalette(mauve, 'mauve', 'neutral'),
  ...makeColorPalette(red, 'red', 'red'),
  ...makeColorPalette(orange, 'orange', 'orange'),
  ...makeColorPalette(yellow, 'yellow', 'yellow'),
  ...makeColorPalette(green, 'green', 'green'),
  ...makeColorPalette(indigo, 'indigo', 'indigo'),
  ...makeColorPalette(violet, 'violet', 'violet'),
  ...makeColorPalette(blackA, 'blackA', 'black'),
  ...makeColorPalette(whiteA, 'whiteA', 'white'),
} as const

export const dark: Palette = {
  ...makeColorPalette(mauveDark, 'mauve', 'neutral'),
  ...makeColorPalette(redDark, 'red', 'red'),
  ...makeColorPalette(orangeDark, 'orange', 'orange'),
  ...makeColorPalette(yellowDark, 'yellow', 'yellow'),
  ...makeColorPalette(greenDark, 'green', 'green'),
  ...makeColorPalette(indigoDark, 'indigo', 'indigo'),
  ...makeColorPalette(violetDark, 'violet', 'violet'),
  ...makeColorPalette(blackA, 'blackA', 'black'),
  ...makeColorPalette(whiteA, 'whiteA', 'white'),
}
