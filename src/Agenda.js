import PropTypes from 'prop-types'
import React, { useRef, useEffect } from 'react'
import addClass from 'dom-helpers/addClass'
import removeClass from 'dom-helpers/removeClass'
import getWidth from 'dom-helpers/width'
import scrollbarSize from 'dom-helpers/scrollbarSize'

import * as dates from './utils/dates'
import { navigate } from './utils/constants'
import { inRange } from './utils/eventLevels'
import { isSelected } from './utils/selection'
import moment from 'moment'

function Agenda({
  selected,
  getters,
  accessors,
  localizer,
  components,
  length,
  date,
  events,
}) {
  const headerRef = useRef(null)
  const dateColRef = useRef(null)
  const timeColRef = useRef(null)
  const contentRef = useRef(null)
  const tbodyRef = useRef(null)

  useEffect(() => {
    _adjustHeader()
  })

  const renderDay = (day, events, dayKey) => {
    const { event: Event, date: AgendaDate } = components

    events = events.filter(e =>
      inRange(e, dates.startOf(day, 'day'), dates.endOf(day, 'day'), accessors)
    )

    return events.map((event, idx) => {
      let title = accessors.title(event)
      let end = accessors.end(event)
      let start = accessors.start(event)

      const userProps = getters.eventProp(
        event,
        start,
        end,
        isSelected(event, selected)
      )

      let dateLabel = idx === 0 && localizer.format(day, 'agendaDateFormat')
      let first =
        idx === 0 ? (
          <td rowSpan={events.length} className="rbc-agenda-date-cell">
            {AgendaDate ? (
              <AgendaDate day={day} label={dateLabel} />
            ) : (
              dateLabel
            )}
          </td>
        ) : (
          false
        )

      return (
        <tr
          key={dayKey + '_' + idx}
          className={userProps.className}
          style={userProps.style}
        >
          {first}
          <td className="rbc-agenda-time-cell">{timeRangeLabel(day, event)}</td>
          <td className="rbc-agenda-event-cell">
            {Event ? <Event event={event} title={title} /> : title}
          </td>
        </tr>
      )
    }, [])
  }

  const timeRangeLabel = (day, event) => {
    let labelClass = '',
      TimeComponent = components.time,
      label = localizer.messages.allDay

    let end = accessors.end(event)
    let start = accessors.start(event)

    if (!accessors.allDay(event)) {
      if (dates.eq(start, end)) {
        label = localizer.format(start, 'agendaTimeFormat')
      } else if (dates.eq(start, end, 'day')) {
        label = localizer.format({ start, end }, 'agendaTimeRangeFormat')
      } else if (dates.eq(day, start, 'day')) {
        label = localizer.format(start, 'agendaTimeFormat')
      } else if (dates.eq(day, end, 'day')) {
        label = localizer.format(end, 'agendaTimeFormat')
      }
    }

    if (dates.gt(day, start, 'day')) labelClass = 'rbc-continues-prior'
    if (dates.lt(day, end, 'day')) labelClass += ' rbc-continues-after'

    return (
      <span className={labelClass.trim()}>
        {TimeComponent ? (
          <TimeComponent event={event} day={day} label={label} />
        ) : (
          label
        )}
      </span>
    )
  }

  const _adjustHeader = () => {
    if (!tbodyRef.current) return

    let header = headerRef.current
    let firstRow = tbodyRef.current.firstChild

    if (!firstRow) return

    let isOverflowing =
      contentRef.current.scrollHeight > contentRef.current.clientHeight

    let _widths = []
    let widths = _widths

    _widths = [getWidth(firstRow.children[0]), getWidth(firstRow.children[1])]

    if (widths[0] !== _widths[0] || widths[1] !== _widths[1]) {
      dateColRef.current.style.width = _widths[0] + 'px'
      timeColRef.current.style.width = _widths[1] + 'px'
    }

    if (isOverflowing) {
      addClass(header, 'rbc-header-overflowing')
      header.style.marginRight = scrollbarSize() + 'px'
    } else {
      removeClass(header, 'rbc-header-overflowing')
    }
  }

  let { messages } = localizer
  let end = dates.add(date, length, 'day')

  let range = dates.range(date, end, 'day')

  events = events.filter(event => inRange(event, date, end, accessors))
  const activeDay = events.filter(
    event =>
      moment(event.start).format('DD MM YY') === moment().format('DD MM YY')
  )

  events.sort((a, b) => +accessors.start(a) - +accessors.start(b))
  const styles = {
    container: {
      backgroundColor: 'white',
      display: 'flex',
      alignItems: 'center',
      borderWidth: 2,
      borderColor: 'red',
    },
    dateContainer: {
      display: 'flex',
      alignItems: 'flex-end',
      marginRight: 8,
      width: 50,
    },
    dayNumber: {
      marginRight: 4,
      fontSize: 24,
      fontFamily: 'Circular Std Bold',
    },
    dayName: {
      fontSize: 14,
      paddingBottom: 4,
      fontFamily: 'Circular Std Medium',
    },
    eventContainer: {
      background: '#EBEBEB',
      borderRadius: 5,
      padding: 8,
      flex: 1,
      display: 'flex',
      justifyContent: 'space-between',
      // flexDirection: 'column'
    },
    eventTitle: {
      fontFamily: 'Circular Std Bold',
      fontSize: 16,
    },
    eventDate: {
      fontFamily: 'Circular Std Medium',
      fontSize: 14,
    },
  }

  return (
    <div className="rbc-agenda-view" style={{ marginTop: 8 }}>
      {events.length > 0 &&
        events.map((event, idx) => {
          const eventDate = `${moment(event.start)
            .format('HH:mmA')
            .toLowerCase()} - ${moment(event.end)
            .format('HH:mmA')
            .toLowerCase()}`
          return (
            <div key={idx}>
              {event.id === activeDay[0].id && idx === 0 && (
                <div
                  style={{
                    marginTop: 4,
                    marginBottom: 4,
                    flex: 1,
                    display: 'flex',
                    height: 1,
                    background: 'black',
                    position: 'relative',
                    marginTop: 8,
                  }}
                >
                  <div
                    style={{
                      width: 12,
                      height: 12,
                      borderRadius: 6,
                      backgroundColor: 'black',
                      position: 'absolute',
                      top: -6,
                    }}
                  />
                </div>
              )}
              <div style={styles.container}>
                <div style={styles.dateContainer}>
                  <div style={styles.dayNumber}>
                    {moment(event.start).format('DD')}
                  </div>
                  <div style={styles.dayName}>
                    {moment(event.start).format('dd')}
                  </div>
                </div>
                <div style={styles.eventContainer}>
                  <div>
                    <div style={styles.eventTitle}>{event.title}</div>
                    <div style={styles.eventDate}>{eventDate}</div>
                  </div>
                  {event.isLive && <GoLiveButton isLive={true} />}
                </div>
              </div>
              {event.id === activeDay[0].id && idx !== 0 ? (
                <div
                  style={{
                    marginTop: 4,
                    marginBottom: 4,
                    flex: 1,
                    display: 'flex',
                    height: 1,
                    background: 'black',
                    position: 'relative',
                    marginTop: 8,
                  }}
                >
                  <div
                    style={{
                      width: 12,
                      height: 12,
                      borderRadius: 6,
                      backgroundColor: 'black',
                      position: 'absolute',
                      top: -6,
                    }}
                  />
                </div>
              ) : (
                events.length - 1 !== idx && (
                  <div
                    style={{
                      marginTop: 4,
                      marginBottom: 4,
                      flex: 1,
                      display: 'flex',
                      height: 1,
                      background: '#ebebeb',
                    }}
                  />
                )
              )}
            </div>
          )
        })}
    </div>
  )

  // return (
  //   <div className="rbc-agenda-view">
  //     {events.length !== 0 ? (
  //       <React.Fragment>
  //         <table ref={headerRef} className="rbc-agenda-table">
  //           <thead>
  //             <tr>
  //               <th className="rbc-header" ref={dateColRef}>
  //                 {messages.date}
  //               </th>
  //               <th className="rbc-header" ref={timeColRef}>
  //                 {messages.time}
  //               </th>
  //               <th className="rbc-header">{messages.event}</th>
  //             </tr>
  //           </thead>
  //         </table>
  //         <div className="rbc-agenda-content" ref={contentRef}>
  //           <table className="rbc-agenda-table">
  //             <tbody ref={tbodyRef}>
  //               {range.map((day, idx) => renderDay(day, events, idx))}
  //             </tbody>
  //           </table>
  //         </div>
  //       </React.Fragment>
  //     ) : (
  //       <span className="rbc-agenda-empty">{messages.noEventsInRange}</span>
  //     )}
  //   </div>
  // )
}

