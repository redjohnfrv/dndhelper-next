import React, {ReactNode} from 'react'
import styled from 'styled-components'

//** components
import {SideBar, ContentBlock} from '..'

interface Props {
  content: ReactNode
}

export const MainContent = ({content}: Props) => {
  return (
    <Wrapper>
      <SideBar />
      <ContentBlock>
        {content}
      </ContentBlock>
    </Wrapper>
  )
}

const Wrapper = styled.section`
  position: absolute;
  width: 100%;
  height: 100%;
  display: flex;
`
