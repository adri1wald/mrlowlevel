import { NextPage } from 'next'
import Head from 'next/head'
import { Box } from '@/components/Box'
import { Header, Main, Section } from '@/components/Semantic'
import { Text } from '@/components/Text'

const Components: NextPage = () => {
  return (
    <>
      <Head>
        <title>Components</title>
        <meta
          name="description"
          content="Component library for MrLowLevel's website"
        />
      </Head>
      <Box p="2xl" spacing="6xl">
        <Header>
          <Text.H1 align="center" color="violet">
            Components
          </Text.H1>
        </Header>
        <Main>
          <Section>
            <Text.H2 color="violet" dimmed size="xl">
              Buttons
            </Text.H2>
          </Section>
        </Main>
      </Box>
    </>
  )
}

export default Components
