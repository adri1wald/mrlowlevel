import { ThemeProvider } from 'next-themes'
import type { AppProps } from 'next/app'
import Head from 'next/head'
import { Open_Sans, Playfair_Display } from '@next/font/google'
import { Box } from '@/components/Box'
import { ThemeToggle } from '@/components/ThemeToggle'
import '@/styles/global.css'
import '@/styles/theme.css'
import {
  OpenSans,
  PlayfairDisplay,
  darkTheme,
  lightTheme,
} from '@/styles/theme.css'

const openSans = Open_Sans({
  subsets: ['latin'],
  display: 'swap',
})

const playfairDisplay = Playfair_Display({
  subsets: ['latin'],
  display: 'swap',
})

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon-16x16.png"
        />
        <link rel="manifest" href="/site.webmanifest" />
        <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#000000" />
        <meta name="msapplication-TileColor" content="#da532c" />
      </Head>
      <style global jsx>
        {`
          :root {
            ${OpenSans}: ${openSans.style.fontFamily};
            ${PlayfairDisplay}: ${playfairDisplay.style.fontFamily};
          }
        `}
      </style>
      <ThemeProvider
        disableTransitionOnChange
        attribute="class"
        value={{
          light: lightTheme,
          dark: darkTheme,
        }}
      >
        <Box position="fixed" top="2xl" right="2xl">
          <ThemeToggle />
        </Box>
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  )
}
export default MyApp
