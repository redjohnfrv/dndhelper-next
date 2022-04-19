import React from 'react'
import styled from 'styled-components'

//** utils
import {size} from '../../../constants'

interface Props {
  title: string
  type?: 'button' | 'submit' | 'reset' | undefined
  onClick?: () => void
  disable?: boolean
}

export const Button = ({title, onClick, type, disable = false}: Props) => {

  return (
    <Btn onClick={onClick} type={type} disable={disable}>
      {title}
    </Btn>
  )
}

const Btn = styled.button<{type: 'button' | 'submit' | 'reset' | undefined, disable: boolean}>`
  width: max-content;
  max-width: 200px;
  font-size: ${size.normalText};
  line-height: ${size.normalText};
  padding: 24px 12px;
  border: none;
  pointer-events: all;
  opacity: 1;

  ${disable => disable.disable && {
    opacity: '.5',
    pointerEvents: 'none'
  }}
`
