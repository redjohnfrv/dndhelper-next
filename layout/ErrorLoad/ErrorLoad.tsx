import React, {ReactNode} from 'react'
import styled from 'styled-components'

//** utils
import {color, size} from '../../constants'

//** components
import {Text} from '../ui'

interface Props {
  children: ReactNode
}

export const ErrorLoad = ({children: error}: Props) => {
  return (
    <Wrapper>
      <Text size={size.normalText} color={color.black}>
        LOADING ERROR: {error} :(
      </Text>
    </Wrapper>
  )
}

const Wrapper = styled.div``
