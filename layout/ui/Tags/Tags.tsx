import Link from 'next/link'
import React from 'react'
import styled from 'styled-components'

//** components
import {AddSvg} from '../Svg'
import {size} from '../../../constants'

interface Props {
  tags: [
    {
      id: number
      name: string
      link: string
    }
  ] | []
}

export const Tags = ({tags}: Props) => {
  return (
    <Wrapper>
      <AddSvg />
      {tags.map(tag => {
        return (
          <Link key={tag.id} href={tag.link}><a>
            {tag.name}
          </a></Link>
        )
      })}
    </Wrapper>
  )
}

const Wrapper = styled.nav`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: 12px;
  
  & a {
    font-size: ${size.normalText};
  }
`
