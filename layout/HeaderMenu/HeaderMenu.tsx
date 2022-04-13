import React from 'react'
import styled from 'styled-components'

//** components
import Link from 'next/link'

//** utils
import {routes} from '../../constants'

export const HeaderMenu = () => {

  return (
    <Wrapper>
      <Link href={routes.home}><a>HOME</a></Link>
      <Link href={routes.adventures}><a>MY ADVENTURE</a></Link>
      <Link href={routes.new}><a>NEW ADVENTURE</a></Link>
    </Wrapper>
  )
}

const Wrapper = styled.nav`
  display: flex;
  justify-content: flex-start;
  gap: 24px;
`
