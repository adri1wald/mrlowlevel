import { Box } from '@/components/Box'
import { Me } from '@/components/Me'
import { ThemeToggle } from '@/components/ThemeToggle'
import type { NextPage } from 'next'
import Head from 'next/head'

const Home: NextPage = () => {
  return (
    <Box p="xxl">
      <Head>
        <title>MrLowLevel</title>
        <meta
          name="description"
          content="Can someone please tell me why we are here?"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Box
        as="header"
        display="flex"
        flexDirection={{ xs: 'column', sm: 'row' }}
        justifyContent="center"
        alignItems={{ xs: 'center', sm: 'flex-start' }}
        gap="xxl"
      >
        <Me flex="rigid" />
        <Box spacing="lg">
          <div>
            <Box
              as="h1"
              font="heading"
              size="x4l"
              color="violet.12"
              align={{
                xs: 'center',
                sm: 'left',
              }}
            >
              Adrien Wald
            </Box>
            <Box
              as="h2"
              font="heading"
              size="lg"
              color="violet.11"
              align={{
                xs: 'center',
                sm: 'left',
              }}
            >
              A.k.a. MrLowLevel
            </Box>
          </div>
          <div>
            <p>Building and exploring in the generative AI space.</p>
            <Box as="p" color="neutral.11">
              London, United Kingdom
            </Box>
          </div>
        </Box>
        <Box position="absolute" top="xxl" right="xxl">
          <ThemeToggle />
        </Box>
      </Box>
      <main></main>
    </Box>
  )
}

export default Home
