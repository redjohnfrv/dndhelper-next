import React, {ChangeEvent, useState} from 'react'
import styled from 'styled-components'

//** utils
import {fileReaderResolver} from '../../../helpers'
import {setAdventureAvatar} from '../../../api/adventures'

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

  const [stateAvatar, setStateAvatar] = useState<string | null>(avatar)

  /** set adventure avatar **/
  const uploadImage = (e: ChangeEvent<HTMLInputElement>) => {
    const loadedFiles = e.target.files

    if (loadedFiles) {
      let fileList = []

      for (let i = 0; i < loadedFiles.length; i++) {
        fileList.push(fileReaderResolver(loadedFiles[i]))
      }

      Promise.all(fileList)
        .then((files) => {
          files.forEach((item: string) => {
            setStateAvatar(item)
            setAdventureAvatar(String(id), item)
          })
        })
    }
  }

  return (
    <Wrapper>
      <AvatarWrapper>
        <Avatar image={stateAvatar} alt="adventure avatar" size="large" />
        <UploadInput uploadImageHandler={uploadImage} />
      </AvatarWrapper>
      <TitleH1 text={name} />
      <Text display="inline">
        {desc}
      </Text>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  width: 100%;
  
  & h1 {
    margin-bottom: 48px;
  }
`
const AvatarWrapper = styled.div`
  float: right;
`
