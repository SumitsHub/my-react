import React from 'react'
type ButtonProps = {
    handleClick: (event: React.MouseEvent<HTMLButtonElement>) => void
}

function Button(props: ButtonProps) {
  return (
    <button onClick={props.handleClick}>Click</button>
  )
}

export default Button