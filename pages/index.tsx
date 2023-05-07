import type { NextPage } from 'next'
import Head from 'next/head'
import { Box } from '@/components/Box'
import { Button } from '@/components/Button'
import { Me } from '@/components/Me'
import { Header, Main, Section } from '@/components/Semantic'
import { Text } from '@/components/Text'
import { ThemeToggle } from '@/components/ThemeToggle'

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>MrLowLevel</title>
        <meta
          name="description"
          content="Can someone please tell me why we are here?"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Box position="absolute" top="2xl" right="2xl">
        <ThemeToggle />
      </Box>
      <Box p="2xl" spacing="6xl">
        <Header
          display="flex"
          flexDirection={{ xs: 'column', sm: 'row' }}
          justifyContent="center"
          alignItems={{ xs: 'center', sm: 'flex-start' }}
          gap="2xl"
        >
          <Me flex="rigid" />
          <Box spacing="lg">
            <div>
              <Text.H1
                color="violet"
                align={{
                  xs: 'center',
                  sm: 'left',
                }}
              >
                Adrien Wald
              </Text.H1>
              <Text.H3
                size="lg"
                color="violet"
                dimmed
                align={{
                  xs: 'center',
                  sm: 'left',
                }}
              >
                A.k.a. MrLowLevel
              </Text.H3>
            </div>
            <div>
              <Text.P
                align={{
                  xs: 'center',
                  sm: 'left',
                }}
              >
                Building and exploring in the generative AI space.
              </Text.P>
              <Text.P
                dimmed
                align={{
                  xs: 'center',
                  sm: 'left',
                }}
              >
                London, United Kingdom
              </Text.P>
            </div>
          </Box>
        </Header>
        <Main spacing="lg">
          <Section spacing="lg">
            <Text.H2 size="xl" align="center">
              Products I&apos;m working on
            </Text.H2>
            <Box
              display="flex"
              flexDirection="column"
              alignItems="center"
              gap="sm"
            >
              <Button
                as="a"
                href="https://genei.io"
                target="_blank"
                rel="noopener noreferrer"
                size="md"
                color="blue"
              >
                Genei
              </Button>
              <Button
                as="a"
                href="https://coloop.ai"
                target="_blank"
                rel="noopener noreferrer"
                size="md"
                color="violet"
              >
                CoLoop
              </Button>
            </Box>
          </Section>
        </Main>
      </Box>
    </>
  )
}

export default Home
