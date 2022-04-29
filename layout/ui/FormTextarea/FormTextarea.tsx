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

export const FormTextarea = ({input, placeholder, label, disabled}: Props) => {
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

const Wrapper = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 24px;

  & textarea {
    width: 50%;
    height: 300px;
    padding: 4px 8px;
    font-size: ${size.normalText};
    line-height: ${size.normalText};
    background: ${color.white};
    border-radius: 6px;
    border: 2px solid ${color.lightGold};
  }
`
