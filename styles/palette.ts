import {
  blackA,
  blue,
  blueDark,
  green,
  greenDark,
  mauve,
  mauveDark,
  orange,
  orangeDark,
  red,
  redDark,
  violet,
  violetDark,
  whiteA,
  yellow,
  yellowDark,
} from '@radix-ui/colors'
import { convertKeysToRecord } from '@/utils/common'
import { Expand } from '@/utils/types'

type Scale = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12

export type ScaleColor<
  Color extends string,
  ScaleValue extends Scale = Scale,
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
  'blue',
  'violet',
] as const

export type Color = (typeof COLORS)[number]
export type Palette = Expand<ColorPalette<Color>>

// from radix-ui color docs
const COLORS_WITH_DARK_FOREGROUND_TEXT = [
  'sky',
  'mint',
  'lime',
  'yellow',
  'amber',
] as const

export function shouldUseDarkForegroundText(color: Color) {
  return COLORS_WITH_DARK_FOREGROUND_TEXT.includes(color as any)
}

export function isScaleColor(value: string): value is ScaleColor<Color> {
  const [color, scaleStr] = value.split('.') as [Color, string]
  const scale = Number(scaleStr)
  return (
    COLORS.includes(color) &&
    Number.isInteger(scale) &&
    scale >= 1 &&
    scale <= 12
  )
}

export function getScaleColor(
  color: Color | ScaleColor<Color>,
  defaultScale: Scale,
) {
  if (isScaleColor(color)) {
    return color
  }
  return makeScaleColor(color, defaultScale)
}

export const colors = convertKeysToRecord(COLORS)

export const mapColors = <Output>(
  fn: (
    getScale: <ScaleValue extends Scale>(
      scale: ScaleValue,
    ) => ScaleColor<Color, ScaleValue>,
    color: Color,
  ) => Output,
): Record<Color, Output> => {
  const result: Record<Color, Output> = {} as any
  for (const color of COLORS) {
    result[color] = fn((scale) => makeScaleColor(color, scale), color)
  }
  return result
}

export const shades = {
  ...makeColorPalette(blackA, 'blackA', 'black'),
  ...makeColorPalette(whiteA, 'whiteA', 'white'),
} as const

export const empty: Palette = {
  ...makeEmptyColorPalette('neutral'),
  ...makeEmptyColorPalette('red'),
  ...makeEmptyColorPalette('orange'),
  ...makeEmptyColorPalette('yellow'),
  ...makeEmptyColorPalette('green'),
  ...makeEmptyColorPalette('blue'),
  ...makeEmptyColorPalette('violet'),
} as const

export const light: Palette = {
  ...makeColorPalette(mauve, 'mauve', 'neutral'),
  ...makeColorPalette(red, 'red', 'red'),
  ...makeColorPalette(orange, 'orange', 'orange'),
  ...makeColorPalette(yellow, 'yellow', 'yellow'),
  ...makeColorPalette(green, 'green', 'green'),
  ...makeColorPalette(blue, 'blue', 'blue'),
  ...makeColorPalette(violet, 'violet', 'violet'),
} as const

export const dark: Palette = {
  ...makeColorPalette(mauveDark, 'mauve', 'neutral'),
  ...makeColorPalette(redDark, 'red', 'red'),
  ...makeColorPalette(orangeDark, 'orange', 'orange'),
  ...makeColorPalette(yellowDark, 'yellow', 'yellow'),
  ...makeColorPalette(greenDark, 'green', 'green'),
  ...makeColorPalette(blueDark, 'blue', 'blue'),
  ...makeColorPalette(violetDark, 'violet', 'violet'),
}
