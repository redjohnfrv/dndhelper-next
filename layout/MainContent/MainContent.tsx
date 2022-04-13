import React from 'react'
import styled from 'styled-components'

//** components
import {SideBar, ContentBlock} from '..'

export const MainContent = () => {
  return (
    <Wrapper>
      <SideBar />
      <ContentBlock>
        Content
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
