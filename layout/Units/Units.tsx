import React, {useState} from 'react'
import styled from 'styled-components'
import { CreateUnit } from '..'

//** utils
import {IUnit} from '../../dto/module'
import {UseSwitcherType} from '../../hooks'
import {color, size} from '../../constants'

//** components
import {EditSvg} from '../ui/Svg'
import {Popup, TitleH3} from '../ui'

interface Props {
  units: IUnit[] | []
  showPopup: UseSwitcherType
  addUnit: (unit: IUnit) => void
  removeUnit: (unit: IUnit) => void
  unsaved: UseSwitcherType
}

export const Units = ({
  units = [],
  showPopup,
  addUnit,
  removeUnit,
  unsaved
}: Props) => {
  const [title, setTitle] = useState<string>('')
  const [content, setContent] = useState<string>('')

  return (
    <Wrapper>

      {/** units **/}
      <UnitsWrapper>
        {units.map((unit: IUnit) => {
          return (
            <UnitWrapper>
              <UnitTitleWrapper>
                <TitleH3 text={unit.title} />
                <Delete onClick={() => {
                  unsaved.on()
                  removeUnit(unit)
                }}>+</Delete>
              </UnitTitleWrapper>
              <pre>{unit.content}</pre>
            </UnitWrapper>
          )
        })}
      </UnitsWrapper>

      <AddUnitButton onClick={() => {
        unsaved.on()
        showPopup.toggle()
        setContent('')
        setTitle('')
      }}>
        <EditSvg />
        <EditTip>Add unit</EditTip>
      </AddUnitButton>
      {showPopup.isOn &&
        <Popup>
          <CreateUnit
            title={title}
            content={content}
            handlers={{
              titleHandler: setTitle,
              contentHandler: setContent,
              addUnit
            }}
          />
        </Popup>
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
const UnitsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;
  margin-bottom: 24px;
`
const UnitWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
`
const UnitTitleWrapper = styled.div`
  position: relative;
  width: max-content;
`
const Delete = styled.div`
  position: absolute;
  top: 0;
  right: -32px;
  width: 16px;
  height: 16px;
  font-size: ${size.normalText};
  font-weight: bold;
  transform: rotate(45deg);
  color: ${color.danger};
  cursor: pointer;
`
