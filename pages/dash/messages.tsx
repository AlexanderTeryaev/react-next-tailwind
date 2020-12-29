/* eslint-disable react/react-in-jsx-scope */
/* eslint-disable react/display-name */

import Image from 'next/image'
import { Input, Skeleton } from 'antd'
import dynamic from 'next/dynamic'

import { Layout } from '../../components'

const MessageContent = dynamic(() =>
  import('../../components').then((mod) => mod.MessageContent),
{ loading: () => <Skeleton /> }
)

const ContactList = dynamic(() =>
  import('../../components').then((mod) => mod.ContactList),
{ loading: () => <Skeleton /> }
)

export default function Messages () {
  return (
    <Layout>
      <div className='flex w-full content-h'>
        <ContactList />
        <div className="flex flex-col w-full bg-white-almost-black pt-5 flex-1 overflow-auto">
          <div className="flex items-center w-full justify-between mb-3 px-5">
            <div className='flex items-center'>
              <div className='relative mr-2'>
                <div className='absolute top-0 right-min4 bg-green w-2 h-2 rounded-xl'></div>
                <Image alt='profile' src='/icons/_profile.svg' width={32} height={32} className='rounded-full'/>
              </div>
              <div className="text-title font-semibold text-xl max-sm:text-sm mr-2">
                Avian Rizky
                <div className="text-sm text-gray45 max-3xl:hidden max-sm:block">Online</div>
              </div>
              <div className="text-sm text-gray45 px-2 border-l max-sm:border-none border-solid border-b-gray max-sm:hidden">Online</div>
            </div>
            <div className="flex items-center">
              <button><Image alt='image' src="/icons/video-call.svg" width={24} height={24}/></button>
              <button className="mx-5"><Image alt='image' src="/icons/phone-call.svg" width={24} height={24}/></button>
              <button><Image alt='image' src="/icons/more-h.svg" width={24} height={24}/></button>
            </div>
          </div>
          <MessageContent />
          <div className="h-20 bg-almost-white-700 p-5 flex items-center relative">
            <Image alt='profile' src='/icons/_profile.svg' width={32} height={32} className='rounded-full'/>
            <Input placeholder="Write messages down here.." className="text-sm text-gray400 bg-white-almost-black ml-3"/>
            <div className="flex items-center absolute right-30">
              <button className='mr-3 flex items-center'>
                <Image alt='image' src='/icons/favoutire.svg' width={24} height={24}/>
              </button>
              <button className="flex items-center">
                <Image alt='image' src='/icons/attachment-md-gray.svg' width={24} height={24}/>
              </button>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  )
}
