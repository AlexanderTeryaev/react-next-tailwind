import React, { useEffect } from 'react'
import { Progress } from 'antd'
import Image from 'next/image'
import { ModalForm } from '../../components'

type CardProProps = {
  viewMode: string,
  status: string,
  data:{
    title: string,
    name: string,
    id: number
  }
}

const CardPro = (props: CardProProps) => {
  const [showPop, setShowPop] = React.useState(false)
  const [isModalVisible, setIsModalVisible] = React.useState(false)
  const [percentage, setPercentage] = React.useState(60)
  useEffect(() => {
    if (props.status === 'done') {
      setPercentage(100)
    }
  })
  const closeModalForm = () => {
    setIsModalVisible(false)
  }

  const openModalForm = () => {
    setIsModalVisible(true)
  }

  const { status, viewMode } = props

  return (
    <div>
      <ModalForm isModalVisible={isModalVisible} onClose={() => closeModalForm()}></ModalForm>
      <div className={'relative rounded-2xl bg-white-almost-black p-5 ' + (viewMode === 'list' ? 'grid gap-4 grid-cols-4 max-sm:grid-cols-1' : '')}>
        <div>
          <div className="flex w-full items-start justify-between mb-1">
            <div className={'text-title font-semibold text-base max-sm:text-sm text-ellipsis ' + (status === 'done' ? 'line-through' : '')} onClick={() => openModalForm()}>
              {(props.data && props.data.title) || ''}
            </div>
            {viewMode === 'kanban' &&
              <button onClick={() => setShowPop(true)}><Image alt='image' src="/icons/more-h.svg" width={24} height={24}/></button>
            }
          </div>
          <div className={'text-base max-sm:text-base text-gray35 max-sm:mb-3 ' + (viewMode === 'kanban' ? 'mb-5' : '')} onClick={() => openModalForm()}>{(props.data && props.data.name) || ''} Team</div>
        </div>
        <div className={'flex mt-3 max-sm:mb-3 ' + (viewMode === 'list' ? 'items-start' : 'items-center mb-4')} onClick={() => openModalForm()}>
          <button className="flex items-center"><Image alt='image' src="/icons/attachment-gray.svg" width={16} height={16}/></button>
          <span className="ml-1 text-sm text-gray400">13</span>
          <div className={'flex ml-4 p-1 bg-b-gray rounded ' + (viewMode === 'list' ? 'items-start' : 'items-center')}>
            <Image alt="image" src="/icons/schedule-gray1.svg" width={16} height={16}/>
            <span className="text-sm text-gray34 ml-1">7 days left</span>
          </div>
        </div>
        <div className="mb-5 w-100" onClick={() => openModalForm()}>
          <div className="text-right w-full text-gray35 text-sm mb-1">{percentage}%</div>
          <Progress percent={percentage} />
        </div>
        <div className={'flex ' + (viewMode === 'list' ? 'items-start' : 'items-center')} onClick={() => openModalForm()}>
          <div className="mr-2 flex items-center"><Image alt='image' src="/icons/_Profile1.svg" width={32} height={32} className="rounded-full"/></div>
          <div className="mr-2 flex items-center"><Image alt='image' src="/icons/_Profile2.svg" width={32} height={32} className="rounded-full"/></div>
          <div className="mr-2 flex items-center"><Image alt='image' src="/icons/_Profile3.svg" width={32} height={32} className="rounded-full"/></div>
          <div className="mr-2 flex items-center"><Image alt='image' src="/icons/_Profile4.svg" width={32} height={32} className="rounded-full"/></div>
        </div>
        {viewMode === 'list' &&
          <button className="absolute top-16 right-8" onClick={() => setShowPop(true)}><Image alt='image' src="/icons/more-h.svg" width={24} height={24}/></button>
        }
          {showPop === true &&
            <div className="bg-white-popup z-10 w-64 absolute top-48 right-16 box-shadow-popup border border-b-gray rounded-lg p-4">
              <div className="flex items-center justify-between w-full mb-4">
                <div className="text-sm font-medium text-sub-title">Option</div>
                <button onClick={() => setShowPop(false)}><Image alt='image' src="/icons/close-gray.svg" width={16} height={16}/></button>
              </div>
              <div className="text-sm text-secondary-black-200 mb-1">Add New Projects…</div>
              <div className="text-xs text-gray400 mb-3">In this menu you can add new projects. It can make easlily you to make your projects more organize</div>
              <div className="text-sm text-secondary-black-200 mb-1">Import Project from Outside…</div>
              <div className="text-xs text-gray400 mb-3">In this menu you can add new projects. It can make easlily you to make your projects.</div>
              <div className="text-sm text-secondary-black-200 mb-1">Share Your Projects to…</div>
              <div className="text-xs text-gray400 mb-3">In this menu you can add new projects. It can make easlily you to make your projects.</div>
            </div>
          }
      </div>
    </div>
  )
}

export default CardPro
