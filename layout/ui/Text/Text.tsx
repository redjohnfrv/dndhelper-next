import React, {ReactNode} from 'react'
import styled from 'styled-components'

interface Props {
  children: ReactNode
  size: string
}

export const Text = ({children: text, size}: Props) => {
  return (
    <Wrapper size={size}>
      {text}
    </Wrapper>
  )
}

const Wrapper = styled.span<{size: string}>`
  display: inline-block;
  font-size: ${size => size.size};
`
