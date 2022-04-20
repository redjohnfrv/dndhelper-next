import React, {useState} from 'react'
import styled from 'styled-components'

//** utils
import {size, tabs} from '../../../constants'

//** components
import {TabList} from './TabList'

export const Tabs = () => {
  const [activeTab, setActiveTab] = useState<string[]>(tabs[0])

  return (
    <Wrapper>
      {/** tabs menu **/}
      <TabMenu>
        {tabs.map((tab: string[]) =>
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
      <TabList tabs={activeTab} />
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
