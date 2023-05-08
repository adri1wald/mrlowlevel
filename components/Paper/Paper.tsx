import { forwardRef } from 'react'
import clsx from 'clsx'
import { createPolymorphicComponent } from '@/utils/react'
import { Spread } from '@/utils/types'
import { StyleProps, style } from './Paper.css'
import { Box, BoxProps } from '../Box'

export type PaperProps = Spread<StyleProps, BoxProps>

const _Paper = forwardRef<HTMLDivElement, PaperProps>(function Paper(
  props,
  ref,
) {
  const { className, radius, color, ...delegated } = props
  return (
    <Box
      className={clsx(
        style({
          radius,
          color,
        }),
        className,
      )}
      {...delegated}
      ref={ref}
    />
  )
})

export const Paper = createPolymorphicComponent<'div', PaperProps>(_Paper)
