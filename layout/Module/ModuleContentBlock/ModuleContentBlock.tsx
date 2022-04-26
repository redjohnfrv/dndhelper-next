import React, {useState} from 'react'
import styled from 'styled-components'

//** utils
import {IOverview, IPreview, ITag} from '../../../dto/module'

//** components
import {Button, Tags, Text, TitleH2} from '../../ui'
import {Textarea} from '../../ui/Textarea/Textarea'

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
  loading?: boolean
}

export const ModuleContentBlock = ({
  title,
  content = initialContent,
  updateHandler,
  moduleId,
  loading,
}: Props) => {

  const {text, tags} = content as IOverview
  const [stateTags, setStateTags] = useState<ITag[] | []>(tags)
  const [stateContent, setStateContent] = useState<string>(text)

  const addTag = (tag: ITag) => {
    setStateTags([...stateTags, tag])
  }

  return (
    <Wrapper>
      <TitleH2 text={title} />
      <TextWrapper>
        <Text>
          {stateContent || 'Enter your text ...'}
        </Text>
        <Textarea
          text={stateContent}
          onChangeHandler={setStateContent}
        />
      </TextWrapper>
      <Tags tags={stateTags} addTag={addTag} />
      <ButtonWrapper>
        <Button
          small={true}
          title='SAVE'
          onClick={() => updateHandler(
            moduleId,
            {
              text: stateContent,
              tags: stateTags,
            }
          )}
          loading={loading}
          disable={loading}
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
