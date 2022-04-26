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
  addTag: (tag: ITag) => void
}

export const Tags = ({tags, addTag}: Props) => {

  return (
    <Wrapper>
      <AddButton
        onClick={() => addTag({id: 999, name: 'super tag', link: '/modules/999'})}
      >
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
