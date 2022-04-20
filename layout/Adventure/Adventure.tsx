import React from 'react'
import styled from 'styled-components'

//** utils
import {IAdventure} from '../../dto/adventure'

//** components
import {Preview, Tabs} from './index'

interface Props {
  adventures: IAdventure | string
}

export const Adventure = ({adventures: adventure}: Props) => {
  const {name, avatar, desc, id} = adventure as IAdventure

  return (
    <Wrapper>
      <Preview props={{name, avatar, desc, id}} />
      <Tabs />
    </Wrapper>
  )
}

const Wrapper = styled.div`
  width: 100%;
`
