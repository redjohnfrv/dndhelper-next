import React from 'react'
import styled from 'styled-components'

//** utils
import {color, size} from '../../../constants'

interface Props {
  onClick: () => void
}

export const Close = ({onClick}: Props) => {
  return (
    <Wrapper onClick={onClick}>
      +
    </Wrapper>
  )
}

const Wrapper = styled.div`
  font-size: ${size.normalText};
  font-weight: bold;
  color: ${color.danger};
  transform: rotate(45deg);
  cursor: pointer;
`
