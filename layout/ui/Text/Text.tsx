import React, {ReactNode} from 'react'
import styled from 'styled-components'

interface Props {
  children: ReactNode
  size?: string
  color?: string
  display?: string
}

interface IStyles {
  size?: string
  color?: string
  display?: string
}

export const Text = ({
  children: text,
  size = '24px',
  color = '#0c0c0c',
  display = 'inline-block',
}: Props) => {

  const styles: IStyles = {
    size,
    color,
    display,
  }

  return (
    <Wrapper styles={styles}>
      {text}
    </Wrapper>
  )
}

const Wrapper = styled.pre<{styles: IStyles}>`
  ${props => props.styles &&
    {
      fontSize: `${props.styles.size};`, 
      color: `${props.styles.color};`,
      display: `${props.styles.display};`
    }
  }
  padding: 0 0 4px 0;
  white-space: pre-wrap;
`
