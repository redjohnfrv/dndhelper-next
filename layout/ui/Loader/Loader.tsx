import React from 'react'
import styled, {keyframes} from 'styled-components'

//** components
import {LoaderSvg} from '../Svg'

export const Loader = () => {
  return (
    <Wrapper>
      <LoaderSvg />
    </Wrapper>
  )
}

const loaderAnimation = keyframes` 
  from {transform: rotate(0deg);}
  to {transform: rotate(360deg);}
`
const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 200px;
  min-width: 200px;
  width: 100%;
  margin: 0 auto;
  
  & svg {
    width: 56px;
    height: 56px;
    animation: 1s ${loaderAnimation} infinite linear;
  }
`
