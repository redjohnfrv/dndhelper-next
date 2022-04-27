import React from 'react'
import styled from 'styled-components'

//** utils
import {ITag} from '../../dto/module'
import {UseSwitcherType} from '../../hooks'

//** components
import {Button, Close, Input} from '../ui'

interface Props {
  name: string
  link: string
  handlers: {
    linkHandler: (link: string) => void
    tagNameHandler: (text: string) => void
    addTag: (tag: ITag) => void
    closeHandler: UseSwitcherType
  }
}

export const CreateTag = ({name, link, handlers}: Props) => {

  return (
    <Wrapper>
      <CloseWrapper>
        <Close onClick={() => handlers.closeHandler.off()} />
      </CloseWrapper>
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
        small={true}
        onClick={() => handlers.addTag({name, link})}
        title='Add'
        disable={name === '' || link === ''}
      />
    </Wrapper>
  )
}

const Wrapper = styled.div`
  position: relative;
  gap: 12px;
  min-width: 200px;
  padding: 24px;
  text-align: center;
  background: white;
  border: 1px solid black;
  border-radius: 12px;
  
  & input {
    box-sizing: border-box;
    width: 100%;
    margin-bottom: 12px;
    line-height: 32px;
  }
`
const CloseWrapper = styled.div`
  position: absolute;
  top: 0;
  right: 6px;
`
