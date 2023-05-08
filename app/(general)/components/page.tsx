import { Metadata, NextPage } from 'next'
import Head from 'next/head'
import { IconPlus } from '@tabler/icons-react'
import { Box } from '@/components/Box'
import { Button, ButtonProps } from '@/components/Button'
import { IconButton, IconButtonProps } from '@/components/IconButton/IconButton'
import { Header, Main, Section } from '@/components/Semantic'
import { Text } from '@/components/Text'
import { rem } from '@/styles/utils'

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
          <Box mx="auto" maxWidth="fit" spacing="4xl">
            <Section>
              <Box spacing="xl" maxWidth="fit">
                <Text.H2 color="violet" dimmed size="xl">
                  Buttons
                </Text.H2>
                <Buttons />
              </Box>
            </Section>
            <Section>
              <Box spacing="xl" maxWidth="fit">
                <Text.H2 color="violet" dimmed size="xl">
                  Icon buttons
                </Text.H2>
                <IconButtons />
              </Box>
            </Section>
          </Box>
        </Main>
      </Box>
    </>
  )
}

const buttonVariants = [
  'subtle',
  'light',
  'light+',
  'outline',
  'filled',
] satisfies NonNullable<ButtonProps['variant']>[]
const buttonColors = [
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
      <Box display="flex" gap="md" flexDirection="column">
        {buttonVariants.map((variant) => (
          <Box key={variant} display="flex" gap="md">
            {buttonColors.map((color) => (
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

const iconButtonVariants = [
  'subtle',
  'light',
  'light+',
  'outline',
  'filled',
] satisfies NonNullable<IconButtonProps['variant']>[]
const iconButtonColors = [
  'neutral',
  'red',
  'orange',
  'yellow',
  'green',
  'blue',
  'violet',
] satisfies NonNullable<IconButtonProps['color']>[]

function IconButtons() {
  return (
    <Box maxWidth="full" overflowX="auto">
      <Box display="flex" gap="md" flexDirection="column">
        {iconButtonVariants.map((variant) => (
          <Box key={variant} display="flex" gap="md">
            {iconButtonColors.map((color) => (
              <IconButton key={color} size="md" variant={variant} color={color}>
                <IconPlus size={rem(16)} />
              </IconButton>
            ))}
          </Box>
        ))}
      </Box>
    </Box>
  )
}

export const metadata: Metadata = {
  title: 'Components',
}

export default Components
