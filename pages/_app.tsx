import type { AppProps } from 'next/app'
import { ThemeProvider } from 'next-themes'
import Head from 'next/head'
import '@/styles/global.css'
import '@/styles/theme.css'
import { lightTheme, darkTheme } from '@/styles/theme.css'

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
      <ThemeProvider
        disableTransitionOnChange
        attribute="class"
        value={{
          light: lightTheme,
          dark: darkTheme,
        }}
      >
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  )
}
export default MyApp
