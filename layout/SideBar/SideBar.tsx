import React from 'react'
import styled from 'styled-components'

//** utils
import {color, size} from '../../constants'
import {useSwitcher} from '../../hooks'

//** components
import {Popup} from './index'

export const SideBar = () => {
  const isCollectionShown = useSwitcher()
  const isAdventuresShown = useSwitcher()

  return (
    <Wrapper>
      <List>
        <Item onClick={() => isCollectionShown.toggle()}>
          COLLECTIONS
          <Popup
            items={[
              {name: 'NPC', link: '/npc'},
              {name: 'Creatures', link: '/creatures'}
            ]}
            toggle={isCollectionShown.isOn}
          />
        </Item>
        <Item onClick={() => isAdventuresShown.toggle()}>
          ADVENTURES
          <Popup
            items={[
            {name: 'All adventures', link: '/adventures'},
            {name: 'New adventure', link: '/new'}
          ]}
            toggle={isAdventuresShown.isOn}
          />
        </Item>
        <Item>
          PLAYERS
        </Item>
      </List>
    </Wrapper>
  )
}

const Wrapper = styled.aside`
  box-sizing: border-box;
  display: flex;
  height: max-content;
  width: 20%;
  min-width: 180px;
  padding: 24px 0 24px 24px;
  background: linear-gradient(.25turn, rgba(255, 255, 255, 0.04), 25%, rgba(255, 255, 255, 0));
  border-radius: 12px;
`
const List = styled.nav`
  display: flex;
  flex-direction: column;
  gap: 24px;
`
const Item = styled.div`
  font-size: ${size.normalText};
  cursor: pointer;
  
  &:hover {
    color: ${color.lightGold};
  }
`
