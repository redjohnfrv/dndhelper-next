import React from 'react'
import styled from 'styled-components'
import {FieldRenderProps} from 'react-final-form'

//** utils
import {color, size} from '../../../constants'

interface Props extends FieldRenderProps<string> {
  placeholder?: string
  label?: string
  disabled?: boolean
}

export const FormInput = ({input, placeholder, label, disabled, meta}: Props) => {
  return (
    <Wrapper>
      {label && <label>{label}</label>}
      <input
        {...input}
        disabled={disabled}
        placeholder={placeholder}
      />
      {meta.error && meta.touched && <span>{meta.error}</span>}
    </Wrapper>
  )
}

const Wrapper = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 24px;
  
  & input {
    padding: 4px 8px;
    font-size: ${size.normalText};
    line-height: ${size.normalText};
  }
  
  & span {
    color: ${color.danger};
  }
`
