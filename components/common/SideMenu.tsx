import React from 'react'
import Image from 'next/image'
import { LinkItem, SelectBox } from '../../components'

type SideMenuProps = {
  theme: String
}

const SideMenu = (props: SideMenuProps) => {
  const paths = [
    '/dash/overview',
    '/dash/messages',
    '/dash/projects',
    '/dash/schedule',
    '/dash/activity'
  ]
  const { theme } = props

  return (
    <div className="flex flex-col">
      <div className={'flex-1 w-64 h-18 py-10 max-sm:hidden sm:inline-block ' + (theme === 'dark' ? 'box-shadow-gray-200' : 'box-shadow-gray-100')}>
        <div className="px-5">
          <SelectBox className="" placeholder="Select Team" value='TEAMS' size={'middle'} options={[{ name: 'TEAMS' }]} nameField='name' valueField='name' onSelect={() => console.log('selected')}/>
          <div className="flex items-center mt-4">
            <Image alt='image' src="/icons/_Iconspace.svg" width={24} height={24} className="rounded"/>
            <span className="font-medium ml-2 text-on-title">Iconspace Team</span>
          </div>
          <div className="flex items-center mt-4">
            <div className="mr-2"><Image alt='image' src="/icons/_Profile1.svg" width={32} height={32} className="rounded-full"/></div>
            <div className="mr-2"><Image alt='image' src="/icons/_Profile2.svg" width={32} height={32} className="rounded-full"/></div>
            <div className="mr-2"><Image alt='image' src="/icons/_Profile3.svg" width={32} height={32} className="rounded-full"/></div>
            <div className="mr-2"><Image alt='image' src="/icons/_Profile4.svg" width={32} height={32} className="rounded-full"/></div>
          </div>
          <button className="mt-4 text-light-blue text-xs font-medium text-left">
            + ADD NEW TEAM
          </button>
          <div className="w-full h-0.25 mt-8 bg-secondary-black-100"></div>
        </div>
        {paths.map(path =>
          <LinkItem theme={theme} pathname={path} key={path}/>
        )}
      </div>
    </div>
  )
}

export default SideMenu
