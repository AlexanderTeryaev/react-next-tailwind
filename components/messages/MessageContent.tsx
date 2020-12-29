import React from 'react'
import Image from 'next/image'

const MessageContent = props => {
  return (
    <div className="px-5 flex-1 overflow-auto">
      <div className="relative my-8 px-5">
        <hr className="text-b-gray"/>
        <div className="w-full flex justify-center">
          <span className="font-semibold text-base absolute top-min14 px-3 bg-white-almost-black">Today</span>
        </div>
      </div>
      <div className="flex items-center mb-4 w-full">
        <div className="table w-8">
          <Image alt='profile' src='/icons/_profile.svg' width={32} height={32} className='rounded-full border border-solid border-b-gray z-10'/>
        </div>
        <div className="text-base -ml-2 text-secondary-black-200 px-5 py-4 border border-solid border-b-gray border-r-20 bg-white-popup">
          Hi, Can you send files about Header Illustration to me ?
          <div className="text-gray400 text-sm mt-1 max-3xl:hidden max-sm:block">08:00 PM</div>
        </div>
        <div className="text-gray400 text-sm ml-2 max-sm:hidden w-350">08:00 PM</div>
      </div>
      <div className="flex items-center mb-4 w-full">
        <div className="text-base ml-6 text-secondary-black-200 px-5 py-4 border border-solid border-b-gray border-r-20 bg-white-popup">
          You can send to my email bro? This is my email Avianrizky@gmail.co.id
          <div className="text-gray400 text-sm mt-1 max-3xl:hidden max-sm:block">08:00 PM</div>
        </div>
        <div className="text-gray400 text-sm ml-2 max-sm:hidden w-350">08:00 PM</div>
      </div>
      <div className="flex items-center justify-end mb-4 w-full">
        <div className="text-gray400 text-sm mr-2 max-sm:hidden">08:10 PM</div>
        <div className="text-base -mr-2 text-secondary-black-200 px-5 py-4 border border-solid border-b-gray border-r-20 bg-secondary-black-almost-white">
          Okay bro, Wait a min...
          <div className="text-gray400 text-sm mt-1 max-3xl:hidden max-sm:block">08:10 PM</div>
        </div>
        <div className="table w-8">
          <Image alt='profile' src='/icons/_profile.svg' width={32} height={32} className='rounded-full border border-solid border-b-gray z-10'/>
        </div>
      </div>
      <div className="flex items-center justify-end mb-4 w-full">
        <div className="text-gray400 text-sm mr-2 max-sm:hidden">08:20 PM</div>
        <div className="text-base mr-6 text-secondary-black-200 px-5 py-4 border border-solid border-b-gray border-r-20 bg-secondary-black-almost-white">
          I am still eat in angkringan. Maybe 15 minutes later I will send the files to you bro.
          <div className="text-gray400 text-sm mt-1 max-3xl:hidden max-sm:block">08:20 PM</div>
        </div>
      </div>
      <div className="flex items-center justify-end mb-4 w-full">
        <div className="text-gray400 text-sm mr-2 max-sm:hidden">08:25 PM</div>
        <div className="text-base mr-6 text-secondary-black-200 px-5 py-4 border border-solid border-b-gray border-r-20 bg-secondary-black-almost-white">
          Here you are bro. Please check it first
          <div className="text-gray400 text-sm mt-1 max-3xl:hidden max-sm:block">08:25 PM</div>
        </div>
      </div>
      <div className="flex items-center flex-wrap justify-end mb-4 w-full -mx-2">
        <div className="m-2 flex items-center"><Image alt='profile' src="/icons/_image-lg1.svg" width={240} height={192} className="object-cover"/></div>
        <div className="m-2 flex items-center"><Image alt='profile' src="/icons/_image-lg2.svg" width={240} height={192} className="object-cover"/></div>
      </div>
      <div className="flex items-start mb-4 w-full">
        <div className="table w-8">
        <Image alt='profile' src='/icons/_profile.svg' width={32} height={32} className='rounded-full border border-solid border-b-gray z-10'/>
        </div>
        <div className="text-base -ml-2 text-secondary-black-200 px-5 py-4 border border-solid border-b-gray border-r-20 bg-white-popup">
          Geo Vanny Minor revisi ini ya pak..
          - We would like to have Pageviews, click, conversation and total revenue up in the right corner of the graph. And maybe
          design them so the look more like buttons that we can turn on/off?
          - Latest clickes/conversations. Where you currently have the logo for merchant, we should instead have a logo that represent
          the referring trafic sources (ex. Google or Facebook)
          <div className="text-gray400 text-sm mt-1 max-3xl:hidden max-sm:block">09:00 PM</div>
        </div>
        <div className="text-gray400 text-sm ml-2 max-sm:hidden w-350">09:00 PM</div>
      </div>
    </div>
  )
}

export default MessageContent
