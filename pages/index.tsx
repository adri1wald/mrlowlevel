import { Me } from '@/components/Me'
import { ThemeToggle } from '@/components/ThemeToggle'
import {
  absolute,
  color,
  flex,
  font,
  gap,
  justifyCenter,
  spaced,
  p,
  right,
  top,
  rigid,
} from '@/styles/common.css'
import clsx from 'clsx'
import type { NextPage } from 'next'
import Head from 'next/head'

const Home: NextPage = () => {
  return (
    <div className={p.xxl}>
      <Head>
        <title>MrLowLevel</title>
        <meta
          name="description"
          content="Can someone please tell me why we are here?"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <header className={clsx(flex, justifyCenter, gap.xxl)}>
        <Me className={rigid} />
        <div className={spaced.lg}>
          <div>
            <h1
              className={clsx(font.family.heading, font.size.x4l, color.violet)}
            >
              Adrien Wald
            </h1>
            <h2
              className={clsx(
                font.family.heading,
                font.size.lg,
                color.dimmed.violet,
              )}
            >
              A.k.a. MrLowLevel
            </h2>
          </div>
          <div>
            <p>Building and exploring in the generative AI space.</p>
            <p className={color.dimmed.neutral}>London, United Kingdom</p>
          </div>
        </div>
        <div className={clsx(absolute, right.xxl, top.xxl)}>
          <ThemeToggle />
        </div>
      </header>
      <main></main>
    </div>
  )
}

export default Home
