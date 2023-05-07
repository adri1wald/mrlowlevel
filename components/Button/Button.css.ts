import { calc } from '@vanilla-extract/css-utils'
import { RecipeVariants, recipe } from '@vanilla-extract/recipes'
import { focusRing } from '@/styles/common.css'
import { mapColors } from '@/styles/palette'
import { vars } from '@/styles/theme.css'
import { rem } from '@/styles/utils'
import { pick, transformValues } from '@/utils/common'
import { Expand } from '@/utils/types'

const sizes = transformValues(
  pick(vars.fontSize, ['xs', 'sm', 'md', 'lg', 'xl']),
  (value) => calc(value).multiply(2).toString(),
)

export const style = recipe({
  // base button styles
  base: {
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 0,
    border: 'none',
    userSelect: 'none',
    cursor: 'pointer',
    textDecoration: 'none',
    whiteSpace: 'nowrap',
    appearance: 'none',
  },

  variants: {
    color: mapColors((getScale, color) => [
      focusRing[color],
      {
        color: vars.color.palette[getScale(11)],
        backgroundColor: vars.color.palette[getScale(3)],
        ':hover': {
          backgroundColor: vars.color.palette[getScale(4)],
        },
        ':active': {
          backgroundColor: vars.color.palette[getScale(5)],
        },
      },
    ]),
    size: transformValues(sizes, (value, key) => ({
      height: value,
      paddingInline: vars.spacing[key],
      fontSize: vars.fontSize[key],
    })),
    radius: {
      ...transformValues(vars.radius, (value) => ({
        borderRadius: value,
      })),
      pill: {
        borderRadius: rem(99999),
      },
    },
    variant: {
      transparent: {
        backgroundColor: 'transparent',
      },
    },
  },

  defaultVariants: {
    color: 'neutral',
    size: 'md',
    radius: 'sm',
  },
})

export type StyleProps = Expand<NonNullable<RecipeVariants<typeof style>>>
