import React, {useEffect, useState} from 'react'
import styled from 'styled-components'

//** utils
import {color, size, tabs} from '../../../constants'
import {modulesActions} from '../../../redux/modules'
import {getTabList} from '../../../helpers'
import {useAppDispatch, useSwitcher} from '../../../hooks'

//** components
import {TabList} from './TabList'
import {Loader} from '../../ui'
import {CreateModule} from '..'

interface Props {
  advId: number;
}

export const Tabs = ({advId}: Props) => {
  const [activeTab, setActiveTab] = useState<string>(tabs[0])
  const [modules, setModules] = useState([])
  const modulesLoaded = useSwitcher()
  const dispatch = useAppDispatch()

  useEffect(() => {
    if (modules.length < 1)
      dispatch(modulesActions.getModules())
        .then(res => res.payload)
  }, [])

  useEffect(() => {
    dispatch(modulesActions.getModules())
      .then(res => {
      setModules(res.payload)
      modulesLoaded.on()
    })
  }, [modules.length])

  return (
    <Wrapper>
      {/** tabs menu **/}
      <TabMenu>
        {tabs.map((tab: string) => (
          <Tab
            key={tab[0]}
            onClick={() => setActiveTab(tab)}
            active={tab === activeTab}
          >
            {tab}
          </Tab>
        ))}
      </TabMenu>

      {/** modules tab **/}
      {activeTab === tabs[0] && (
        <>
          {modulesLoaded.isOn ? (
            <TabList tabs={getTabList(modules, advId)} />
          ) : (
            <Loader />
          )}
          <CreateModule advId={advId} />
        </>
      )}
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
const Tab =
  styled.span <
  {active: boolean} >
  `
  font-size: ${size.largeText};
  text-decoration: none;
  opacity: .6;
  cursor: pointer;

  ${(props) =>
    props.active && {
      color: color.lightGold,
      opacity: '1',
    }}
`
