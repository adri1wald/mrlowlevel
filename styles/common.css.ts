import { globalStyle, styleVariants } from '@vanilla-extract/css'
import { createSprinkles, defineProperties } from '@vanilla-extract/sprinkles'
import { vars } from './theme.css'

export const layoutProperties = defineProperties({
  conditions: {
    xs: {},
    sm: { '@media': `screen and (min-width: ${vars.breakpoint.sm})` },
    md: { '@media': `screen and (min-width: ${vars.breakpoint.md})` },
    lg: { '@media': `screen and (min-width: ${vars.breakpoint.lg})` },
    xl: { '@media': `screen and (min-width: ${vars.breakpoint.xl})` },
  },
  defaultCondition: 'xs',
  properties: {
    display: ['block', 'inline-block', 'inline', 'flex', 'inline-flex', 'none'],
    position: ['static', 'relative', 'absolute', 'fixed', 'sticky'],
    flexDirection: ['row', 'row-reverse', 'column', 'column-reverse'],
    flexWrap: ['nowrap', 'wrap', 'wrap-reverse'],
    alignItems: ['stretch', 'flex-start', 'flex-end', 'center', 'baseline'],
    textAlign: ['left', 'center', 'right', 'justify'],
    flex: {
      rigid: '0 0 auto',
      fluid: '1 1 0',
    },
    justifyContent: [
      'flex-start',
      'flex-end',
      'center',
      'space-between',
      'space-around',
      'space-evenly',
    ],
    margin: { ...vars.spacing, auto: 'auto' },
    marginTop: { ...vars.spacing, auto: 'auto' },
    marginRight: { ...vars.spacing, auto: 'auto' },
    marginBottom: { ...vars.spacing, auto: 'auto' },
    marginLeft: { ...vars.spacing, auto: 'auto' },
    padding: vars.spacing,
    paddingTop: vars.spacing,
    paddingRight: vars.spacing,
    paddingBottom: vars.spacing,
    paddingLeft: vars.spacing,
    top: vars.spacing,
    right: vars.spacing,
    bottom: vars.spacing,
    left: vars.spacing,
    inset: vars.spacing,
    gap: vars.spacing,
  },
  shorthands: {
    m: ['margin'],
    mx: ['marginLeft', 'marginRight'],
    my: ['marginTop', 'marginBottom'],
    mt: ['marginTop'],
    mr: ['marginRight'],
    mb: ['marginBottom'],
    ml: ['marginLeft'],
    p: ['padding'],
    px: ['paddingLeft', 'paddingRight'],
    py: ['paddingTop', 'paddingBottom'],
    pt: ['paddingTop'],
    pr: ['paddingRight'],
    pb: ['paddingBottom'],
    pl: ['paddingLeft'],
    placeItems: ['alignItems', 'justifyContent'],
    align: ['textAlign'],
  },
})

export const fontProperties = defineProperties({
  properties: {
    fontFamily: vars.font,
    fontSize: vars.fontSize,
    fontWeight: vars.fontWeight,
  },
})

export const colorProperties = defineProperties({
  conditions: {
    default: {},
    hover: { selector: '&:hover' },
    active: { selector: '&:active' },
    focus: { selector: '&:focus' },
  },
  defaultCondition: 'default',
  properties: {
    color: vars.color.palette,
    backgroundColor: vars.color.palette,
  },
  shorthands: {
    bg: ['backgroundColor'],
  },
})

export const sprinkles = createSprinkles(
  layoutProperties,
  fontProperties,
  colorProperties,
)

export type Sprinkles = Parameters<typeof sprinkles>[0]

export const spacing = styleVariants(vars.spacing, () => ({}))

for (const [spacingValue, className] of Object.entries(spacing) as [
  keyof typeof spacing,
  string,
][]) {
  globalStyle(`${className} > * + *`, {
    marginTop: vars.spacing[spacingValue],
  })
}
