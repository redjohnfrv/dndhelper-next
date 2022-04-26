import React from 'react'
import styled from 'styled-components'

interface Props {
  text: string
  onChangeHandler: (text: string) => void
}

export const Textarea = ({text = '', onChangeHandler}: Props) => {

  return (
    <Wrapper>
      <textarea
        defaultValue={text}
        onChange={(e) =>
          onChangeHandler(e.target.value)}
      />
    </Wrapper>
  )
}

const Wrapper = styled.div``
