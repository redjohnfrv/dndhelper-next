import React from 'react'
import styled from 'styled-components'

//** utils
import {IAdventure} from '../../dto/adventure'

//** components
import {Preview, Tabs} from '.'

interface Props {
  adventure: IAdventure | []
}

export const Adventure = ({adventure = []}: Props) => {
  const {name, avatar, desc, id} = adventure as IAdventure

  return (
    <Wrapper>
      <Preview props={{name, avatar, desc, id}} />
      <Tabs advId={id} />
    </Wrapper>
  )
}

const Wrapper = styled.div`
  width: 100%;
`
