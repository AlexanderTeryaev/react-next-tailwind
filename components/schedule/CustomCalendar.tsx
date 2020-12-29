import React from 'react'
import { Calendar, Badge } from 'antd'

const CustomCalendar = props => {
  const getListData = (value) => {
    let listData
    switch (value.date()) {
      case 8:
        listData = [
          { type: 'success', content: '' }
        ]
        break
      case 10:
        listData = [
          { type: 'error', content: '' }
        ]
        break
      case 15:
        listData = [
          { type: 'warning', content: '' }
        ]
        break
      default:
    }
    return listData || []
  }

  const dateCellRender = (value) => {
    const listData = getListData(value)
    return (
      <ul className="events">
        {listData.map(item => (
          <li key={item.content}>
            <Badge status={item.type} text={item.content} />
          </li>
        ))}
      </ul>
    )
  }

  const getMonthData = (value) => {
    if (value.month() === 8) {
      return 1394
    }
  }

  const monthCellRender = (value) => {
    const num = getMonthData(value)
    return num ? (<div className="notes-month"><section>{num}</section><span>Backlog number</span></div>) : null
  }

  const onPanelChange = (value, mode) => {
    console.log(value, mode)
  }

  return (
    <Calendar fullscreen={false} onPanelChange={(date, mode) => onPanelChange(date, mode)} dateCellRender={(date) => dateCellRender(date)} monthCellRender={(date) => monthCellRender(date)}/>
  )
}

export default CustomCalendar
