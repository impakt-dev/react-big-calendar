import moment from 'moment'
import React from 'react'
import { Calendar, momentLocalizer, Views } from 'react-big-calendar'
import events from '../events'
import {  ChakraProvider, Box, Flex}  from "@chakra-ui/react"
import SessionStatusCard from './SessionStatusCard';
import theme from './styles/theme/chakraTheme';

const allViews = Object.keys(Views).map(k => Views[k])

const localizer = momentLocalizer(moment)
const Basic = ({  }) => (
  <ChakraProvider theme={theme}>
    <Flex mt={4} h="770px" borderRadius="lg">
      <Calendar
      events={events}
      views={allViews}
      timeslots={2}
      showMultiDayTimes
      localizer={localizer}
      defaultView='agenda'
      popup
      components={{
        sessionCard: ({ title, startTime, endTime, variant, size, rating, isLive, isAvailable, onClick }) => <Box w="full" h="full"><SessionStatusCard sessionName={title} variant={variant} startTime={startTime} endTime={endTime} size={size} rating={rating} isLive={isLive} isAvailable={isAvailable} onClick={onClick} /></Box>
      }}
    />
    </Flex>
    
  </ChakraProvider>
)

export default Basic
