import Link from 'next/link'
import React from 'react'
import styled from 'styled-components'

//** utils
import {color, size} from '../../../constants'
import {IContentTab} from '../../../dto/adventure'

interface Props {
  tabs: IContentTab[]
}

export const TabList = ({tabs}: Props) => {

  return (
    <Wrapper>
      {tabs.length > 0
        ? tabs.map((item: any) =>
          <ListItem key={item.id}>
            <Link href={item.link + '/' + item.id}>
              <a>{item.name}</a>
            </Link>
          </ListItem>
        )
        : <ListItem>No any items</ListItem>
      }
    </Wrapper>
  )
}

const Wrapper = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 24px;
  padding: 24px 0 0 0;
  margin-bottom: 96px;
  list-style: none;
`
const ListItem = styled.li`
  padding-left: 12px;
  font-size: ${size.normalText};
  
  & a:hover {
    color: ${color.lightGold};

    &:after {
      background: ${color.lightGold};
    }
  }
`
