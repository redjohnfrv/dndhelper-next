import React from 'react'
import styled from 'styled-components'

//** utils
import {size, theme} from '../../constants'
import {Telegram, Vkontakte} from '../ui/Svg'

export const Footer = () => {
  return (
    <Wrapper>
      <Signature>
        Developed by <span>R</span>
      </Signature>
      <Icons>
        <Vkontakte />
        <Telegram />
      </Icons>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 96px;
  min-width: 1200px;
  padding: 48px 0 0 0;
`
const Signature = styled.span`
  display: flex;
  align-items: baseline;
  gap: 12px;
  font-size: ${size.normalText};
  
  & span {
    font-size: ${size.largeText};
  }
`
const Icons = styled.div`
  display: flex;
  justify-content: flex-end;
  gap: 12px;
  
  & svg {
    width: 36px;
    height: 36px;
    fill: ${theme.text};
  }
`
