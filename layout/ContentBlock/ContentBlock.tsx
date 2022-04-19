import React, {ReactNode} from 'react'
import styled from 'styled-components'

interface Props {
  children: ReactNode
}

export const ContentBlock = ({children}: Props) => {
  return (
    <Wrapper>
      {children}
    </Wrapper>
  )
}

const Wrapper = styled.div`
  display: flex;
  width: 80%;
`
