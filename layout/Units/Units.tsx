import React, {useState} from 'react'
import styled from 'styled-components'
import { CreateUnit } from '..'

//** utils
import {IUnit} from '../../dto/module'
import {UseSwitcherType} from '../../hooks'
import {size} from '../../constants'

//** components
import {EditSvg} from '../ui/Svg'
import {Close, Popup, TitleH3} from '../ui'

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
            <UnitWrapper key={unit.title}>
              <UnitTitleWrapper>
                <TitleH3 text={unit.title} />
                <CloseWrapper>
                  <Close onClick={() => {
                    unsaved.on()
                    removeUnit(unit)
                  }}
                  />
                </CloseWrapper>
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
              addUnit,
              closeHandler: showPopup,
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
  padding-left: 24px;
`
const CloseWrapper = styled.div`
  position: absolute;
  top: 0;
  left: 0;
`
