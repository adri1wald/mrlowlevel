import { forwardRef } from 'react'
import clsx from 'clsx'
import { createPolymorphicComponent } from '@/utils/react'
import { Spread } from '@/utils/types'
import { StyleProps, style } from './IconButton.css'
import { Box, BoxProps } from '../Box'

export type IconButtonProps = Spread<
  {
    disabled?: boolean
  },
  Spread<StyleProps, BoxProps>
>

const _IconButton = forwardRef<
  HTMLButtonElement,
  IconButtonProps & { as?: any }
>(function IconButton(props, ref) {
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
})

_IconButton.displayName = '@mrlowlevel/IconButton'

export const IconButton = createPolymorphicComponent<'button', IconButtonProps>(
  _IconButton,
)
