import { createElement, forwardRef } from 'react'
import clsx from 'clsx'

type ExtendedProps<_ExtendedProps = {}, OverrideProps = {}> = OverrideProps &
  Omit<_ExtendedProps, keyof OverrideProps>
type PropsOf<
  C extends keyof JSX.IntrinsicElements | React.JSXElementConstructor<any>,
> = JSX.LibraryManagedAttributes<C, React.ComponentPropsWithoutRef<C>>
type ComponentProp<C extends React.ElementType> = {
  /** Tag or component that should be used as root element */
  component?: C
}
type InheritedProps<C extends React.ElementType, Props = {}> = ExtendedProps<
  PropsOf<C>,
  Props
>
type PolymorphicRef<C> = C extends React.ElementType
  ? React.ComponentPropsWithRef<C>['ref']
  : never
type PolymorphicComponentProps<C, Props = {}> = C extends React.ElementType
  ? InheritedProps<C, Props & ComponentProp<C>> & {
      ref?: PolymorphicRef<C>
    }
  : Props & {
      component: React.ElementType
    }

export function wrapTag<C extends keyof JSX.IntrinsicElements>(
  tag: C,
  className: string,
): (props: PolymorphicComponentProps<C>) => React.ReactElement {
  const Component = forwardRef(function Component(props: any, ref: any) {
    return createElement(tag, {
      ...props,
      className: clsx(className, props.className),
      ref,
    })
  })
  Component.displayName = `@genei/${tag}`
  return Component as any
}
