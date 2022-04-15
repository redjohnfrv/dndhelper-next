import React from 'react'
import styled from 'styled-components'
import {FieldRenderProps} from 'react-final-form'

interface Props extends FieldRenderProps<string> {
  placeholder?: string
  label?: string
  disabled?: boolean
}

export const Textarea = ({input, placeholder, label, disabled}: Props) => {
  return (
    <Wrapper>
      {label && <label>{label}</label>}
      <textarea
        {...input}
        disabled={disabled}
        placeholder={placeholder}
      />
    </Wrapper>
  )
}

const Wrapper = styled.div``
