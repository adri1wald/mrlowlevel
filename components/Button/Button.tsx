import { forwardRef } from 'react'
import clsx from 'clsx'
import { createPolymorphicComponent } from '@/utils/react'
import { Spread } from '@/utils/types'
import { StyleProps, style } from './Button.css'
import { Box, BoxProps } from '../Box'

export type ButtonProps = Spread<
  {
    disabled?: boolean
  },
  Spread<StyleProps, BoxProps>
>

const _Button = forwardRef<HTMLButtonElement, ButtonProps & { as?: any }>(
  function Button(props, ref) {
    const {
      as = 'button',
      className,
      color,
      size,
      radius,
      variant,
      inline,
      disabled,
      ...delegated
    } = props

    return (
      <Box
        as={as}
        className={clsx(
          style({
            color,
            size,
            radius,
            variant,
            inline,
          }),
          className,
        )}
        disabled={disabled}
        data-disabled={disabled}
        tabIndex={disabled ? -1 : undefined}
        type={as === 'button' ? 'button' : undefined}
        {...delegated}
        ref={ref}
      />
    )
  },
)

_Button.displayName = '@mrlowlevel/Button'

export const Button = createPolymorphicComponent<'button', ButtonProps>(_Button)
