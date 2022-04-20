import React from 'react'
import styled from 'styled-components'

//** utils
import {size} from '../../../constants'

interface Props {
  tabs: unknown[]
}

export const TabList = ({tabs}: Props) => {

  return (
    <Wrapper>
      {tabs.map((item: any) => <li key={item}>{item}</li>)}
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
