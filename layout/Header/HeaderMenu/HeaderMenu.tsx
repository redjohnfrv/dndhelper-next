import React from 'react'
import styled from 'styled-components'

//** utils
import {color, routes} from '../../../constants'

//** components
import Link from 'next/link'

export const HeaderMenu = () => {

  return (
    <Wrapper>
      <Link href={routes.home}><a>HOME</a></Link>
      <Link href={routes.adventures}><a>MY ADVENTURES</a></Link>
      <Link href={routes.new}><a>NEW ADVENTURE</a></Link>
    </Wrapper>
  )
}

const Wrapper = styled.nav`
  display: flex;
  justify-content: flex-start;
  gap: 24px;
  
  & a:hover {
    color: ${color.lightGold};
    
    &:after {
      background: ${color.lightGold};
    }
  }
`
