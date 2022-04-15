import React from 'react'

interface Props {
  title: string
  type?: "button" | "submit" | "reset" | undefined,
  onClick?: () => void
}

export const Button = ({title, onClick}: Props) => {
  return (
    <button onClick={onClick}>
      {title}
    </button>
  )
}
