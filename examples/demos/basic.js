import moment from 'moment'
import React from 'react'
import { Calendar, momentLocalizer, Views } from 'react-big-calendar'
import events from '../events'
import {  ChakraProvider, Box}  from "@chakra-ui/react"
import SessionStatusCard from './SessionStatusCard';
import theme from './styles/theme/chakraTheme';

const allViews = Object.keys(Views).map(k => Views[k])

const localizer = momentLocalizer(moment)
const Basic = ({  }) => (
  <ChakraProvider theme={theme}>
    <Calendar
      events={events}
      views={allViews}
      timeslots={2}
      showMultiDayTimes
      localizer={localizer}
      defaultView='agenda'
      components={{
        liveButton: null,
        dayComponent: () =>  <Box w='full'><SessionStatusCard sessionName={'title'} variant={'variant'} sessionTime={'time'} size={'size'}/></Box>,
        monthEventComponent: () => null,
        test: () => {},
      agendaComponent: ({ title, time, variant, size }) => <Box w='full'><SessionStatusCard sessionName={title} variant={variant} sessionTime={time} size={size}/></Box>
      }}
    />
  </ChakraProvider>
)

export default Basic
