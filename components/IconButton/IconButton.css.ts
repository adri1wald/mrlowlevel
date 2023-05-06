import { recipe, RecipeVariants } from '@vanilla-extract/recipes'
import { vars } from '@/styles/theme.css'
import { transformValues } from '@/utils/common'
import { Expand } from '@/utils/types'
import { mapColors } from '@/styles/palette'
import { rem } from '@/styles/utils'

export const sizes = {
  xs: rem(18),
  sm: rem(22),
  md: rem(28),
  lg: rem(34),
  xl: rem(44),
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
    color: mapColors((getScale) => ({
      color: vars.color.palette[getScale(11)],
      backgroundColor: vars.color.palette[getScale(3)],
      ':hover': {
        backgroundColor: vars.color.palette[getScale(4)],
      },
      ':active': {
        backgroundColor: vars.color.palette[getScale(5)],
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
