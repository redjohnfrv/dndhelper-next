import React from 'react'
import styled from 'styled-components'

//** utils
import {size} from '../../../constants'

interface Props {
  title: string
  type?: 'button' | 'submit' | 'reset' | undefined
  onClick?: () => void
  disable?: boolean
  small?: boolean
}

export const Button = ({
  title,
  onClick,
  type,
  disable = false,
  small = false
}: Props) => {

  return (
    <Btn
      onClick={onClick}
      type={type}
      disable={disable}
      small={small}
    >
      {title}
    </Btn>
  )
}

const Btn = styled.button<{
  type: 'button' | 'submit' | 'reset' | undefined, disable: boolean,
  small?: boolean
}>`
  width: 240px;
  font-size: ${size.normalText};
  line-height: ${size.normalText};
  padding: 16px 0;
  text-align: center;
  border: none;
  pointer-events: all;
  opacity: 1;
  
  ${small => small.small && {
    width: '120px',
    fontSize: size.smallText,
    lineHeight: size.smallText,
    padding: '12px 0',
  }}
  
  ${disable => disable.disable && {
    opacity: '.5',
    pointerEvents: 'none',
  }}
`
