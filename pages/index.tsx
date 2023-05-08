import type { NextPage } from 'next'
import Head from 'next/head'
import { Box } from '@/components/Box'
import { Button } from '@/components/Button'
import { Me } from '@/components/Me'
import { Paper } from '@/components/Paper'
import { Header, Main, Section } from '@/components/Semantic'
import { Text } from '@/components/Text'

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
                align={{
                  xs: 'center',
                  sm: 'left',
                }}
              >
                Adrien Wald
              </Text.H1>
              <Text.H3
                size="lg"
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
                <Text.Span whiteSpace="nowrap">
                  Building and exploring in
                </Text.Span>{' '}
                <Text.Span whiteSpace="nowrap">
                  the generative AI space.
                </Text.Span>
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
        <Main spacing="lg" width="full" maxWidth="5xl" mx="auto" mb="6xl">
          <Section spacing="2xl">
            <Text.H2 size="2xl" align={{ xs: 'center', sm: 'left' }}>
              <Text.Span whiteSpace="nowrap">Products I&apos;m</Text.Span>{' '}
              <Text.Span whiteSpace="nowrap">working on</Text.Span>
            </Text.H2>
            <Box
              display="flex"
              flexDirection={{
                xs: 'column',
                sm: 'row',
              }}
              alignItems="stretch"
              gap="2xl"
            >
              <Paper
                display="flex"
                flexDirection="column"
                width={{ xs: 'full', sm: '1/2' }}
                p="lg"
                gap="2xl"
                color="violet"
              >
                <Box flex="fluid" spacing="xl">
                  <Text.H3 size="xl" lineHeight={1} color="violet" dimmed>
                    CoLoop
                  </Text.H3>
                  <Box spacing="md">
                    <Text.P color="blue">
                      CoLoop is the AI copilot for qualitative researchers.
                    </Text.P>
                    <Text.P color="blue" size="sm">
                      Users upload raw transcript or audio / video files to
                      CoLoop. CoLoop uses AI to convert these into structured
                      transcripts, which are made available for analysis through
                      a powerful ChatGPT-like interface, as well as an
                      AI-automated analysis grid.
                    </Text.P>
                    <Text.P color="blue" size="sm">
                      CoLoop is currently in private beta.
                    </Text.P>
                  </Box>
                </Box>
                <Button
                  as="a"
                  href="https://coloop.ai"
                  target="_blank"
                  rel="noopener noreferrer"
                  size="md"
                  color="violet"
                  ml="auto"
                >
                  Visit CoLoop.ai
                </Button>
              </Paper>
              <Paper
                display="flex"
                flexDirection="column"
                width={{ xs: 'full', sm: '1/2' }}
                p="lg"
                gap="2xl"
                color="blue"
              >
                <Box flex="fluid" spacing="xl">
                  <Text.H3 size="xl" lineHeight={1} color="blue" dimmed>
                    Genei
                  </Text.H3>
                  <Box spacing="md">
                    <Text.P color="blue">
                      Genei is VSCode for AI-augmented academic research.
                    </Text.P>
                    <Text.P color="blue" size="sm">
                      Users upload PDFs and webpages to Genei, which in turn
                      generates summaries, extracts figures and keywords, and
                      makes all contents queryable through a powerful neural
                      search engine that enables semantic search, question
                      answering, and multi-document summarisation.
                    </Text.P>
                    <Text.P color="blue" size="sm">
                      Genei additionally boasts a feature-rich text editor with
                      AI-powered writing assistance that tightly integrates with
                      the material users have uploaded.
                    </Text.P>
                  </Box>
                </Box>
                <Button
                  as="a"
                  href="https://genei.io"
                  target="_blank"
                  rel="noopener noreferrer"
                  size="md"
                  color="blue"
                  ml="auto"
                >
                  Visit Genei.io
                </Button>
              </Paper>
            </Box>
          </Section>
        </Main>
      </Box>
    </>
  )
}

export default Home
