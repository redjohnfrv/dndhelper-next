import React from 'react'
import styled from 'styled-components'

//** utils
import {IAdventure} from '../../dto/adventure'

interface Props {
  adventures: IAdventure[] | string
  id?: string
}

export const AdvContent = ({adventures, id = ''}: Props) => {

  return (
    <Wrapper>
      <h1>
        {id
          ? `Adventure ${id}`
          : 'Adventures'
        }
      </h1>
      {Array.isArray(adventures)
        ? (adventures as IAdventure[]).map((item: IAdventure) => {
          return <div key={item.id}>{JSON.stringify(item)}</div>
        })
        : (
          <div>{adventures as string}</div>
        )
      }

    </Wrapper>
  )
}

const Wrapper = styled.div``
