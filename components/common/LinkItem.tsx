import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { withRouter } from 'next/router'

type ListItemProps = {
  theme: String,
  pathname: string,
  router: any
}

const LinkItem = (props: ListItemProps) => {
  const capitalize = (str) => {
    const s = getName(str)
    if (typeof s !== 'string') return ''
    return s.charAt(0).toUpperCase() + s.slice(1)
  }

  const getName = (s) => {
    return s.split('/')[2]
  }

  const { pathname, theme } = props

  return (
    <Link href={pathname}>
      {props.router.pathname === pathname
        ? <button className='flex items-center mt-5 h-8'>
          {theme === 'light' && (
            <div className='mr-5 flex items-center'>
              <Image alt='image' src='/icons/item-selected-blue.svg' width={3} height={32} />
            </div>
          )}
          {theme === 'light' && (
            <div className='mr-5 flex items-center'>
              <Image alt='image' src={'/icons/' + getName(pathname) + '-blue.svg'} width={24} height={24} />
            </div>
          )}
          {theme === 'dark' && (
            <div className='mr-5 flex items-center'>
              <Image alt='image' src='/icons/item-selected-white.svg' width={3} height={32} />
            </div>
          )}
          {theme === 'dark' && (
            <div className='mr-5 flex items-center'>
              <Image alt='image' src={'/icons/' + getName(pathname) + '-white.svg'} width={24} height={24} />
            </div>
          )}
          <div className='font-semibold text-sm text-almost-white-light-blue'>
            {capitalize(pathname)}
          </div>
        </button>
        : <button className='flex items-center mt-5 h-8'>
          <div className='w-6'></div>
          <div className='mr-5 flex items-center'>
            <Image alt='image' src={'/icons/' + getName(pathname) + '-gray.svg'} width={24} height={24} />
          </div>
          <div className='font-semibold text-sm text-gray-39'>{capitalize(pathname)}</div>
        </button>
      }
    </Link>
  )
}

export default withRouter(LinkItem)
