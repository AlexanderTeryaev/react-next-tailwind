import React from 'react'
import Image from 'next/image'
import { Checkbox } from 'antd'

const ScheduleContent = props => {
  const [data] = React.useState([1, 2, 3, 4, 5])

  const onChange = (e) => {
    console.log(`checked = ${e.target.checked}`)
  }

  return (
    <div className='px-4 border-l max-sm:border-none border-b-gray border-solid'>
      {data.map((item, i) => (
        <div className='py-6 flex items-start border-b border-b-gray border-solid' key={i}>
          <div className='flex items-center mr-10'>
            <Image alt='image' src='/icons/schedule-gray.svg' width={24} height={24}/>
            <div className='font-medium text-base text-cal-date ml-3'>
              1 Apr, 2018
            </div>
          </div>
          <div>
            <div className='flex items-center'>
              <Checkbox onChange={e => onChange(e)} className='mr-1'>
                <span className='text-secondary-black-200 text-base'>Kick off Project</span>
              </Checkbox>
              <Image alt='profile' src='/icons/_profile.svg' width={20} height={20} className='rounded-full'/>
            </div>
            <div className='text-sm text-gray400 ml-6'>Completed Apr 20</div>
            <div className='text-sm text-gray400 ml-6'>
              Circle Dashboard, Stats, and UI Kit
            </div>
          </div>
        </div>
      ))}
      <div className='flex items-center justify-center w-full py-10'>
        <button className='text-sm text-blue-light-blue'>
          Show More Schedule
        </button>
      </div>
    </div>
  )
}

export default ScheduleContent
