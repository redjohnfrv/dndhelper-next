import React from 'react'
import styled from 'styled-components'

//** components
import {HeaderMenu} from '..'

export const Header = () => {
  return (
    <Wrapper>
      <HeaderMenu />
    </Wrapper>
  )
}

const Wrapper = styled.div`
  height: 96px;
`
