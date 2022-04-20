import React from 'react'
import styled from 'styled-components'
import {size} from '../../../constants'

interface Props {
  tabs: string[]
}

export const TabList = ({tabs}: Props) => {
  return (
    <Wrapper>
      {tabs.map(item => <li key={item}>{item}</li>)}
    </Wrapper>
  )
}

const Wrapper = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 24px;
  padding: 24px 0 0 0;
  list-style: none;
  
  & li {
    font-size: ${size.normalText};
  }
`
