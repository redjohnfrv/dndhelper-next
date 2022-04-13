import React, {ReactNode} from 'react'

//** components
import Head from 'next/head'
import {Container} from '../ui'
import {Header, Footer} from '..'

interface Props {
  children: ReactNode
  title: string
}

export const MainLayout = (
  {
    children,
    title = 'D&D Adventure helper',
  }: Props) => {

  return (
    <Container>
      <Head>
        <title>{title}</title>
      </Head>
      <header>
        <Header />
      </header>
      <main>
        {children}
      </main>
      <footer>
        <Footer />
      </footer>
    </Container>
  )
}
