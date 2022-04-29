import React from 'react'
import styled from 'styled-components'

//** utils
import {images} from '../../../assets/images/images'

//** components
import Image from 'next/image'

interface Props {
  image: string | null
  alt: string
  size?: 'normal' | 'large'
}

export const Avatar = ({image = '', alt, size = 'normal'}: Props) => {

  return (
    <Wrapper>
      <Image
        src={image || images.nophoto}
        alt={alt}
        width={size === 'normal' ? '140px' : '240px'}
        height={size === 'normal' ? '140px' : '240px'}
      />
    </Wrapper>
  )
}

const Wrapper = styled.div`
  flex-shrink: 0;
  
  & img {
    object-fit: cover;
    width: 100%;
    height: auto !important;
    border-radius: 6px;
  }
`
