/* eslint-disable react/react-in-jsx-scope */
/* eslint-disable react/display-name */
import dynamic from 'next/dynamic'
import { Skeleton } from 'antd'
import { Layout } from '../../components'

const SelectBox = dynamic(() =>
  import('../../components').then((mod) => mod.SelectBox, e => null as never),
{ loading: () => <Skeleton /> }
)

const CustomCalendar = dynamic(() =>
  import('../../components').then((mod) => mod.CustomCalendar, e => null as never),
{ loading: () => <Skeleton /> }
)

const ScheduleContent = dynamic(() =>
  import('../../components').then((mod) => mod.ScheduleContent, e => null as never),
{ loading: () => <Skeleton /> }
)

export default function Schedule () {
  return (
    <Layout>
      <div className='p-10 max-sm:p-0 max-sm:py-4 flex items-start flex-col w-full'>
        <div className='flex items-center'>
          <div className='text-title text-2xl font-semibold mr-8 max-sm:hidden'>
            Schedule
          </div>
          <div className='flex items-center mt-1 max-sm:pl-4'>
            <div className='text-base max-sm:text-base text-gray400'>Show: </div>
            <div className='ml-2 w-36'>
              <SelectBox
                className=""
                value='All Schedule'
                size={'large'}
                options={[{ name: 'All Schedule' }]}
                nameField='name'
                valueField='name'
                placeholder="Select schedule"
                onSelect={() => console.log('selected')}
              />
            </div>
          </div>
        </div>
        <div className="w-full">
          <div className='grid grid-cols-2 max-sm:grid-cols-1 max-sm:gap-3 w-full bg-white-almost-black rounded-2xl mt-8'>
            <div className='p-4 max-sm:p-0 max-sm:border-b max-sm:border-b-gray max-sm:border-solid'>
              <CustomCalendar />
            </div>
            <ScheduleContent />
          </div>
        </div>
      </div>
    </Layout>
  )
}
