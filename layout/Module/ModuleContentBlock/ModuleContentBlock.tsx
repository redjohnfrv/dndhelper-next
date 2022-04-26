import React, {useState} from 'react'
import styled from 'styled-components'

//** utils
import {IOverview, IPreview, ITag} from '../../../dto/module'

//** components
import {Button, Tags, Text, TitleH2} from '../../ui'

const initialContent: IOverview = {
  text: '',
  tags: [{
    id: 0,
    name: '',
    link: '',
  }],
}

interface Props {
  title: string
  content?: IOverview | IPreview
  updateHandler: (id: number, content: IOverview | IPreview) => void
  moduleId: number
}

export const ModuleContentBlock = ({
  title,
  content = initialContent,
  updateHandler,
  moduleId,
}: Props) => {

  const {text, tags} = content as IOverview
  const [stateTags, setStateTags] = useState<ITag[] | []>(tags)
  const [stateContent, setStateContent] = useState<string>(text)

  const addTag = (tag: ITag) => {
    setStateTags([...stateTags, tag])
  }

  const moqOverview = {
    text: stateContent,
    tags: stateTags,
  }

  return (
    <Wrapper>
      <TitleH2 text={title} />
      <TextWrapper>
        <Text>
          {stateContent || 'Enter your text ...'}
        </Text>
        <input
          defaultValue={stateContent}
          type="text"
          onChange={(e) =>
            setStateContent(e.target.value)}
        />
      </TextWrapper>
      <Tags tags={stateTags} addTag={addTag} />
      <ButtonWrapper>
        <Button
          small={true}
          title='SAVE'
          onClick={() => updateHandler(moduleId, moqOverview)}
        />
      </ButtonWrapper>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  margin-bottom: 48px;
`
const TextWrapper = styled.div`
  padding: 24px 0;
`
const ButtonWrapper = styled.div`
  margin-top: 24px;
`
