import React, {ChangeEvent} from 'react'
import styled from 'styled-components'
import { color } from '../../../constants'

//** utils
import {useAppDispatch} from '../../../hooks'
import {adventuresActions} from '../../../redux/adventures'

//** components
import {Avatar, TitleH1, UploadInput} from '../../ui'
import {Text} from '../../ui'

interface Props {
  props: {
    name: string
    avatar: string | null
    desc: string
    id: number
  }
}

export const Preview = ({props}: Props) => {
  const {name, avatar, desc, id} = props
  const dispatch = useAppDispatch()

  /** set adventure avatar **/
  const uploadImage = (e: ChangeEvent<HTMLInputElement>) => {
    const loadedFiles = e.target.files

    if (loadedFiles) {
      for (let i = 0; i < loadedFiles.length; i++) {
        dispatch(adventuresActions.setAdventureAvatar({
          id: String(id),
          avatar: `/images/${loadedFiles[i].name}`,
        }))
      }
    }
  }

  return (
    <Wrapper>
      <AvatarWrapper>
        <Avatar image={avatar} alt="adventure avatar" size="large" />
        <UploadInput uploadImageHandler={uploadImage} />
      </AvatarWrapper>
      <TitleH1 text={name} />
      <Text display="inline" color={color.white}>
        {desc}
      </Text>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  min-height: 288px;
  width: 100%;
  
  & h1 {
    margin-bottom: 48px;
  }
`
const AvatarWrapper = styled.div`
  float: right;
`
