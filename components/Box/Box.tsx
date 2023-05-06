import { sprinkles, Sprinkles, spacing } from '@/styles/common.css'
import { createPolymorphicComponent } from '@/utils/react'
import clsx from 'clsx'
import { forwardRef } from 'react'

export type BoxProps = React.PropsWithChildren<
  Sprinkles & {
    as?: React.ElementType
    className?: string
    spacing?: keyof typeof spacing
  }
>

const _Box = forwardRef<HTMLDivElement, BoxProps>(function Box(props, ref) {
  const {
    as: Component = 'div',
    className,
    spacing: spacingValue,
    ...rest
  } = props
  const sprinklesProps: Record<string, unknown> = {}
  const nativeProps: Record<string, unknown> = {}

  Object.entries(rest).forEach(([key, value]) => {
    if (sprinkles.properties.has(key as keyof Sprinkles)) {
      sprinklesProps[key] = value
    } else {
      nativeProps[key] = value
    }
  })

  return (
    <Component
      ref={ref}
      {...nativeProps}
      className={clsx(
        sprinkles(sprinklesProps),
        spacingValue && spacing[spacingValue],
        className,
      )}
    />
  )
})

_Box.displayName = '@mrlowlevel/Box'

export const Box = createPolymorphicComponent<'div', BoxProps>(_Box)
