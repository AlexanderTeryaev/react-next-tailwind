import * as React from 'react'

interface Props{
    className: string,
    onClick: React.MouseEventHandler<HTMLButtonElement>,
    children: React.ReactNode
}

export default function Button (props: Props) {
  return <button className={props.className} onClick={props.onClick}>{props.children}</button>
}
