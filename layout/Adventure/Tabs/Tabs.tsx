import React, {useEffect, useState} from 'react'
import {useSelector} from 'react-redux'
import styled from 'styled-components'

//** utils
import {size, tabs} from '../../../constants'
import {selectAdventure} from '../../../redux/adventure/selector'
import {getTabList} from '../../../helpers'

//** components
import {TabList} from './TabList'

export const Tabs = () => {
  const adventure = useSelector(selectAdventure)
  const {modules, quests, npc, players} = adventure

  const [activeTab, setActiveTab] = useState<string>(tabs[0])
  const [tabList, setTabList] = useState(getTabList(modules))

  useEffect(() => {
    setTabList(getTabList(modules))
  }, [modules.length])

  useEffect(() => {
    if (activeTab === tabs[0]) setTabList(getTabList(modules))
    if (activeTab === tabs[1]) setTabList(getTabList(quests))
    if (activeTab === tabs[2]) setTabList(getTabList(npc))
    if (activeTab === tabs[3]) setTabList(getTabList(players))
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
      <TabList tabs={getTabList(tabList) || []} />
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
