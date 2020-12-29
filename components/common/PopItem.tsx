import Image from 'next/image'

type PopItemProps = {
  onClose: any
}

export default function PopItem (props: PopItemProps) {
  return (
    <div className="bg-white-popup z-10 w-52 absolute top-32 right-0 box-shadow-popup border border-b-gray rounded-lg p-4">
      <div className="flex items-center justify-between w-full mb-4">
        <div className="text-sm font-medium text-sub-title">Actions</div>
        <button onClick={props.onClose}><Image alt='image' src="/icons/close-gray.svg" width={16} height={16} /></button>
      </div>
      <button className="text-sm text-gray25 mb-2">Edit Team</button>
      <button className="text-sm text-gray25 mb-2">Add New Member</button>
      <button className="text-sm text-gray25 mb-2">Remove Current Member</button>
    </div>
  )
}
