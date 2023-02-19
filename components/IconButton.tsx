import { Slot } from '@radix-ui/react-slot'
import { forwardRef } from 'react'

type IconButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  asChild?: boolean
}

export const IconButton = forwardRef<HTMLButtonElement, IconButtonProps>(
  function IconButton(props, ref) {
    const { asChild, ...buttonProps } = props
    const Root = asChild ? Slot : 'button'
    return <Root {...buttonProps} ref={ref} />
  },
)
