import React, {ReactNode} from 'react'
import styled from 'styled-components'

//** utils
import {theme} from '../../../constants'

interface Props {
  children: ReactNode
}

export const Container = ({children}: Props) => {
  return (
    <Wrapper>
      {children}
    </Wrapper>
  )
}

const Wrapper = styled.div`
  max-width: 1920px;
  margin: 0 auto;
  padding: 24px;
  background: ${theme.common};
`
