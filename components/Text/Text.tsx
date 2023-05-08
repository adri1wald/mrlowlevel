import { forwardRef } from 'react'
import { Color, ScaleColor, getScaleColor } from '@/styles/palette'
import { assertNever } from '@/utils/common'
import { createPolymorphicComponent } from '@/utils/react'
import { Spread, WithoutKeys } from '@/utils/types'
import { Box, BoxProps } from '../Box'

type Font = NonNullable<BoxProps['fontFamily']>
type Size = NonNullable<BoxProps['fontSize']>
type Weight = NonNullable<BoxProps['fontWeight']>
type Align = NonNullable<BoxProps['textAlign']>

export type TextProps = Spread<
  {
    font?: Font
    size?: Size
    weight?: Weight
    align?: Align
    color?: Color | ScaleColor<Color>
    dimmed?: boolean
  },
  WithoutKeys<BoxProps, 'fontFamily' | 'fontSize' | 'fontWeight' | 'textAlign'>
>

type HeadingTag = 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6'

function isHeadingTag(tag: string): tag is HeadingTag {
  return ['h1', 'h2', 'h3', 'h4', 'h5', 'h6'].includes(tag)
}

function getHeadingSize(tag: HeadingTag): Size {
  switch (tag) {
    case 'h1':
      return '4xl'
    case 'h2':
      return '3xl'
    case 'h3':
      return '2xl'
    case 'h4':
      return 'xl'
    case 'h5':
      return 'lg'
    case 'h6':
      return 'md'
    default:
      assertNever(tag)
  }
}

const _TextComponent = forwardRef<
  HTMLParagraphElement,
  TextProps & { as: any }
>(function Text(props, ref) {
  const {
    as = 'p',
    font,
    size,
    weight,
    color,
    align,
    dimmed,
    ...delegated
  } = props

  const isHeading = isHeadingTag(as)
  const fontFamily: Font = font ?? (isHeading ? 'heading' : 'body')
  const fontSize: Size = size ?? (isHeading ? getHeadingSize(as) : 'md')
  const fontWeight: Weight = weight ?? (isHeading ? 'bold' : 'regular')
  const resolvedColor: ScaleColor<Color> = getScaleColor(
    color ?? (isHeading ? 'violet' : 'neutral'),
    dimmed ? 11 : 12,
  )

  return (
    <Box
      ref={ref}
      as={as}
      fontFamily={fontFamily}
      fontSize={fontSize}
      fontWeight={fontWeight}
      textAlign={align}
      color={resolvedColor}
      {...delegated}
    />
  )
})

_TextComponent.displayName = '@mrlowlevel/Text'

const TextComponent = createPolymorphicComponent<'p', TextProps>(_TextComponent)

const P = forwardRef<HTMLParagraphElement, TextProps>(function P(props, ref) {
  return <TextComponent ref={ref} as="p" {...props} />
})

P.displayName = '@mrlowlevel/P'

const H1 = forwardRef<HTMLHeadingElement, TextProps>(function H1(props, ref) {
  return <TextComponent ref={ref} as="h1" {...props} />
})

H1.displayName = '@mrlowlevel/H1'

const H2 = forwardRef<HTMLHeadingElement, TextProps>(function H2(props, ref) {
  return <TextComponent ref={ref} as="h2" {...props} />
})

H2.displayName = '@mrlowlevel/H2'

const H3 = forwardRef<HTMLHeadingElement, TextProps>(function H3(props, ref) {
  return <TextComponent ref={ref} as="h3" {...props} />
})

H3.displayName = '@mrlowlevel/H3'

const H4 = forwardRef<HTMLHeadingElement, TextProps>(function H4(props, ref) {
  return <TextComponent ref={ref} as="h4" {...props} />
})

H4.displayName = '@mrlowlevel/H4'

const H5 = forwardRef<HTMLHeadingElement, TextProps>(function H5(props, ref) {
  return <TextComponent ref={ref} as="h5" {...props} />
})

H5.displayName = '@mrlowlevel/H5'

const H6 = forwardRef<HTMLHeadingElement, TextProps>(function H6(props, ref) {
  return <TextComponent ref={ref} as="h6" {...props} />
})

H6.displayName = '@mrlowlevel/H6'

const Span = forwardRef<HTMLSpanElement, TextProps>(function Span(props, ref) {
  return <TextComponent ref={ref} as="span" {...props} />
})

Span.displayName = '@mrlowlevel/Span'

export const Text = Object.assign(TextComponent, {
  P,
  H1,
  H2,
  H3,
  H4,
  H5,
  H6,
  Span,
})
