import { forwardRef } from 'react'
import clsx from 'clsx'
import { Sprinkles, spacing, sprinkles } from '@/styles/common.css'
import { createPolymorphicComponent } from '@/utils/react'
import { Expand } from '@/utils/types'

export type BoxProps = React.PropsWithChildren<
  Expand<
    Sprinkles & {
      className?: string
      spacing?: keyof typeof spacing
      style?: React.CSSProperties
    }
  >
>

const _Box = forwardRef<HTMLDivElement, BoxProps & { as: any }>(function Box(
  props,
  ref,
) {
  const {
    as: Component = 'div',
    className,
    spacing: spacingValue,
    style,
    ...delegated
  } = props
  const sprinklesProps: Record<string, unknown> = {}
  const nativeProps: Record<string, unknown> = {}

  Object.entries(delegated).forEach(([key, value]) => {
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
      style={style}
    />
  )
})

_Box.displayName = '@mrlowlevel/Box'

export const Box = createPolymorphicComponent<'div', BoxProps>(_Box)
