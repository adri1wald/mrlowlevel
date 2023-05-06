import { forwardRef } from 'react'
import { Slot } from '@radix-ui/react-slot'
import clsx from 'clsx'
import { StyleProps, style } from './IconButton.css'

type IconButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> &
  StyleProps & {
    asChild?: boolean
  }

export const IconButton = forwardRef<HTMLButtonElement, IconButtonProps>(
  function IconButton(props, ref) {
    const { asChild, color, size, radius, className, variant, ...buttonProps } =
      props
    const Root = asChild ? Slot : 'button'
    return (
      <Root
        {...buttonProps}
        className={clsx(
          style({
            color,
            size,
            radius,
            variant,
          }),
          className,
        )}
        ref={ref}
      />
    )
  },
)
