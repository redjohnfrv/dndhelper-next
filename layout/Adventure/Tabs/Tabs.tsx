import React, {useEffect, useState} from 'react'
import styled from 'styled-components'

//** utils
import {size, tabs} from '../../../constants'

//** components
import {TabList} from './TabList'
import {useSelector} from 'react-redux'
import {selectAdventure} from '../../../redux/adventure/selector'

export const Tabs = () => {
  const adventure = useSelector(selectAdventure)
  const {modules, quests, npc, players} = adventure
  const [activeTab, setActiveTab] = useState<string>(tabs[0])
  const [contentTab, setContentTab] = useState<unknown[]>(modules)

  useEffect(() => {
    if (activeTab === tabs[0]) setContentTab(modules)
    if (activeTab === tabs[1]) setContentTab(quests)
    if (activeTab === tabs[2]) setContentTab(npc)
    if (activeTab === tabs[3]) setContentTab(players)
  }, [activeTab])

  return (
    <Wrapper>
      {/** tabs menu **/}
      <TabMenu>
        {tabs.map((tab: string) =>
          <Tab
            key={tab[0]}
            onClick={() => setActiveTab(tab)}
            active={tab === activeTab}
          >
            {tab}
          </Tab>
        )}
      </TabMenu>

      {/** tabs content **/}
      <TabList tabs={contentTab} />
    </Wrapper>
  )
}

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
`
const TabMenu = styled.nav`
  display: flex;
  gap: 48px;
`
const Tab = styled.span<{active: boolean}>`
  font-size: ${size.largeText};
  text-decoration: none;
  opacity: .6;
  cursor: pointer;
  
  ${props => props.active && {
    textDecoration: 'underline',
    opacity: '1',
  }}
`
