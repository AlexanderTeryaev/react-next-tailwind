import React from 'react'
import { connect } from 'react-redux'
import { updateProject } from '@actions/project'
import { DragDropContext, Droppable } from 'react-beautiful-dnd'
import dynamic from 'next/dynamic'
import { Skeleton } from 'antd'

type PLKProps = {
  viewMode: string,
  project: any
}

const DroppableContent = dynamic(() =>
  import('../../components').then((mod) => mod.DroppableContent, e => null as never),
{ loading: function loadSkeleton () { return <Skeleton /> } }
)

// a little function to help us with reordering the result
const reorder = (list, startIndex, endIndex) => {
  const result = Array.from(list)
  const [removed] = result.splice(startIndex, 1)
  result.splice(endIndex, 0, removed)

  return result
}

const move = (source, destination, droppableSource, droppableDestination) => {
  const sourceClone = Array.from(source)
  const destClone = Array.from(destination)
  const [removed] = sourceClone.splice(droppableSource.index, 1)
  destClone.splice(droppableDestination.index, 0, removed)

  const result = {}
  result[droppableSource.droppableId] = sourceClone
  result[droppableDestination.droppableId] = destClone
  const changedItem = 'changedItem'
  result[changedItem] = removed
  return result
}

const update = async (destination, changedItem) => {
  changedItem.dueDate = changedItem.due_date
  changedItem.isPrivate = changedItem.private
  changedItem.teamId = changedItem.team_id
  switch (destination) {
    case 'droppable1':
      changedItem.status = 1
      break
    case 'droppable2':
      changedItem.status = 2
      break
    case 'droppable3':
      changedItem.status = 3
      break
    default:
  }
  await updateProject(changedItem)
}
const ProListKanban = (props: PLKProps) => {
  const { viewMode, project } = props
  const [pendingList, setPendingList] = React.useState(project.filter(item => (item.status === 1)) || [])
  const [runList, setRunList] = React.useState(project.filter(item => (item.status === 2)) || [])
  const [doneList, setDoneList] = React.useState(project.filter(item => (item.status === 3)) || [])

  const getList = id => {
    switch (id) {
      case 'droppable1':
        return pendingList
      case 'droppable2':
        return runList
      case 'droppable3':
        return doneList
      default:
        return []
    }
  }

  const onDragEnd = (result: any) => {
    const { source, destination } = result
    // dropped outside the list
    if (!destination) {
      return
    }

    if (source.droppableId === destination.droppableId) {
      let items = []
      items = reorder(
        getList(source.droppableId),
        source.index,
        destination.index
      )
      if (source.droppableId === 'droppable1') {
        setPendingList(items)
      } else if (source.droppableId === 'droppable2') {
        setRunList(items)
      } else if (source.droppableId === 'droppable3') {
        setDoneList(items)
      }
    } else {
      result = move(
        getList(source.droppableId),
        getList(destination.droppableId),
        source,
        destination
      )
      result.droppable1 ? setPendingList(result.droppable1) : setPendingList(pendingList)
      result.droppable2 ? setRunList(result.droppable2) : setRunList(runList)
      result.droppable3 ? setDoneList(result.droppable3) : setDoneList(doneList)

      update(destination.droppableId, result.changedItem)
    }
  }

  const onAdd = (type) => {
    switch (type) {
      case 'To-Do':
        setPendingList(['item' + (new Date()).getTime()].concat(pendingList))
        break
      case 'In-Progress':
        setRunList(['item' + (new Date()).getTime()].concat(runList))
        break
      case 'Done':
        setDoneList(['item' + (new Date()).getTime()].concat(doneList))
        break
      default:
        break
    }
  }

  return (
    <DragDropContext onDragEnd={onDragEnd}>
      <Droppable droppableId='droppable1'>
        {(provided, snapshot) => (
          <DroppableContent title="To-Do" provided={provided} snapshot={snapshot} viewMode={viewMode} data={pendingList} onAdd={() => onAdd('To-Do')} />
        )}
      </Droppable>
      <Droppable droppableId='droppable2'>
        {(provided, snapshot) => (
          <DroppableContent title="In-Progress" provided={provided} snapshot={snapshot} viewMode={viewMode} data={runList} onAdd={() => onAdd('In-Progress')} />
        )}
      </Droppable>
      <Droppable droppableId='droppable3'>
        {(provided, snapshot) => (
          <DroppableContent title="Done" provided={provided} snapshot={snapshot} viewMode={viewMode} data={doneList} onAdd={() => onAdd('Done')} />
        )}
      </Droppable>
    </DragDropContext>
  )
}

const mapStateToProps = ({ project }) => {
  return {
    project
  }
}

export default connect(mapStateToProps, {})(ProListKanban)
