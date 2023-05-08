import { NextPage } from 'next'
import Head from 'next/head'
import { Box } from '@/components/Box'
import { Button, ButtonProps } from '@/components/Button'
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
      <Box p="2xl" spacing="5xl">
        <Header>
          <Text.H1 align="center" color="violet">
            Components
          </Text.H1>
        </Header>
        <Main>
          <Section>
            <Box spacing="xl" mx="auto" maxWidth="fit">
              <Text.H2 color="violet" dimmed size="xl">
                Buttons
              </Text.H2>
              <Buttons />
            </Box>
          </Section>
        </Main>
      </Box>
    </>
  )
}

const variants = [
  'subtle',
  'light',
  'light+',
  'outline',
  'filled',
] satisfies NonNullable<ButtonProps['variant']>[]
const colors = [
  'neutral',
  'red',
  'orange',
  'yellow',
  'green',
  'blue',
  'violet',
] satisfies NonNullable<ButtonProps['color']>[]

function Buttons() {
  return (
    <Box maxWidth="full" overflowX="auto">
      <Box display="flex" gap="sm" flexDirection="column">
        {variants.map((variant) => (
          <Box key={variant} display="flex" gap="sm">
            {colors.map((color) => (
              <Button key={color} size="sm" variant={variant} color={color}>
                Click me
              </Button>
            ))}
          </Box>
        ))}
      </Box>
    </Box>
  )
}

export default Components
