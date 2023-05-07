import { forwardRef } from 'react'
import clsx from 'clsx'
import { createPolymorphicComponent } from '@/utils/react'
import { Spread } from '@/utils/types'
import { StyleProps, style } from './Button.css'
import { Box, BoxProps } from '../Box'

export type ButtonProps = Spread<StyleProps, BoxProps>

const _Button = forwardRef<HTMLButtonElement, ButtonProps>(function Button(
  props,
  ref,
) {
  const { className, color, size, radius, variant, ...delegated } = props

  return (
    <Box
      as="button"
      className={clsx(
        style({
          color,
          size,
          radius,
          variant,
        }),
        className,
      )}
      {...delegated}
      ref={ref}
    />
  )
})

_Button.displayName = '@mrlowlevel/Button'

export const Button = createPolymorphicComponent<'button', ButtonProps>(_Button)
