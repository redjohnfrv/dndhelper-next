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
}

export const AdventuresList = ({adventure}: Props) => {
  const {name, avatar, desc, id} = adventure

  return (
    <Wrapper>
      <TitleH2 text={name} />
      <Content>
        <Avatar image={avatar} />
        <Description>
          <Text size={size.normalText}>
            {desc}
          </Text>
          <Link href={`${routes.adventures}/${id}`}>
            <a>Go to the Adventure</a>
          </Link>
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
