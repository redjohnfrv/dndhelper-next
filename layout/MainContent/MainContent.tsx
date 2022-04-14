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
  display: flex;
`
