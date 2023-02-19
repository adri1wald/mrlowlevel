import { ThemeToggle } from '@/components/ThemeToggle'
import type { NextPage } from 'next'
import Head from 'next/head'

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>MrLowLevel</title>
        <meta
          name="description"
          content="Can someone please tell me why we are here?"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <h1 className="title">Hi there I&apos;m Adrien</h1>
        <ThemeToggle />
      </main>
    </div>
  )
}

export default Home
