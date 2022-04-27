import React, {useState} from 'react'
import styled from 'styled-components'

//** utils
import {
  INote,
  IOverview,
  IPreview,
  IScenario,
  ITag
} from '../../../dto/module'

//** components
import {Button, Tags, Text, TitleH2} from '../../ui'
import {Textarea} from '../../ui/Textarea/Textarea'
import {useSwitcher} from '../../../hooks/useSwitcher'

const initialContent: IOverview | IPreview | IScenario | INote = {
  text: '',
  tags: [{
    name: '',
    link: '',
  }],
}

interface Props {
  title: string
  content?: IOverview | IPreview | IScenario | INote
  updateHandler: (
    id: number,
    content:
      IOverview |
      IPreview |
      IScenario |
      INote
  ) => void
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

  const {text, tags} = content as IOverview | IPreview | IScenario
  const [stateTags, setStateTags] = useState<ITag[] | []>(tags)
  const [stateContent, setStateContent] = useState<string>(text)
  const showPopup = useSwitcher()

  const addTag = (tag: ITag) => {
    showPopup.off()
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

      <Tags tags={stateTags} addTag={addTag} showPopup={showPopup} />

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
