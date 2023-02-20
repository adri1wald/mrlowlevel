import { globalStyle, style, styleVariants } from '@vanilla-extract/css'
import { vars } from './theme.css'

/**
 * Typography
 */

export const font = {
  family: styleVariants(vars.font, (font) => ({
    fontFamily: font,
  })),
  size: styleVariants(vars.fontSize, (fontSize) => ({
    fontSize,
  })),
}

/**
 * Color
 */

export const color = {
  ...styleVariants(vars.color.palette, (color) => ({
    color: color[12],
  })),
  dimmed: styleVariants(vars.color.palette, (color) => ({
    color: color[11],
  })),
}

/**
 * Layout
 */

export const flex = style({
  display: 'flex',
})

export const column = style({
  flexDirection: 'column',
})

export const row = style({
  flexDirection: 'row',
})

export const alignCenter = style({
  alignItems: 'center',
})

export const justifyCenter = style({
  justifyContent: 'center',
})

export const rigid = style({
  flex: '0 0 auto',
})

export const grow = style({
  flex: '1 0 0',
})

export const absolute = style({
  position: 'absolute',
})

/**
 * Spacing
 */

export const p = styleVariants(vars.spacing, (spacing) => ({
  padding: spacing,
}))

export const pt = styleVariants(vars.spacing, (spacing) => ({
  paddingTop: spacing,
}))

export const pr = styleVariants(vars.spacing, (spacing) => ({
  paddingRight: spacing,
}))

export const pb = styleVariants(vars.spacing, (spacing) => ({
  paddingBottom: spacing,
}))

export const pl = styleVariants(vars.spacing, (spacing) => ({
  paddingLeft: spacing,
}))

export const px = styleVariants(vars.spacing, (spacing) => ({
  paddingLeft: spacing,
  paddingRight: spacing,
}))

export const py = styleVariants(vars.spacing, (spacing) => ({
  paddingTop: spacing,
  paddingBottom: spacing,
}))

export const m = styleVariants(vars.spacing, (spacing) => ({
  margin: spacing,
}))

export const mt = styleVariants(vars.spacing, (spacing) => ({
  marginTop: spacing,
}))

export const mr = styleVariants(vars.spacing, (spacing) => ({
  marginRight: spacing,
}))

export const mb = styleVariants(vars.spacing, (spacing) => ({
  marginBottom: spacing,
}))

export const ml = styleVariants(vars.spacing, (spacing) => ({
  marginLeft: spacing,
}))

export const mx = styleVariants(vars.spacing, (spacing) => ({
  marginLeft: spacing,
  marginRight: spacing,
}))

export const my = styleVariants(vars.spacing, (spacing) => ({
  marginTop: spacing,
  marginBottom: spacing,
}))

export const gap = styleVariants(vars.spacing, (spacing) => ({
  gap: spacing,
}))

export const inset = styleVariants(vars.spacing, (spacing) => ({
  inset: spacing,
}))

export const top = styleVariants(vars.spacing, (spacing) => ({
  top: spacing,
}))

export const right = styleVariants(vars.spacing, (spacing) => ({
  right: spacing,
}))

export const bottom = styleVariants(vars.spacing, (spacing) => ({
  bottom: spacing,
}))

export const left = styleVariants(vars.spacing, (spacing) => ({
  left: spacing,
}))

export const spaced = styleVariants(vars.spacing, () => ({}))

for (const [spacing, className] of Object.entries(spaced) as [
  keyof typeof spaced,
  string,
][]) {
  globalStyle(`${className} > * + *`, {
    marginTop: vars.spacing[spacing],
  })
}
