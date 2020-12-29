import React from 'react'
import Image from 'next/image'

const ContactList = props => {
  const [data] = React.useState([1, 2, 3, 4, 5, 6, 7, 8, 9, 10])
  const [selected, setSelected] = React.useState(1)

  return (
    <div className='flex flex-col w-350 bg-white-almost-black ml-2 px-2 py-5 border-r border-solid border-b-gray max-sm:hidden overflow-auto'>
      <div className='w-334 flex items-center justify-between mb-3'>
        <div className='text-title text-2xl font-semibold mr-8 max-sm:hidden'>Messages</div>
        <button className='h-9 w-20 bg-blue-light-blue rounded-lg flex items-center px-3 py-2'>
          <Image alt='plus' src='/icons/plus-white.svg' width={18} height={18}/>
          <span className='ml-3 text-on-almostwhite font-semibold text-sm'>New</span>
        </button>
      </div>
      <div className='flex-1 overflow-auto pt-3'>
        {data.map(i => (
          <button className={'rounded-2xl p-4 flex items-center mb-2 w-full ' + (selected === i ? 'bg-blue' : '')}
            onClick={() => setSelected(i)}
            key={i}
          >
            <Image alt='profile' src='/icons/_profile.svg' width={40} height={40} className='rounded-full'/>
            <div className='ml-2 flex-1'>
              <div className='flex items-center justify-between'>
                <div className={'text-sm font-semibold ' + (selected === i ? 'text-white' : 'text-title')}>
                  Avian Rizky
                </div>
                <div className={'text-xs ' + (selected === i ? 'text-white' : 'text-gray400')}>
                  09:30
                </div>
              </div>
              <div className={'text-sm text-ellipsis text-left ' + (selected === i ? 'text-white' : 'text-gray400')}>
                Hi, can you play fusal this weekend?
              </div>
            </div>
          </button>
        ))}
      </div>
    </div>
  )
}

export default ContactList
