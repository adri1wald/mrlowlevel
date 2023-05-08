import { RecipeVariants, recipe } from '@vanilla-extract/recipes'
import { mapColors } from '@/styles/palette'
import { vars } from '@/styles/theme.css'
import { rem } from '@/styles/utils'
import { transformValues } from '@/utils/common'
import { Expand } from '@/utils/types'

export const style = recipe({
  variants: {
    color: mapColors((getScale, color) => ({
      backgroundColor:
        color === 'neutral' ? undefined : vars.palette.color[getScale(1)],
      border: `${rem(1)} solid ${vars.palette.color[getScale(6)]}`,
    })),
    radius: transformValues(vars.radius, (value) => ({
      borderRadius: value,
    })),
  },

  defaultVariants: {
    color: 'neutral',
    radius: 'md',
  },
})

export type StyleProps = Expand<RecipeVariants<typeof style>>
