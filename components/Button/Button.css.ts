import { assignVars, createThemeContract } from '@vanilla-extract/css'
import { calc } from '@vanilla-extract/css-utils'
import { RecipeVariants, recipe } from '@vanilla-extract/recipes'
import { focusRing } from '@/styles/common.css'
import { mapColors, shouldUseDarkForegroundText } from '@/styles/palette'
import { vars } from '@/styles/theme.css'
import { rem } from '@/styles/utils'
import { pick, transformValues } from '@/utils/common'
import { Expand } from '@/utils/types'

const sizes = transformValues(
  pick(vars.fontSize, ['xs', 'sm', 'md', 'lg', 'xl']),
  (value) => calc(value).multiply(2).toString(),
)

const buttonColors = createThemeContract({
  color: '',
  subtleBg: '',
  subtleBgHover: '',
  subtleBgActive: '',
  lightBg: '',
  lightBgHover: '',
  lightBgActive: '',
  lightCtaBg: '',
  lightCtaBgHover: '',
  lightCtaBgActive: '',
  filledColor: '',
  filledBg: '',
  filledBgHover: '',
  filledBgActive: '',
})

export const style = recipe({
  // base button styles
  base: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 0,
    border: 'none',
    userSelect: 'none',
    cursor: 'pointer',
    textDecoration: 'none',
    whiteSpace: 'nowrap',
    appearance: 'none',
    fontWeight: vars.fontWeight.medium,
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
        vars: assignVars(buttonColors, {
          color: vars.color.palette[getScale(11)],

          subtleBg: 'transparent',
          subtleBgHover: vars.color.palette[getScale(4)],
          subtleBgActive: vars.color.palette[getScale(5)],

          lightBg: vars.color.palette[getScale(3)],
          lightBgHover: vars.color.palette[getScale(4)],
          lightBgActive: vars.color.palette[getScale(5)],

          lightCtaBg: vars.color.palette[getScale(4)],
          lightCtaBgHover: vars.color.palette[getScale(5)],
          lightCtaBgActive: vars.color.palette[getScale(6)],

          filledColor: shouldUseDarkForegroundText(color)
            ? vars.color.palette['black.12']
            : vars.color.palette['white.12'],
          filledBg: vars.color.palette[getScale(9)],
          filledBgHover: vars.color.palette[getScale(10)],
          filledBgActive: vars.color.palette[getScale(10)],
        }),
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
    inline: {
      true: {
        display: 'inline-flex',
      },
    },
    variant: {
      subtle: {
        color: buttonColors.color,
        backgroundColor: buttonColors.subtleBg,
        selectors: {
          ['&:not(:disabled):hover, &:not([data-disabled]):hover']: {
            backgroundColor: buttonColors.subtleBgHover,
          },
          ['&:not(:disabled):active, &:not([data-disabled]):active']: {
            backgroundColor: buttonColors.subtleBgActive,
          },
        },
      },
      light: {
        color: buttonColors.color,
        backgroundColor: buttonColors.lightBg,
        selectors: {
          ['&:not(:disabled):hover, &:not([data-disabled]):hover']: {
            backgroundColor: buttonColors.lightBgHover,
          },
          ['&:not(:disabled):active, &:not([data-disabled]):active']: {
            backgroundColor: buttonColors.lightBgActive,
          },
        },
      },
      'light-cta': {
        color: buttonColors.color,
        backgroundColor: buttonColors.lightCtaBg,
        selectors: {
          ['&:not(:disabled):hover, &:not([data-disabled]):hover']: {
            backgroundColor: buttonColors.lightCtaBgHover,
          },
          ['&:not(:disabled):active, &:not([data-disabled]):active']: {
            backgroundColor: buttonColors.lightCtaBgActive,
          },
        },
      },
      filled: {
        color: buttonColors.filledColor,
        backgroundColor: buttonColors.filledBg,
        selectors: {
          ['&:not(:disabled):hover, &:not([data-disabled]):hover']: {
            backgroundColor: buttonColors.filledBgHover,
          },
          ['&:not(:disabled):active, &:not([data-disabled]):active']: {
            backgroundColor: buttonColors.filledBgActive,
          },
        },
      },
    },
  },

  defaultVariants: {
    color: 'neutral',
    size: 'md',
    radius: 'sm',
    variant: 'light',
  },
})

export type StyleProps = Expand<NonNullable<RecipeVariants<typeof style>>>
