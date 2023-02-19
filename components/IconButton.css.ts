import { recipe, RecipeVariants } from '@vanilla-extract/recipes'
import { vars } from '@/styles/theme.css'
import { transformValues } from '@/utils/common'
import { Expand } from '@/utils/types'

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
    color: transformValues(vars.color.palette, (palette) => ({
      color: palette[11],
      backgroundColor: palette[3],
      ':hover': {
        backgroundColor: palette[4],
      },
      ':active': {
        backgroundColor: palette[5],
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
