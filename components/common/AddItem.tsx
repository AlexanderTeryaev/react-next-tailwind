import * as React from 'react'
import Image from 'next/image'

type Props = {
    text: string,
    fn: React.MouseEventHandler<HTMLButtonElement>
}

export default function AddItem (props: Props) {
  return (
    <button className="flex items-center justify-center w-full my-4" onClick={props.fn}>
    <span className="h-10 w-10 rounded-full bg-white-almost-white flex items-center justify-center">
        <Image alt='image' src="/icons/plus-blue.svg" width={16} height={16}/>
    </span>
    <span className="text-base font-medium text-title ml-2">{props.text}</span>
  </button>
  )
}
