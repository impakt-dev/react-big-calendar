import moment from 'moment'
import React from 'react'
import { Calendar, momentLocalizer, Views } from 'react-big-calendar'
import events from '../events'
import {  ChakraProvider}  from "@chakra-ui/react"

const allViews = Object.keys(Views).map(k => Views[k])

const localizer = momentLocalizer(moment)
const Basic = ({  }) => (
  <ChakraProvider>
    <Calendar
      events={events}
      views={allViews}
      timeslots={2}
      showMultiDayTimes
      localizer={localizer}
      defaultView="week"
      components={{
        liveButton: null,
        test: () => {},
        agendaComponent: () => {}
      }}
    />
  </ChakraProvider>
)

export default Basic
