import { Metadata } from 'next'
import { Open_Sans, Playfair_Display } from 'next/font/google'
import { Box } from '@/components/Box'
import { ThemeProvider, ThemeToggle } from '@/components/Theme'
import '@/styles/global.css'
import '@/styles/theme.css'
import { darkTheme, lightTheme } from '@/styles/theme.css'

const openSans = Open_Sans({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-open-sans',
})

const playfairDisplay = Playfair_Display({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-playfair-display',
})

export default function RootLayout(props: React.PropsWithChildren<{}>) {
  const { children } = props
  return (
    // TODO: get rid of this suppressHydrationWarning
    <html
      lang="en"
      className={`${openSans.variable} ${playfairDisplay.variable}`}
      suppressHydrationWarning
    >
      <head />
      <body>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
          value={{
            light: lightTheme,
            dark: darkTheme,
          }}
        >
          <Box position="absolute" top="2xl" right="2xl">
            <ThemeToggle />
          </Box>
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}

export const metadata: Metadata = {
  title: 'MrLowLevel',
  description: 'Caffeine in, code out.',
  keywords: [
    'MrLowLevel',
    'Adrien Wald',
    'Genei',
    'CoLoop',
    'Programming',
    'Web Developer',
    'Founder',
    'Startup',
  ],
  authors: [
    {
      name: 'Adrien Wald',
      url: 'https://mrlowlevel.com',
    },
  ],
  creator: 'Adrien Wald',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://mrlowlevel.com',
    title: 'MrLowLevel',
    description: 'Caffeine in, code out.',
    siteName: 'MrLowLevel',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'MrLowLevel',
    description: 'Caffeine in, code out.',
    images: ['/me.png'],
    creator: '@mr_low_level',
  },
  icons: [
    {
      rel: 'icon',
      sizes: 'any',
      url: '/favicon.ico',
    },
    {
      rel: 'icon',
      type: 'image/png',
      sizes: '32x32',
      url: '/favicon-32x32.png',
    },
    {
      rel: 'icon',
      type: 'image/png',
      sizes: '16x16',
      url: '/favicon-16x16.png',
    },
    {
      rel: 'apple-touch-icon',
      sizes: '180x180',
      url: '/apple-touch-icon.png',
    },
  ],
  manifest: '/site.webmanifest',
}
