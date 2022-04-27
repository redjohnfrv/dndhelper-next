import Link from 'next/link'
import React, { useState } from 'react'
import styled from 'styled-components'
import { CreateTag } from '..'

//** utils
import {color, size} from '../../constants'
import {ITag} from '../../dto/module'
import {UseSwitcherType} from '../../hooks'
import { Popup } from '../ui'

//** components
import {AddSvg} from '../ui/Svg'

interface Props {
  tags: ITag[] | []
  addTag: (tag: ITag) => void
  removeTag: (tag: ITag) => void
  showPopup: UseSwitcherType
}

export const Tags = ({tags = [], addTag, removeTag, showPopup}: Props) => {
  const [link, setLink] = useState<string>('')
  const [tagName, setTagName] = useState<string>('')

  return (
    <Wrapper>
      <AddButton onClick={() => {
        showPopup.toggle()
        setLink('')
        setTagName('')
      }}>
        <AddSvg />
        <EditTip>Add tag</EditTip>
      </AddButton>

      {/** tags **/}
      <TagsWrapper>
        {tags.map(tag => {
          return (
            <TagWrapper key={tag.name}>
              <Delete onClick={() => removeTag(tag)}>+</Delete>
              <Link href={tag.link || '#'}><a>
                {tag.name}
              </a></Link>
            </TagWrapper>
          )
        })}
      </TagsWrapper>

      {showPopup.isOn &&
        <Popup>
          <CreateTag
            name={tagName}
            link={link}
            handlers={{
              linkHandler: setLink,
              tagNameHandler: setTagName,
              addTag
            }}
          />
        </Popup>
      }
    </Wrapper>
  )
}

const Wrapper = styled.nav`
  display: flex;
  flex-direction: column;
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
const TagsWrapper = styled.div`
  display: flex;
  gap: 12px;
`
const TagWrapper = styled.div`
  position: relative;
  display: flex;
  align-items: flex-start;
  gap: 6px;
  padding: 4px;

  & a {
    text-decoration: none;
  }
`
const Delete = styled.div`
  transform: rotate(45deg);
  color: ${color.danger};
  font-size: ${size.normalText};
  font-weight: bold;
  cursor: pointer;
`
