import React, {useState} from 'react'
import styled from 'styled-components'
import { CreateUnit } from '..'

//** utils
import {IUnit} from '../../dto/module'
import {UseSwitcherType} from '../../hooks'

//** components
import {EditSvg} from '../ui/Svg'
import {size} from '../../constants'

interface Props {
  units: IUnit[] | []
  showPopup: UseSwitcherType
  addUnit: (unit: IUnit) => void
}

export const Units = ({units, showPopup, addUnit}: Props) => {
  const [title, setTitle] = useState<string>('')
  const [content, setContent] = useState<string>('')

  return (
    <Wrapper>
      {units.map((unit: IUnit) => {
        return (
          <>
            <h3>{unit.title}</h3>
            <pre>{unit.content}</pre>
          </>
        )
      })}
      <AddUnitButton onClick={() => showPopup.toggle()}>
        <EditSvg />
        <EditTip>Add unit</EditTip>
      </AddUnitButton>
      {showPopup.isOn &&
        <CreateUnit
          title={title}
          content={content}
          handlers={{
            titleHandler: setTitle,
            contentHandler: setContent,
            addUnit
          }}
        />
      }
    </Wrapper>
  )
}

const Wrapper = styled.div`
  margin-bottom: 24px;
`
const AddUnitButton = styled.div`
  display: flex;
  gap: 12px;
  align-items: flex-end;
  cursor: pointer;
`
const EditTip = styled.span`
  font-size: ${size.smallText};
  font-style: italic;
`
