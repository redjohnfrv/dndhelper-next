import React from 'react'
import styled from 'styled-components'

//** utils
import {images} from '../../../assets/images/images'

//** components
import Image from 'next/image'

interface Props {
  image: string | null
}

export const Avatar = ({image = ''}: Props) => {
  return (
    <Wrapper>
      <Image src={image || images.nophoto} alt="avatar adventure" />
    </Wrapper>
  )
}

const Wrapper = styled.div`
  width: 120px;
  height: 140px;
  
  & img {
    width: 100%;
    height: auto;
  }
`
