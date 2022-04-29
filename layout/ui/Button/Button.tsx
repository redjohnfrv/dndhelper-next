import React from 'react'
import styled from 'styled-components'

//** utils
import {color, size} from '../../../constants'

//** components
import {Loader} from '..'

interface Props {
  title: string
  type?: 'button' | 'submit' | 'reset' | undefined
  onClick?: any
  disable?: boolean
  small?: boolean
  loading?: boolean
  theme?: 'warning' | 'success' | undefined
}

export const Button = ({
  title,
  onClick,
  type,
  disable = false,
  small = false,
  loading = false,
  theme = undefined,
}: Props) => {

  return (
    <Btn
      onClick={onClick}
      type={type}
      disable={disable}
      small={small}
      theme={theme}
    >
      {loading
        ? <Loader btn={true} />
        : title
      }
    </Btn>
  )
}

const Btn = styled.button<{
  type: 'button' | 'submit' | 'reset' | undefined,
  disable?: boolean,
  small?: boolean
  theme?: 'warning' | 'success' | undefined,
}>`
  width: 200px;
  font-size: ${size.normalText};
  line-height: ${size.normalText};
  padding: 16px 0;
  text-align: center;
  color: ${props => props.theme === 'warning' ? color.lightGold : 'white'};
  background: ${props => props.theme === 'warning' ? color.danger : color.green};
  border: none;
  border-radius: 6px;
  pointer-events: all;
  cursor: pointer;
  opacity: .8;
  
  &:hover {
    opacity: 1;
  }
  
  &:active {
    box-shadow: -1px -1px 1px 0 black, 1px 1px 1px 0 black;
  }
  
  & svg {
    fill: ${color.lightGold};
  }

  ${props => props.small && {
    width: '120px',
    fontSize: size.smallText,
    lineHeight: size.smallText,
    padding: '12px 0',
  }}

  ${props => props.disable && {
    opacity: '.5',
    pointerEvents: 'none',
  }}
`