Agenda.propTypes = {
  events: PropTypes.array,
  date: PropTypes.instanceOf(Date),
  length: PropTypes.number.isRequired,

  selected: PropTypes.object,

  accessors: PropTypes.object.isRequired,
  components: PropTypes.object.isRequired,
  getters: PropTypes.object.isRequired,
  localizer: PropTypes.object.isRequired,
}

Agenda.defaultProps = {
  length: 30,
}

Agenda.range = (start, { length = Agenda.defaultProps.length }) => {
  let end = dates.add(start, length, 'day')
  return { start, end }
}

Agenda.navigate = (date, action, { length = Agenda.defaultProps.length }) => {
  switch (action) {
    case navigate.PREVIOUS:
      return dates.add(date, -length, 'day')

    case navigate.NEXT:
      return dates.add(date, length, 'day')

    default:
      return date
  }
}

Agenda.title = (start, { length = Agenda.defaultProps.length, localizer }) => {
  let end = dates.add(start, length, 'day')
  return localizer.format({ start, end }, 'agendaHeaderFormat')
}

export default Agenda

const GoLiveButton = ({ isLive, liveButton, event, selected }) => {
  return (
    <div style={styles.container}>
      {isLive && liveButton && liveButton({ event, selected })}
      {isLive && !liveButton && (
        <div style={!selected ? styles.goLive : styles.selectedGoLive}>
          Go Live
        </div>
      )}
    </div>
  )
}

const styles = {
  container: {},
  goLive: {
    display: 'flex',
    height: 40,
    background: 'black',
    color: 'white',
    justifyContent: 'center',
    alignItems: 'center',
    align: 'center',
    borderRadius: 5,
    paddingRight: 32,
    paddingLeft: 32,
    fontSize: 18,
    fontFamily: 'Circular Std Bold',
  },
  selectedGoLive: {
    display: 'flex',
    height: 40,
    background: 'white',
    color: 'black',
    justifyContent: 'center',
    alignItems: 'center',
    align: 'center',
    borderRadius: 5,
    paddingRight: 32,
    paddingLeft: 32,
    fontSize: 18,
    fontFamily: 'Circular Std Bold',
  },
}
