/* eslint-disable react/display-name */
import React from 'react'
import Image from 'next/image'
import dynamic from 'next/dynamic'
import { Skeleton } from 'antd'
import { connect } from 'react-redux'
import { Layout } from '../../components'
import AddItem from '@components/common/AddItem'

const SelectBox = dynamic(() =>
  import('../../components').then((mod) => mod.SelectBox, e => null as never),
{ loading: () => <Skeleton /> }
)

const ProListKanban = dynamic(() =>
  import('../../components').then((mod) => mod.ProListKanban, e => null as never),
{ loading: () => <Skeleton /> }
)

const ProGrantt = dynamic(() =>
  import('../../components').then((mod) => mod.ProGrantt, e => null as never),
{ loading: () => <Skeleton /> }
)
type Props = {
  project: any
}

function Projects ({ project }: Props) {
  const [viewMode, setViewMode] = React.useState('kanban')
  return (
    <Layout>
      <div className="p-10 max-sm:p-2 max-sm:py-4 flex items-start flex-col w-full">
        <div className="flex items-center justify-between w-full mb-4 max-sm:mb-1">
          <div className="flex items-center">
            <div className="text-title text-2xl font-semibold mr-8 max-sm:hidden">Projects</div>
            <div className="flex items-center mt-1 max-sm:pl-2">
              <div className="text-base max-sm:text-base text-gray400">Show: </div>
              <div className="ml-2 w-40">
                <SelectBox className="" placeholder="select project" value='All Projects' size={'middle'} options={[{ name: 'All Projects' }]} nameField='name' valueField='name' onSelect={() => console.log('selected')}/>
              </div>
            </div>
          </div>
          <div className="flex items-center max-sm:hidden sm:inline-block">
            <div className="flex items-center mr-4">
              <div className="text-sm text-gray400">Sort by: </div>
              <div className="ml-2 w-32">
                <SelectBox className="" placeholder="Due Date" value='Due Date' size={'middle'} options={[{ name: 'Due Date' }]} nameField='name' valueField='name' onSelect={() => console.log('selected')}/>
              </div>
            </div>
            <button className="bg-white-almost-black w-10 h-10 flex items-center justify-center rounded-lg"><Image alt='image' src="/icons/filter.svg" width={24} height={24}/></button>
            <div className="flex items-center ml-4">
              <button className={'w-10 h-10 flex items-center justify-center rounded-l-lg ' + (viewMode === 'kanban' ? 'bg-filter-btn' : 'bg-white-almost-black')} onClick={() => setViewMode('kanban')}>
                {viewMode === 'kanban' ? <Image alt='image' src="/icons/kanban-white.svg" width={24} height={24}/> : <Image alt='image' src="/icons/kanban.svg" width={24} height={24}/>}
              </button>
              <button className={'w-10 h-10 flex items-center justify-center border-r border-l border-b-gray ' + (viewMode === 'list' ? 'bg-filter-btn' : 'bg-white-almost-black')} onClick={() => setViewMode('list')}>
                {viewMode === 'list' ? <Image alt='image' src="/icons/list-white.svg" width={24} height={24}/> : <Image alt='image' src="/icons/list.svg" width={24} height={24}/>}
              </button>
              <button className={'w-10 h-10 flex items-center justify-center rounded-r-lg ' + (viewMode === 'grantt' ? 'bg-filter-btn' : 'bg-white-almost-black')} onClick={() => setViewMode('grantt')}>
                {viewMode === 'grantt' ? <Image alt='image' src="/icons/grantt-white.svg" width={24} height={24}/> : <Image alt='image' src="/icons/grantt.svg" width={24} height={24}/>}
              </button>
            </div>
          </div>
          <button className="max-3xl:hidden max-sm:inline-block bg-white-popup rounded-lg">
            <div className="flex items-center px-3 py-2">
              <Image alt='image' src="/icons/filter2.svg" width={24} height={24}/>
              <span className="text-sm text-almost-white-500 ml-2">Filter</span>
            </div>
          </button>
        </div>
        <AddItem text="Add Project" fn={() => console.log('project')}/>

        {(viewMode === 'kanban' || viewMode === 'list') && (project.length) && <div className={'grid gap-4 max-md:grid-cols-1 max-sm:gap-3 w-full ' + (viewMode === 'kanban' ? 'grid-cols-4 max-2xl:grid-cols-3 max-xl:grid-cols-2' : 'grid-cols-1')}>
          <ProListKanban/>
        </div>}
        { viewMode === 'grantt' &&
          <div className="h-full">
            <ProGrantt/>
          </div>
        }
      </div>
    </Layout>
  )
}

function mapStateToProps ({ project }) {
  return {
    project
  }
}

export default connect(mapStateToProps, {})(Projects)
