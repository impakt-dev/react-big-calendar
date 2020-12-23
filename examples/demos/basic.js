import moment from 'moment'
import React from 'react'
import { Calendar, Views, momentLocalizer } from 'react-big-calendar'
import events from '../events'

const allViews = Object.keys(Views).map(k => Views[k])

const localizer = momentLocalizer(moment)
const Basic = ({  }) => (
  <Calendar
    events={events}
    views={allViews}
    timeslots={2}
    showMultiDayTimes
    localizer={localizer}
    defaultView="week"
    components={{
      liveButton: null,
    }}
  />
)

export default Basic
