import React, {useState} from 'react'
import styled from 'styled-components'

//** utils
import {color, size} from '../../constants'
import {ITag} from '../../dto/module'
import {UseSwitcherType} from '../../hooks'

//** components
import Link from 'next/link'
import {AddSvg} from '../ui/Svg'
import {Close, Popup} from '../ui'
import {CreateTag} from '..'

interface Props {
  tags: ITag[] | []
  addTag: (tag: ITag) => void
  removeTag: (tag: ITag) => void
  showPopup: UseSwitcherType
  unsaved: UseSwitcherType
}

export const Tags = ({
  tags = [],
  addTag,
  removeTag,
  showPopup,
  unsaved
}: Props) => {
  const [link, setLink] = useState<string>('')
  const [tagName, setTagName] = useState<string>('')

  return (
    <Wrapper>
      <AddButton onClick={() => {
        unsaved.on()
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
              <Close onClick={() => {
                  unsaved.on()
                  removeTag(tag)
                }}
              />
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
              addTag,
              closeHandler: showPopup,
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
`
const AddButton = styled.div`
  display: flex;
  gap: 12px;
  align-items: flex-end;
  cursor: pointer;

  & svg {
    fill: ${color.gold};
  }

  &:hover {
    & svg {
      fill: ${color.lightGold};
    }
    & span {
      color: ${color.lightGold};
    }
  }
`
const EditTip = styled.span`
  font-size: ${size.smallText};
  font-style: italic;
`
const TagsWrapper = styled.div`
  display: flex;
  gap: 12px;

  & a {
    font-size: ${size.normalText};
    color: ${color.blue};
    
    &:hover {
      &:after {
        background: ${color.blue};
      }
    }
  }
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
