import React, {useEffect, useState} from 'react'
import styled from 'styled-components'

//** utils
import {size, tabs} from '../../../constants'
import {getModules} from '../../../api/modules'

//** components
import {TabList} from './TabList'
import {CreateModule} from '../CreateModule/CreateModule'
import { getTabList } from '../../../helpers'
import {useSwitcher} from '../../../hooks/useSwitcher'

interface Props {
  advId: number
}

export const Tabs = ({advId}: Props) => {
  const [activeTab, setActiveTab] = useState<string>(tabs[0])
  const [modules, setModules] = useState([])
  const modulesLoaded = useSwitcher()

  useEffect(() => {
    if (modules.length < 1)
      getModules().then(res => setModules(res))
  }, [])

  useEffect(() => {
    getModules().then(res => {
      setModules(res)
      modulesLoaded.on()
    })
  }, [modules.length])

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

      {/** modules tab **/}
      {activeTab === tabs[0] &&
        <>
          {modulesLoaded.isOn
            ? <TabList tabs={getTabList(modules, advId)} />
            : <div>загружаем модули</div>
          }
          <CreateModule advId={advId} />
        </>
      }
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
