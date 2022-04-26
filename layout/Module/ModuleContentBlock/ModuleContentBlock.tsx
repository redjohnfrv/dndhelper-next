import React from 'react'
import styled from 'styled-components'

//** utils
import {IOverview} from '../../../dto/module'

//** components
import {Tags, Text, TitleH2} from '../../ui'

const initialContent: IOverview = {
  text: '',
  tags: [{
    id: 0,
    name: '',
    link: '',
  }]
}

interface Props {
  title: string
  text?: string
  content?: IOverview
}

export const ModuleContentBlock = ({title, content = initialContent}: Props) => {
  const {text, tags} = content as IOverview

  return (
    <Wrapper>
      <TitleH2 text={title} />
      <TextWrapper>
        <Text>
          {text || 'Enter your text ...'}
        </Text>
      </TextWrapper>
      <Tags tags={tags} />
    </Wrapper>
  )
}

const Wrapper = styled.div`
  margin-bottom: 48px;
`
const TextWrapper = styled.div`
  padding: 24px 0;
`
