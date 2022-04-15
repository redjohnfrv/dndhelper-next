import React from 'react'
import styled from 'styled-components'

//** utils
import {IAdventure} from '../../dto/adventure'
import {routes, size} from '../../constants'

//** components
import {Avatar, Text, TitleH2} from '../ui'
import Link from 'next/link'

interface Props {
  adventure: IAdventure
  onDelete: (id: string) => void
}

export const AdventuresList = ({adventure, onDelete}: Props) => {
  const {name, avatar, desc, id} = adventure

  return (
    <Wrapper>
      <TitleH2 text={name} />
      <Content>
        <Avatar image={avatar} alt="Adventure avatar" />
        <Description>
          <Text size={size.normalText}>
            {desc}
          </Text>
          <AdvNavigation>
            <Link href={`${routes.adventures}/${id}`}>
              <a>Go to the Adventure</a>
            </Link>
            <Remove onClick={() => onDelete(String(id))}>Delete this one</Remove>
          </AdvNavigation>
        </Description>
      </Content>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
`
const Content = styled.div`
  display: flex;
  justify-content: flex-start;
  gap: 24px;
`
const Description = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-start;
`
const AdvNavigation = styled.div`
  display: flex;
  gap: 48px;
`
const Remove = styled.div`
  cursor: pointer;
`
