import Link from 'next/link'
import React, { useState } from 'react'
import styled from 'styled-components'
import { CreateTag } from '..'

//** utils
import {size} from '../../constants'
import {ITag} from '../../dto/module'
import {UseSwitcherType} from '../../hooks'

//** components
import {AddSvg} from '../ui/Svg'

interface Props {
  tags: ITag[] | []
  addTag: (tag: ITag) => void
  showPopup: UseSwitcherType
}

export const Tags = ({tags = [], addTag, showPopup}: Props) => {
  const [link, setLink] = useState<string>('')
  const [tagName, setTagName] = useState<string>('')

  return (
    <Wrapper>
      <AddButton onClick={() => showPopup.toggle()}>
        <AddSvg />
        <EditTip>Add tag</EditTip>
      </AddButton>

      {/** tags **/}
      {tags.map(tag => {
        return (
          <Link key={tag.name} href={tag.link || '#'}><a>
            {tag.name}
          </a></Link>
        )
      })}

      {showPopup.isOn &&
        <CreateTag
          name={tagName}
          link={link}
          handlers={{
            linkHandler: setLink,
            tagNameHandler: setTagName,
            addTag
          }}
        />
      }
    </Wrapper>
  )
}

const Wrapper = styled.nav`
  display: flex;
  flex-wrap: wrap;
  align-items: flex-start;
  gap: 12px;
  
  & a {
    font-size: ${size.normalText};
  }
`
const AddButton = styled.div`
  display: flex;
  gap: 12px;
  align-items: flex-end;
  cursor: pointer;
`
const EditTip = styled.span`
  font-size: ${size.smallText};
  font-style: italic;
`
