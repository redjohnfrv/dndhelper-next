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
    <Wrapper size={size}>
      <Image src={image || images.nophoto} alt={alt} />
    </Wrapper>
  )
}

const Wrapper = styled.div<{size: 'normal' | 'large' | undefined}>`
  ${size => size.size === 'normal'
    ? {
        width: '120px',
        height: '140px',
      }
    : {
        width: '240px',
        height: '280px',
      }  
  }
  
  flex-shrink: 0;
  
  & img {
    width: 100%;
    height: auto;
  }
`
