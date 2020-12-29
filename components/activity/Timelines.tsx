import React from 'react'
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component'
import 'react-vertical-timeline-component/style.min.css'
import Image from 'next/image'

export default function Timelines () {
  const [data] = React.useState([1, 2])

  return (
    <div className='bg-white-almost-black w-full rounded-2xl'>
    <VerticalTimeline>
      {data.map((i) => (
        <VerticalTimelineElement
          key={i}
          className='vertical-timeline-element--work'
          contentStyle={{
            background: 'var(--color-white-popup)',
            border: '1px solid var(--color-b-gray)',
            borderRadius: '20px'
          }}
          contentArrowStyle={{
            height: '1px',
            width: '13.5%',
            background: 'var(--color-b-gray)'
          }}
          date='Today'
          iconStyle={{ background: 'var(--color-b-gray)' }}
        >
          <div className='flex items-center justify-between w-full mb-4'>
            <div className='text-gray400 text-sm'>
              Square new logo design
            </div>
            <div className='text-xs text-xs-gray'>1:54pm</div>
          </div>
          <div className='flex items-start'>
            <Image alt='profile' src='/icons/_profile.svg' width={40} height={40} className='rounded-full'/>
            <div className='ml-3'>
              <div className='text-base font-medium text-sub-title'>
                Sam Tin uploaded a new photo
              </div>
              <div className='text-base font-medium text-blue'>
                Header illustration #Exploraion
              </div>
              <div className='flex justify-between mt-3'>
                <Image alt='profile' src='/icons/_image-lg1.svg' width={208} height={144} className='object-cover'/>
              </div>
            </div>
          </div>
        </VerticalTimelineElement>
      ))}
    </VerticalTimeline>
  </div>
  )
}
