import React, {ChangeEvent} from 'react'
import styled from 'styled-components'

//** utils
import {color} from '../../../constants'

interface Props {
  uploadImageHandler: (e: ChangeEvent<HTMLInputElement>) => void
}

export const UploadInput = ({uploadImageHandler}: Props) => {

  return (
    <Wrapper>
      <label htmlFor="upload">Change Avatar</label>
      <input
        id="upload"
        type="file"
        title="Upload your image"
        accept="image/*"
        onChange={(e) => uploadImageHandler(e)}
      />
    </Wrapper>
  )
}

const Wrapper = styled.div`
  position: relative;
  width: max-content;
  height: 36px;
  
  & input[type='file'] {
    color: transparent;
    opacity: 0;
    pointer-events: none;
  }
  
  & label {
    position: absolute;
    top: 0;
    left: 4px;
    width: 100%;
    height: 100%;
    line-height: 36px;
    text-align: left;
    border-radius: 4px;
    cursor: pointer;
    
    &:hover {
      color: ${color.lightGold};
    }
  }
`
