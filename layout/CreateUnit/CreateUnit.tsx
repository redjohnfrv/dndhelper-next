import React from 'react'
import styled from 'styled-components'

//** utils
import {IUnit} from '../../dto/module'
import {UseSwitcherType} from '../../hooks'
import {size} from '../../constants'

//** components
import {Button, Textarea, Input, Close} from '../ui'

interface Props {
  title: string
  content: string
  handlers: {
    titleHandler: (title: string) => void
    contentHandler: (content: string) => void
    addUnit: (unit: IUnit) => void
    closeHandler: UseSwitcherType
  }
}

export const CreateUnit = ({title, content, handlers}: Props) => {
  return (
    <Wrapper>
      <CloseWrapper>
        <Close onClick={() => handlers.closeHandler.off()} />
      </CloseWrapper>
      <Input
        value={title}
        onChangeHandler={handlers.titleHandler}
        placeholder="Type your title"
      />
      <Textarea
        text={content}
        onChangeHandler={handlers.contentHandler}
      />
      <Button
        onClick={() => handlers.addUnit({title, content})}
        title='Add'
        small={true}
        disable={title === '' || content === ''}
      />
    </Wrapper>
  )
}

const Wrapper = styled.div`
  position: relative;
  padding: 24px;
  background: white;
  border: 1px solid black;
  border-radius: 12px;
  
  & input {
    width: 100%;
    font-size: ${size.normalText};
    font-weight: bold;
    border: none;
  }
  
  & textarea {
    border-radius: 6px;
  }
`
const CloseWrapper = styled.div`
  position: absolute;
  top: 0;
  right: 6px;
`
