import React from 'react'
import styled from 'styled-components'

//** components
import {HeaderMenu} from '../ui'

export const Header = () => {
  return (
    <Wrapper>
      <HeaderMenu />
    </Wrapper>
  )
}

const Wrapper = styled.div`
  margin-bottom: 48px;
`
