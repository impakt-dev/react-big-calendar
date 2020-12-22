import React from 'react'
import { Calendar, Views } from 'react-big-calendar'
import events from '../events'

const allViews = Object.keys(Views).map(k => Views[k])

const Basic = ({ localizer }) => (
  <Calendar
    events={events}
    views={allViews}
    timeslots={2}
    showMultiDayTimes
    localizer={localizer}
    defaultView="day"
    components={{
      liveButton: null,
    }}
  />
)

export default Basic
