import React from 'react'
import styled from 'styled-components'

//** utils
import {size} from '../../constants'
import {useSwitcher} from '../../hooks/useSwitcher'

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
              {name: 'Monsters', link: '/bestiary'}
            ]}
            toggle={isCollectionShown.isOn}
          />
        </Item>
        <Item onClick={() => isAdventuresShown.toggle()}>
          ADVENTURES
          <Popup
            items={[
            {name: 'All adventures', link: '/adventures'},
            {name: 'New adventures', link: '/new'}
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
  width: 20%;
  min-width: 180px;
  padding: 24px 0 0 24px;
`
const List = styled.nav`
  display: flex;
  flex-direction: column;
  gap: 24px;
`
const Item = styled.div`
  font-size: ${size.normalText};
  cursor: pointer;
`
