import React, {ReactNode} from 'react'
import styled from 'styled-components'

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
      <MAIN>
        {children}
      </MAIN>
      <footer>
        <Footer />
      </footer>
    </Container>
  )
}

const MAIN = styled.main`
  position: relative;
  min-height: calc(100vh - 240px); //footer + header + container's padding
`
