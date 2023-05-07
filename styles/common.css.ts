import { globalStyle, styleVariants } from '@vanilla-extract/css'
import { createSprinkles, defineProperties } from '@vanilla-extract/sprinkles'
import { colors, makeScaleColor } from './palette'
import { vars } from './theme.css'
import { rem } from './utils'

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
    display: [
      'block',
      'inline-block',
      'inline',
      'flex',
      'inline-flex',
      'flow-root',
      'none',
    ],
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
    // derived from tailwindcss --- start
    width: {
      ...vars.size.absolute,
      ...vars.size.percent,
      0: '0px',
      px: '1px',
      full: '100%',
      screen: '100vw',
      auto: 'auto',
      min: 'min-content',
      max: 'max-content',
      fit: 'fit-content',
    },
    minWidth: {
      0: '0px',
      full: '100%',
      min: 'min-content',
      max: 'max-content',
      fit: 'fit-content',
    },
    maxWidth: {
      ...vars.size.named,
      0: '0px',
      full: '100%',
      none: 'none',
      min: 'min-content',
      max: 'max-content',
      fit: 'fit-content',
      prose: '65ch',
    },
    height: {
      ...vars.size.absolute,
      0: '0px',
      px: '1px',
      full: '100%',
      screen: '100vh',
      auto: 'auto',
      min: 'min-content',
      max: 'max-content',
      fit: 'fit-content',
    },
    minHeight: {
      0: '0px',
      full: '100%',
      screen: '100vh',
      min: 'min-content',
      max: 'max-content',
      fit: 'fit-content',
    },
    maxHeight: {
      ...vars.size.absolute,
      0: '0px',
      px: '1px',
      full: '100%',
      screen: '100vh',
      none: 'none',
      min: 'min-content',
      max: 'max-content',
      fit: 'fit-content',
    },
    // derived from tailwindcss --- end
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
    w: ['width'],
    minW: ['minWidth'],
    maxW: ['maxWidth'],
    h: ['height'],
    minH: ['minHeight'],
    maxH: ['maxHeight'],
  },
})

export const fontProperties = defineProperties({
  properties: {
    fontFamily: vars.font,
    fontSize: vars.fontSize,
    fontWeight: vars.fontWeight,
    whiteSpace: ['normal', 'nowrap', 'pre', 'pre-wrap', 'pre-line'],
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

export const focusRing = styleVariants(colors, (color) => ({
  WebkitTapHighlightColor: 'transparent',
  ':focus': {
    outlineOffset: rem(2),
    // TODO: this should be 7 but 8 looks better - maybe revisit...
    outline: `${rem(2)} solid ${vars.color.palette[makeScaleColor(color, 8)]}`,
  },
  selectors: {
    '&:focus:not(:focus-visible)': {
      outline: 'none',
    },
  },
}))
