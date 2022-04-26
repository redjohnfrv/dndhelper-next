import React from 'react'
import styled from 'styled-components'

interface Props {
  value: string
  onChangeHandler: (value: string) => void
  placeholder: string
}

export const Input = ({value, onChangeHandler, placeholder}: Props) => {
  return (
    <Wrapper>
      <input
        placeholder={placeholder}
        type="text"
        defaultValue={value}
        onChange={(e) =>
          onChangeHandler(e.target.value)}
      />
    </Wrapper>
  )
}

const Wrapper = styled.div``
