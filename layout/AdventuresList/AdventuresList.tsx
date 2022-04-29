import React from 'react'
import styled from 'styled-components'
import {useSelector} from 'react-redux'

//** utils
import {IAdventure} from '../../dto/adventure'
import {color, routes, size} from '../../constants'
import {adventuresSelector} from '../../redux/adventures'

//** components
import {Avatar, Button, Text, TitleH2} from '../ui'
import Link from 'next/link'

interface Props {
  adventure: IAdventure
  onDelete: (id: string) => void
}

export const AdventuresList = ({adventure, onDelete}: Props) => {
  const {name, avatar, desc, id} = adventure

  const isDeleting = useSelector(adventuresSelector.isAdventureLoading)

  return (
    <Wrapper>
      <TitleH2 text={name} />
      <Content>
        <Avatar image={avatar} alt="Adventure avatar" />
        <Description>
          <Text size={size.normalText} color={color.white}>
            {desc}
          </Text>
          <AdvNavigation>
            <Link href={`${routes.adventures}/${id}`}>
              <a>Go to the Adventure</a>
            </Link>
            <Button
              onClick={() => onDelete(String(id))}
              title="Delete"
              theme="warning"
              small={true}
              loading={isDeleting}
              disable={isDeleting}
            />
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
  width: 100%;
  padding: 24px 48px;
  background: ${color.transparent};
  border-radius: 12px;
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
  width: 100%;
`
const AdvNavigation = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  
  & a {
    height: ${size.normalText};
    color: ${color.lightGold};
    
    &:after {
      background: ${color.lightGold};
    }
  }
`
