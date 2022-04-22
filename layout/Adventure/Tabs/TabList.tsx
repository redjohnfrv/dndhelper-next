import Link from 'next/link'
import React from 'react'
import styled from 'styled-components'

//** utils
import {size} from '../../../constants'
import {IContentTab} from '../../../dto/adventure'

interface Props {
  tabs: IContentTab[]
}

export const TabList = ({tabs}: Props) => {

  return (
    <Wrapper>
      {tabs && tabs.map((item: any) =>
        <ListItem key={item.id}>
          <Link href={item.link + '/' + item.id}>
            <a>{item.name}</a>
          </Link>
        </ListItem>
      )}
    </Wrapper>
  )
}

const Wrapper = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 24px;
  padding: 24px 0 0 0;
  list-style: none;
`
const ListItem = styled.li`
  padding-left: 12px;
  font-size: ${size.normalText};
  text-decoration: underline;
`
