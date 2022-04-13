import React from 'react'
import styled from 'styled-components'

interface Props {
  id?: string
}

export const AdvContent = ({id}: Props) => {
  return (
    <Wrapper>
      Adventure {id}
    </Wrapper>
  )
}

const Wrapper = styled.div``
