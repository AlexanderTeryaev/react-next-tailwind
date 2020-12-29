import React from 'react'
import { withRouter } from 'next/router'
import Image from 'next/image'

type TobBarProps = {
  theme: String,
  router: any
}

function getHeaderName (props: TobBarProps) {
  const hearderTitle = props.router.pathname.split('/')[2]
  return hearderTitle.charAt(0).toUpperCase() + hearderTitle.slice(1)
}

const TopBar = (props: TobBarProps) => {
  const { theme } = props
  return (
    <div className="w-full">
      <div className={'flex items-center w-full h-18 p-6 max-sm:hidden sm:inline-block ' + (theme === 'dark' ? 'box-shadow-gray-200' : 'box-shadow-gray-100')}>
        <div className="flex-1">
          {/* <Image alt='logo' src='/images/logo-teamlead.png' width={150} height={37} /> */}
          <h1 className="font-sans text-xl font-bold tracking-wide">Teamlead</h1>
        </div>
        <div className="flex items-center">
          <div className="relative">
            <div className="absolute top-8 left-8">
              <Image alt="search" src="/icons/search-gray.svg" width={21} height={21}/>
            </div>
            <input placeholder="Find" className={'h-11 w-24 rounded-lg font-semibold text-sm pl-10 pr-3 py-2 mr-5 ' + (theme === 'dark' ? 'input-search-bl' : 'input-search-lg')}/>
          </div>
          <button className="h-11 bg-blue rounded-lg flex items-center px-3 py-2">
            <Image alt='plus' width={18} height={18} src='/icons/plus-white.svg'/>
            <span className="text-on-almostwhite font-semibold text-sm ml-3">New</span>
          </button>
          <div className="relative mx-6">
            <div className="absolute top-min8 right-min4 bg-red w-3 h-3 rounded-xl"></div>
            <Image alt='notification' src="/icons/notification-gray.svg" width={19} height={21}/>
          </div>
          <Image alt='profile' src="/icons/_profile.svg" width={32} height={32} className="rounded-full"/>
        </div>
      </div>
      <div className={'w-full h-15 p-5 max-3xl:hidden max-sm:inline-block ' + (theme === 'dark' ? 'box-shadow-gray-200' : 'box-shadow-gray-100')}>
        <div className="flex">
          <div className="flex-1 flex items-center">
            <Image alt='Burger' src='/icons/Burger.svg' width={24} height={24}/>
            <span className="font-semibold text-lg ml-5 text-on-title">{getHeaderName(props)}</span>
          </div>
          <div className="flex items-center">
            <div className="mr-4 items-cener flex"><Image alt="search" src="/icons/search-gray.svg" width={21} height={21} /></div>
            <Image alt='profile' src="/icons/_profile.svg" width={32} height={32} className="rounded-full"/>
          </div>
        </div>
      </div>
    </div>
  )
}

export default withRouter(TopBar)
