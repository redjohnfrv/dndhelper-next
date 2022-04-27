import React from 'react'
import styled from 'styled-components'
import {size} from '../../../constants'

interface Props {
  text: string
  align?: 'center' | 'right'
}

export const TitleH1 = ({text, align}: Props) => {
  return (
    <WrapperH1 align={align}>
      {text}
    </WrapperH1>
  )
}

const WrapperH1 = styled.h1<{align: 'center' | 'right' | undefined}>`
  width: 100%;
  font-size: 48px;
  text-align: ${props => props.align || 'left'};
`

export const TitleH2 = ({text, align}: Props) => {
  return (
    <WrapperH2 align={align}>
      {text}
    </WrapperH2>
  )
}

const WrapperH2 = styled.h2<{align: 'center' | 'right' | undefined}>`
  width: 100%;
  font-size: 32px;
  text-align: ${props => props.align || 'left'};
`

export const TitleH3 = ({text}: Props) => {
  return (
    <WrapperH3>
      {text}
    </WrapperH3>
  )
}

const WrapperH3 = styled.h3`
  width: max-content;
  font-size: ${size.normalText};
`
