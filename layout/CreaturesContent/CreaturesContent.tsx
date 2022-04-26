import React from 'react'
import styled from 'styled-components'

//** utils
import {ICreature} from '../../dto/creature'

interface Props {
  creatures: ICreature[] | string
}

export const CreaturesContent = ({creatures}: Props) => {
  return (
    <Wrapper>
      {Array.isArray(creatures) &&
        creatures.map(creature => <span key={creature.id}>{creature.name}</span>)}
    </Wrapper>
  )
}

const Wrapper = styled.div``
