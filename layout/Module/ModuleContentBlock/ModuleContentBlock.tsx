import React, {useState} from 'react'
import styled from 'styled-components'


//** utils
import {
  INote,
  IOverview,
  IPreview,
  IScenario,
  ITag, IUnit,
} from '../../../dto/module'
import {useSwitcher} from '../../../hooks'
import {color} from '../../../constants'

//** components
import {Button, Text, TitleH2, Textarea} from '../../ui'
import {Tags, Units } from '../..'

const initialContent: IOverview | IPreview | IScenario | INote = {
  text: '',
  units: [{
    title: '',
    content: '',
  }],
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
    payload: {
      overview?: IOverview,
      preview?: IPreview,
      scenario?: IScenario,
      notes?: INote,
    }
  ) => void
  moduleId: number
  loading?: boolean
  entityName: string
}

export const ModuleContentBlock = ({
  title,
  content = initialContent,
  updateHandler,
  moduleId,
  loading,
  entityName,
}: Props) => {

  const {text, tags = [], units = []} =
    content as IOverview | IPreview | IScenario | INote
  const [stateTags, setStateTags] = useState<ITag[] | []>(tags)
  const [stateContent, setStateContent] = useState<string>(text)
  const [stateUnits, setStateUnits] = useState<IUnit[] | []>(units)
  const showUnitsPopup = useSwitcher()
  const showTagsPopup = useSwitcher()
  const showEdit = useSwitcher()
  const unsaved = useSwitcher()

  const addTag = (tag: ITag) => {
    showTagsPopup.off()
    setStateTags([...stateTags, tag])
  }

  const removeTag = (tag: ITag) => {
    const cloneTags = [...stateTags]
    setStateTags([...cloneTags.filter(item => item.name !== tag.name)])
  }

  const addUnit = (unit: IUnit) => {
    showUnitsPopup.off()
    setStateUnits([...stateUnits, unit])
  }

  const removeUnit = (unit: IUnit) => {
    const cloneUnits= [...stateUnits]
    setStateUnits(
      [...cloneUnits.filter(item => item.title !== unit.title)]
    )
  }

  const saveHandler = () => {
    showEdit.off()
    unsaved.off()
    updateHandler(
      moduleId,
      {
        [entityName]: {
          text: stateContent,
          units: stateUnits,
          tags: stateTags,
        }
      }
    )
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
            <Text color={color.white}>
              {stateContent || 'Enter your text ...'}
            </Text>
          )
        }
      </TextWrapper>

      <Units
        units={stateUnits}
        showPopup={showUnitsPopup}
        addUnit={addUnit}
        removeUnit={removeUnit}
        unsaved={unsaved}
      />
      <Tags
        tags={stateTags}
        addTag={addTag}
        removeTag={removeTag}
        showPopup={showTagsPopup}
        unsaved={unsaved}
      />

      <ButtonWrapper>
        <Button
          title='EDIT'
          small={true}
          onClick={() => {
            showEdit.toggle()
            unsaved.on()
          }}
        />
        <Button
          small={true}
          title='SAVE'
          onClick={saveHandler}
          loading={loading}
          disable={(loading || !showEdit.isOn) && !unsaved.isOn}
          theme={unsaved.isOn ? 'warning' : undefined}
        />
      </ButtonWrapper>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  margin-bottom: 48px;
  padding: 24px;
  border: 1px solid ${color.gold};
  border-radius: 12px;
`
const TextWrapper = styled.div`
  padding: 24px 0;
`
const ButtonWrapper = styled.div`
  display: flex;
  gap: 12px;
  margin-top: 24px;
`
