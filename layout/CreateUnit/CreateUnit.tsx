import React from 'react'
import styled from 'styled-components'

//** utils
import {IUnit} from '../../dto/module'

//** components
import {Button, Textarea, Input} from '../ui'

interface Props {
  title: string
  content: string
  handlers: {
    titleHandler: (title: string) => void
    contentHandler: (content: string) => void
    addUnit: (unit: IUnit) => void
  }
}

export const CreateUnit = ({title, content, handlers}: Props) => {
  return (
    <Wrapper>
      <Input
        value={title}
        onChangeHandler={handlers.titleHandler}
        placeholder="title"
      />
      <Textarea
        text={content}
        onChangeHandler={handlers.contentHandler}
      />
      <Button
        onClick={() => handlers.addUnit({title, content})}
        title='Add'
      />
    </Wrapper>
  )
}

const Wrapper = styled.div`
  padding: 24px;
  background: white;
  border: 1px solid black;
  border-radius: 12px;
`
