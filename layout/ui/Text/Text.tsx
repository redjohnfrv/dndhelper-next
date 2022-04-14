import React, {ReactNode} from 'react'
import styled from 'styled-components'

interface Props {
  children: ReactNode
  size?: string
  color?: string
}

interface IStyles {
  size?: string
  color?: string
}

export const Text = ({
  children: text,
  size = '24px',
  color = '#0c0c0c'
}: Props) => {

  const styles: IStyles = {
    size,
    color,
  }

  return (
    <Wrapper styles={styles}>
      {text}
    </Wrapper>
  )
}

const Wrapper = styled.span<{styles: IStyles}>`
  ${styles => styles.styles &&
    {
      fontSize: `${styles.styles.size};`, 
      color: `${styles.styles.color}`,
    }
  }
  display: inline-block;
`