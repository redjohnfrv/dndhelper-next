import React, {ReactNode} from 'react'
import styled from 'styled-components'

interface Props {
  children: ReactNode
}

export const Popup = ({children}: Props) => {
  return (
    <Wrapper>
      {children}
    </Wrapper>
  )
}

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background: rgba(12, 12, 12, 0.52);
  z-index: 100;
`
