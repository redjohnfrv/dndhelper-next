import React from 'react'
import styled from 'styled-components'

//** utils
import {color, size} from '../../../constants'

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

const Wrapper = styled.div`
  width: 100%;
  padding: 24px 0;
  
  & textarea {
    width: 100%;
    min-height: 20rem;
    margin: 0;
    padding: 0 0 0 2px;
    font-size: ${size.normalText};
    background: ${color.edit};
    border: none;
  }
`
