import type { NextPage } from 'next'
import Head from 'next/head'
import { Box } from '@/components/Box'
import { Me } from '@/components/Me'
import { Text } from '@/components/Text'
import { ThemeToggle } from '@/components/ThemeToggle'

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
            <Text.H1
              color="violet.12"
              align={{
                xs: 'center',
                sm: 'left',
              }}
            >
              Adrien Wald
            </Text.H1>
            <Text.H2
              size="lg"
              color="violet.11"
              align={{
                xs: 'center',
                sm: 'left',
              }}
            >
              A.k.a. MrLowLevel
            </Text.H2>
          </div>
          <div>
            <Text.P>Building and exploring in the generative AI space.</Text.P>
            <Text.P color="neutral.11">London, United Kingdom</Text.P>
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
