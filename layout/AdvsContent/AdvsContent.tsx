import React from 'react'
import styled from 'styled-components'

//** utils
import {IAdventure} from '../../dto/adventure'

//** components
import {TitleH1} from '../ui'
import {ErrorLoad} from '../ErrorLoad/ErrorLoad'
import {AdventuresList} from '..'

interface Props {
  adventures: IAdventure[] | string
  id?: string
}

export const AdvsContent = ({adventures, id = ''}: Props) => {

  return (
    <Wrapper>
      <TitleH1
        text={id
          ? `Adventure ${id}`
          : 'Adventures'
        }
        align="right"
      />
      {Array.isArray(adventures)
        ? adventures.map((item: IAdventure) => {
          return <AdventuresList key={item.id} adventure={item} />
        })
        : (
          <ErrorLoad>{adventures}</ErrorLoad>
        )
      }
    </Wrapper>
  )
}

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 48px;
  width: 100%;
  padding-bottom: 24px;
`
