import React, { useEffect } from 'react'
import { Switch } from 'antd'
import { TopBar, SideMenu } from '../../components'

type LayoutProps = {
  children: any;
}

export default function Layout (props: LayoutProps) {
  const [theme, setTheme] = React.useState(null)

  useEffect(() => {
    const oldTheme = localStorage.getItem('theme')
    if (oldTheme) {
      document.documentElement.dataset.theme = oldTheme
      setTheme(oldTheme)
    } else {
      setTheme('light')
      localStorage.setItem('theme', 'light')
      document.documentElement.dataset.theme = 'light'
    }
  })

  const toggleTheme = (value) => {
    if (value === false) {
      setTheme('light')
      document.documentElement.dataset.theme = 'light'
      localStorage.setItem('theme', 'light')
    } else {
      setTheme('dark')
      document.documentElement.dataset.theme = 'dark'
      localStorage.setItem('theme', 'dark')
    }
  }
  const { children } = props
  return (
    <div className={theme}>
      <div className="absolute bottom-32 left-8 z-10">
        {theme === 'dark' && <Switch defaultChecked onChange={(e) => toggleTheme(e)}/>}
        {theme === 'light' && <Switch onChange={(e) => toggleTheme(e)}/>}
      </div>
      <div className='flex flex-col h-screen'>
        <TopBar theme = {theme} />
        <div className='flex-1 h-full flex overflow-auto'>
          <SideMenu theme = {theme}/>
          <div className="flex-1 overflow-auto bg-background h-full">{children}</div>
        </div>
      </div>
    </div>
  )
}
