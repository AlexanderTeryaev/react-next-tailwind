import React from 'react'
import { Draggable } from 'react-beautiful-dnd'
import Image from 'next/image'
import { CardPro } from '../../components'

type DroppableContentProps = {
  viewMode: string;
  provided: any,
  snapshot: any,
  data: any,
  title: string,
  onAdd: any
}

const grid = 8

const getItemStyle = (isDragging, draggableStyle) => ({
  userSelect: 'none',
  margin: `${grid}px`,
  ...draggableStyle,
  background: '#FFFFFF',
  borderRadius: '20px'
})

const getListStyle = isDraggingOver => ({
  // background: isDraggingOver ? 'lightblue' : 'lightgrey',
  border: '1px solid #E2E2EA',
  borderRadius: '23px',
  height: 'fit-content'
})

const DroppableContent = (props: DroppableContentProps) => {
  const { viewMode, provided, snapshot, data, title } = props
  return (
    <div
      ref={provided.innerRef}
      style={getListStyle(snapshot.isDraggingOver)}
    >
      <div className='flex items-center justify-between w-full relative p-4'>
        <div className='text-base max-sm:text-sm font-semibold text-gray45'>{title}</div>
        <button>
          <Image alt='image' src='/icons/more-h.svg' width={24} height={24}/>
        </button>
      </div>
      {data.map((item, index) => (
        <Draggable key={item.created_on} draggableId={item.created_on} index={index}>
          {(provided, snapshot) => (
            <div
              ref={provided.innerRef}
              {...provided.draggableProps}
              {...provided.dragHandleProps}
              style={getItemStyle(
                snapshot.isDragging,
                provided.draggableProps.style
              )}
            >
              <CardPro viewMode={viewMode} status={'pending'} data={null}/>
            </div>
          )}
        </Draggable>
      ))}
      {provided.placeholder}
      {/* {viewMode === 'kanban' && (
        <button className='rounded-b-3xl border border-b-gray flex items-center justify-center p-2 mt-5 h-10 w-full' onClick={() => props.onAdd(title)}>
          <div className='flex items-center justify-center'>
            <Image alt='image' src='/icons/plus-gray.svg' width={18} height={18}/>
          </div>
        </button>
      )} */}
    </div>
  )
}
export default DroppableContent
