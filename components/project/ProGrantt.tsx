import React from 'react'
import { TimelineViews, TimelineMonth, ScheduleComponent, ViewsDirective, ViewDirective, ResourcesDirective, ResourceDirective, Inject } from '@syncfusion/ej2-react-schedule'
import { data, roomData } from '../data'
import '../../node_modules/@syncfusion/ej2-base/styles/material.css'

import '../../node_modules/@syncfusion/ej2-buttons/styles/material.css'
import '../../node_modules/@syncfusion/ej2-calendars/styles/material.css'
import '../../node_modules/@syncfusion/ej2-dropdowns/styles/material.css'
import '../../node_modules/@syncfusion/ej2-inputs/styles/material.css'
import '../../node_modules/@syncfusion/ej2-lists/styles/material.css'
import '../../node_modules/@syncfusion/ej2-navigations/styles/material.css'
import '../../node_modules/@syncfusion/ej2-popups/styles/material.css'
import '../../node_modules/@syncfusion/ej2-splitbuttons/styles/material.css'
import '../../node_modules/@syncfusion/ej2-react-schedule/styles/material.css'

const ProGrantt = props => {
  return (
    <div className='h-full'>
      <ScheduleComponent
        width='100%'
        currentView='TimelineWeek'
        selectedDate={new Date(2020, 1, 14)}
        eventSettings={{
          dataSource: data,
          fields: {
            id: 'Id',
            subject: { name: 'Subject' },
            isAllDay: { name: 'IsAllDay' },
            startTime: { name: 'StartTime' },
            endTime: { name: 'EndTime' }
          }
        }}
        height='100%'
        group={{ resources: ['Rooms'] }}
      >
        <ViewsDirective>
          <ViewDirective option='TimelineDay' />
          <ViewDirective option='TimelineWeek' />
          <ViewDirective option='TimelineMonth' />
        </ViewsDirective>
        <ResourcesDirective>
          <ResourceDirective
            field='RoomId'
            title='Room'
            name='Rooms'
            dataSource={roomData}
            textField='RoomText'
            idField='Id'
            colorField='RoomColor'
          ></ResourceDirective>
        </ResourcesDirective>
        <Inject services={[TimelineViews, TimelineMonth]} />
      </ScheduleComponent>
    </div>
  )
}

export default ProGrantt
