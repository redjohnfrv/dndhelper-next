import React from 'react'
import styled from 'styled-components'

//** utils
import {ITag} from '../../dto/module'

//** components
import {Button, Input} from '../ui'

interface Props {
  name: string
  link: string
  handlers: {
    linkHandler: (link: string) => void
    tagNameHandler: (text: string) => void
    addTag: (tag: ITag) => void
  }
}

export const CreateTag = ({name, link, handlers}: Props) => {
  return (
    <Wrapper>
      <Input
        value={name}
        onChangeHandler={handlers.tagNameHandler}
        placeholder="Tag name"
      />
      <Input
        value={link}
        onChangeHandler={handlers.linkHandler}
        placeholder="Tag link (ex: /modules/1)"
      />
      <Button
        onClick={() => handlers.addTag({name, link})}
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
