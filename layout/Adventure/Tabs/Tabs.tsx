import React, {useState} from 'react'
import styled from 'styled-components'

//** utils
import {size, tabs} from '../../../constants'

export const Tabs = () => {
  const [activeTab, setActiveTab] = useState('modules')

  return (
    <Wrapper>
      {tabs.map((tab: string) =>
        <Tab
          key={tab}
          onClick={() => setActiveTab(tab)}
          active={tab === activeTab}
        >{tab}</Tab>
      )}
    </Wrapper>
  )
}

const Wrapper = styled.div`
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
