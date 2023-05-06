import { recipe, RecipeVariants } from '@vanilla-extract/recipes'
import { vars } from '@/styles/theme.css'
import { transformValues } from '@/utils/common'
import { Expand } from '@/utils/types'
import { color, makeScaleColor } from '@/styles/palette'

export const sizes = {
  xs: 18,
  sm: 22,
  md: 28,
  lg: 34,
  xl: 44,
}

export const style = recipe({
  base: {
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 0,
    border: 'none',
  },

  variants: {
    color: transformValues(color, (color) => ({
      color: vars.color.palette[makeScaleColor(color, 11)],
      backgroundColor: vars.color.palette[makeScaleColor(color, 3)],
      ':hover': {
        backgroundColor: vars.color.palette[makeScaleColor(color, 4)],
      },
      ':active': {
        backgroundColor: vars.color.palette[makeScaleColor(color, 5)],
      },
    })),
    size: transformValues(sizes, (value) => ({
      width: `${value}px`,
      height: `${value}px`,
    })),
    radius: transformValues(vars.radius, (value) => ({
      borderRadius: value,
    })),
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

export type StyleProps = Expand<RecipeVariants<typeof style>>
