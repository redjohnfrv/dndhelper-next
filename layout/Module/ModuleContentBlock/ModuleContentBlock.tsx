import React, { useState } from 'react'
import styled from 'styled-components'

//** utils
import {IOverview, ITag} from '../../../dto/module'

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
  updateOverviewHandler: (id: number, overview: IOverview) => void
  moduleId: number
}

export const ModuleContentBlock = ({
  title,
  content = initialContent,
  updateOverviewHandler,
  moduleId,
}: Props) => {

  const {text, tags} = content as IOverview
  const [stateTags, setStateTags] = useState<ITag[] | []>(tags)

  const addTag = (tag: ITag) => {
    setStateTags([...stateTags, tag])
  }

  const moqOverview = {
    text: 'updated overview',
    tags: stateTags,
  }

  return (
    <Wrapper>
      <TitleH2 text={title} />
      <TextWrapper>
        <Text>
          {text || 'Enter your text ...'}
        </Text>
      </TextWrapper>
      <Tags tags={stateTags} addTag={addTag} />
      <button onClick={() => updateOverviewHandler(moduleId, moqOverview)}>update</button>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  margin-bottom: 48px;
`
const TextWrapper = styled.div`
  padding: 24px 0;
`
