import React from 'react'
import styled from 'styled-components'

//** components
import {Text, TitleH2} from '../../ui'

interface Props {
  title: string
  text: string
}

export const ModuleContentBlock = ({title, text}: Props) => {
  return (
    <Wrapper>
      <TitleH2 text={title} />
      <Text>
        {text}
      </Text>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  margin-bottom: 48px;
`
