import Link from 'next/link'
import React from 'react'
import styled from 'styled-components'

//** utils
import {size} from '../../../constants'
import {ITag} from '../../../dto/module'

//** components
import {AddSvg} from '../Svg'

interface Props {
  tags: ITag[] | []
}

export const Tags = ({tags}: Props) => {

  return (
    <Wrapper>
      <AddButton>
        <AddSvg />
      </AddButton>
      {tags.map(tag => {
        return (
          <Link key={tag.id} href={tag.link || '#'}><a>
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
const AddButton = styled.div``
