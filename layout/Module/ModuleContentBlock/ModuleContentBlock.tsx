import React, {useState} from 'react'
import styled from 'styled-components'
import {Tags, Units } from '../..'


//** utils
import {
  INote,
  IOverview,
  IPreview,
  IScenario,
  ITag, IUnit,
} from '../../../dto/module'
import {useSwitcher} from '../../../hooks'

//** components
import {Button, Text, TitleH2, Textarea} from '../../ui'

const initialContent: IOverview | IPreview | IScenario | INote = {
  text: '',
  units: [],
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
      INote,
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

  const {text, tags, units} = content as IOverview | IPreview | IScenario | INote
  const [stateTags, setStateTags] = useState<ITag[] | []>(tags)
  const [stateContent, setStateContent] = useState<string>(text)
  const [stateUnits, setStateUnits] = useState<IUnit[] | []>(units)
  const showUnitsPopup = useSwitcher()
  const showTagsPopup = useSwitcher()
  const showEdit = useSwitcher(false)

  const addTag = (tag: ITag) => {
    showTagsPopup.off()
    setStateTags([...stateTags, tag])
  }

  const addUnit = (unit: IUnit) => {
    showUnitsPopup.off()
    setStateUnits([...stateUnits, unit])
  }

  return (
    <Wrapper>
      <TitleH2 text={title} />

      <TextWrapper>
        {showEdit.isOn
          ? (
            <Textarea
              text={stateContent}
              onChangeHandler={setStateContent}
            />
          ) : (
            <Text>
              {stateContent || 'Enter your text ...'}
            </Text>
          )
        }
      </TextWrapper>

      <Units units={stateUnits} showPopup={showUnitsPopup} addUnit={addUnit} />
      <Tags tags={stateTags} addTag={addTag} showPopup={showTagsPopup} />

      <ButtonWrapper>
        <Button
          title='EDIT'
          small={true}
          onClick={() => showEdit.toggle()}
        />
        <Button
          small={true}
          title='SAVE'
          onClick={() => {
            showEdit.off()
            updateHandler(
              moduleId,
              {
                text: stateContent,
                units: stateUnits,
                tags: stateTags,
              },
            )
          }}
          loading={loading}
          disable={loading || !showEdit.isOn}
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
  display: flex;
  gap: 12px;
  margin-top: 24px;
`
