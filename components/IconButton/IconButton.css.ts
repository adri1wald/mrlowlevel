import { calc } from '@vanilla-extract/css-utils'
import { RecipeVariants, recipe } from '@vanilla-extract/recipes'
import { focusRing } from '@/styles/common.css'
import { mapColors } from '@/styles/palette'
import { vars } from '@/styles/theme.css'
import { pick, transformValues } from '@/utils/common'
import { Expand } from '@/utils/types'

const sizes = transformValues(
  pick(vars.fontSize, ['xs', 'sm', 'md', 'lg', 'xl']),
  (value) => calc(value).multiply(2).toString(),
)

export const style = recipe({
  base: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 0,
    border: 'none',
    userSelect: 'none',
    cursor: 'pointer',
    selectors: {
      '&:disabled, &[data-disabled]': {
        opacity: 0.5,
        cursor: 'not-allowed',
        pointerEvents: 'none',
      },
    },
  },

  variants: {
    color: mapColors((getScale, color) => [
      focusRing[color],
      {
        color: vars.palette.color[getScale(11)],
        backgroundColor: vars.palette.color[getScale(3)],
        ':hover': {
          backgroundColor: vars.palette.color[getScale(4)],
        },
        ':active': {
          backgroundColor: vars.palette.color[getScale(5)],
        },
      },
    ]),
    size: transformValues(sizes, (value) => ({
      width: value,
      height: value,
    })),
    radius: transformValues(vars.radius, (value) => ({
      borderRadius: value,
    })),
    inline: {
      true: {
        display: 'inline-flex',
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

export type StyleProps = Expand<RecipeVariants<typeof style>>
