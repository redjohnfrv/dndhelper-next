import React from 'react'
import styled from 'styled-components'

//** components
import {Avatar, TitleH1} from '../../ui'
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

  return (
    <Wrapper>
      <AvatarWrapper>
        <Avatar image={avatar} alt="adventure avatar" size="large" />
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
