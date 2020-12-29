/* eslint-disable react/display-name */
import React from 'react'
import Image from 'next/image'
import dynamic from 'next/dynamic'
import { Skeleton } from 'antd'

import { Layout } from '../../components'

const Timelines = dynamic(() =>
  import('../../components').then((mod) => mod.Timelines),
{ loading: () => <Skeleton /> }
)

export default function Activity () {
  const [selectedTab, setSelectedTab] = React.useState(1)

  const getTitle = () => {
    switch (selectedTab) {
      case 1:
        return 'Last Activity'
      case 2:
        return "Someone's activity"
      case 3:
        return "Someone's assignments"
      case 4:
        return 'To-docs-added & completed'
      case 5:
        return 'Overdue to-docs'
      case 6:
        return 'Upcoming dates'
      default:
        return ''
    }
  }
  return (
    <Layout>
      <div className="p-10 max-sm:p-2 max-sm:py-4 flex items-start flex-col w-full">
        <div className="text-title text-2xl max-sm:text-lg font-semibold mb-5">{getTitle()}</div>
        <div className="flex items-center justify-between w-full mb-5 max-sm:hidden">
          <button className={'flex items-center py-2 px-3 rounded-xl ' + (selectedTab === 1 ? 'bg-white-almost-black' : '')} onClick={() => setSelectedTab(1)}>
            <Image alt="image" src="/icons/activity-yellow.svg" width={24} height={24}/>
            <div className={'text-sm font-medium ml-3 ' + (selectedTab === 1 ? 'text-almost-white-500' : 'text-gray45')}>Last activity</div>
          </button>
          <button className={'flex items-center py-2 px-3 rounded-xl ' + (selectedTab === 2 ? 'bg-white-almost-black' : '')} onClick={() => setSelectedTab(2)}>
            <Image alt="image" src="/icons/person.svg" width={24} height={24}/>
            <div className={'text-sm font-medium ml-3 ' + (selectedTab === 2 ? 'text-almost-white-500' : 'text-gray45')}>Someone activity</div>
          </button>
          <button className={'flex items-center py-2 px-3 rounded-xl ' + (selectedTab === 3 ? 'bg-white-almost-black' : '')} onClick={() => setSelectedTab(3)}>
            <Image alt="image" src="/icons/calendar.svg" width={24} height={24}/>
            <div className={'text-sm font-medium ml-3 ' + (selectedTab === 3 ? 'text-almost-white-500' : 'text-gray45')}>Someone assignments</div>
          </button>
          <button className={'flex items-center py-2 px-3 rounded-xl ' + (selectedTab === 4 ? 'bg-white-almost-black' : '')} onClick={() => setSelectedTab(4)}>
            <Image alt="image" src="/icons/projects-yellow.svg" width={24} height={24}/>
            <div className={'text-sm font-medium ml-3 ' + (selectedTab === 4 ? 'text-almost-white-500' : 'text-gray45')}>To-docs-added & completed</div>
          </button>
          <button className={'flex items-center py-2 px-3 rounded-xl ' + (selectedTab === 5 ? 'bg-white-almost-black' : '')} onClick={() => setSelectedTab(5)}>
            <Image alt="image" src="/icons/alarm.svg" width={24} height={24}/>
            <div className={'text-sm font-medium ml-3 ' + (selectedTab === 5 ? 'text-almost-white-500' : 'text-gray45')}>Overdue to-docs</div>
          </button>
          <button className={'flex items-center py-2 px-3 rounded-xl ' + (selectedTab === 6 ? 'bg-white-almost-black' : '')} onClick={() => setSelectedTab(6)}>
            <Image alt="image" src="/icons/calendar-green.svg" width={24} height={24}/>
            <div className={'text-sm font-medium ml-3 ' + (selectedTab === 6 ? 'text-almost-white-500' : 'text-gray45')}>Upcoming dates</div>
          </button>
        </div>
        <Timelines />
      </div>
    </Layout>
  )
}
