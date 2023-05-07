import { forwardRef } from 'react'
import { Box, BoxProps } from '../Box'

export const Header = forwardRef<HTMLDivElement, BoxProps>(function Header(
  props,
  ref,
) {
  return <Box ref={ref} as="header" {...props} />
})

Header.displayName = '@mrlowlevel/Header'

export const Main = forwardRef<HTMLDivElement, BoxProps>(function Main(
  props,
  ref,
) {
  return <Box ref={ref} as="main" {...props} />
})

Main.displayName = '@mrlowlevel/Main'

export const Footer = forwardRef<HTMLDivElement, BoxProps>(function Footer(
  props,
  ref,
) {
  return <Box ref={ref} as="footer" {...props} />
})

Footer.displayName = '@mrlowlevel/Footer'

export const Article = forwardRef<HTMLDivElement, BoxProps>(function Article(
  props,
  ref,
) {
  return <Box ref={ref} as="article" {...props} />
})

Article.displayName = '@mrlowlevel/Article'

export const Section = forwardRef<HTMLDivElement, BoxProps>(function Section(
  props,
  ref,
) {
  return <Box ref={ref} as="section" {...props} />
})

Section.displayName = '@mrlowlevel/Section'

export const Aside = forwardRef<HTMLDivElement, BoxProps>(function Aside(
  props,
  ref,
) {
  return <Box ref={ref} as="aside" {...props} />
})

Aside.displayName = '@mrlowlevel/Aside'

export const Nav = forwardRef<HTMLDivElement, BoxProps>(function Nav(
  props,
  ref,
) {
  return <Box ref={ref} as="nav" {...props} />
})

Nav.displayName = '@mrlowlevel/Nav'
