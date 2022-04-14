import React from 'react'
import styled from 'styled-components'

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
  text-align: ${align => align.align || 'left'};
`
