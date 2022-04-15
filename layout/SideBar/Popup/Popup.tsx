import React from 'react'
import styled from 'styled-components'

//** utils
import {size} from '../../../constants'

//** components
import Link from 'next/link'

interface Props {
  items: {
    name: string
    link: string
  }[]
  toggle: boolean
}

export const Popup = ({items, toggle}: Props) => {

  return (
    <Wrapper show={toggle}>
      {items.map(item =>
        <Link key={item.name} href={item.link}>
          <a>{item.name}</a>
        </Link>
      )}
    </Wrapper>
  )
}

const Wrapper = styled.div<{show: boolean}>`
  display: ${show => show.show ? 'flex' : 'none'};
  flex-direction: column;
  gap: 8px;
  padding-top: 12px;
  padding-left: 8px;
  
  & a {
    font-size: ${size.smallText};
  }
`
