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
import clsx from 'clsx'

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

  const SessionCard = components.sessionCard;

  useEffect(() => {
    _adjustHeader()
  })

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

      return null
    }, [])
  }


  let { messages } = localizer
  let end = dates.add(date, length, 'day')

  let range = dates.range(date, end, 'day')
  const activeDay = events.filter(
    event =>
      moment(event.start).format('DD MM YY') >= moment().format('DD MM YY')
  )
  events = events.filter(event => inRange(event, date, end, accessors))
  events.sort((a, b) => +accessors.start(a) - +accessors.start(b))

  const groupedByDate = {};

  events.map(event => {
    if (!groupedByDate[moment(event.start).format('YYYY-MM-DD')]) {
      groupedByDate[moment(event.start).format('YYYY-MM-DD')] = [];
    }
    groupedByDate[moment(event.start).format('YYYY-MM-DD')].push(event);
  });

  const styles = {
    container: {
      backgroundColor: 'white',
      display: 'flex',
      alignItems: 'center',
    },
    dateContainer: {
      display: 'flex',
      alignItems: 'baseline',
      justifyContent: 'space-around',
      width: 80,
      paddingTop: 2,
      marginRight: 5
    },
    dayNumber: {
      fontSize: 15,
      fontFamily: 'Poppins',
      fontWeight: 700,
      lineHeight: '24px',
      color: '#728BA3',
    },
    dayName: {
      fontSize: 17,
      marginLeft: 12,
      fontFamily: 'Poppins',
      fontWeight: 500,
      lineHeight: '24px',
      color: '#00264C',
    },
    eventContainer: {
      background: '#EBEBEB',
      flex: 1,
      borderRadius: 5,
      padding: 8,
      marginBottom: 8,
      display: 'flex',
      justifyContent: 'space-between',
      // flexDirection: 'column'
    },
    eventTitle: {
      fontFamily: 'Poppins',
      fontWeight: 700,
      fontSize: 16,
    },
    eventDate: {
      fontFamily: 'Poppins',
      fontWeight: 500,
      fontSize: 14,
    },
  }


  if (components.renderAgenda) {
    return components.renderAgenda({
      events,
      date,
    })
  }

  const getBorderLeftClassName = (parentIndex, parentLength, childIndex, childLength) => {
    let classNames = 'rbc-time-row'

    if (childIndex === childLength - 1 && parentIndex === parentLength - 1)
      return classNames
    else if (parentIndex === 0 && childIndex === 0) {
      if (childLength > 1) {
        classNames += ' rbc-time-row-bottom-border' // border top
      } else {
        classNames += ' rbc-time-row-top-border rbc-time-row-bottom-border' // border top + bottom
      }
    } else if (parentIndex === parentLength - 1) {
      if (childIndex < childLength - 1) {
        classNames += ' rbc-time-row-top-border' // border top
      } else {
        classNames += ' rbc-time-row-top-border rbc-time-row-bottom-border' // border top + bottom
      }
    } else if (childIndex !== 0 && childIndex < childLength - 1) {
      return classNames
    } else {
      classNames += ' rbc-time-row-bottom-border' //border bottom
    }

    return classNames
  }


  return (
    <div className="rbc-agenda-view" style={{ marginTop: 8, paddingTop: 5 }}>
      {range.map((day, idx) => renderDay(day, events, idx))}

      {Object.keys(groupedByDate).length !== 0 ? Object.keys(groupedByDate).map((key, keyIdx) => {
        // const isShowTimeIndicator = moment(activeDay[0]).format('DD MM YYYY') === moment(key).format('DD MM YYYY');

        return (
          <React.Fragment key={key}>
            {
              groupedByDate[key].map((event, id) => {
                // const eventDate = `${moment(event.start)
                //   .format('HH:mmA')
                //   .toLowerCase()} - ${moment(event.end)
                //     .format('HH:mmA')
                //     .toLowerCase()}`;

                return (
                  <div key={event.id}>
                    <div style={styles.container}>
                      <div>
                        {<div style={styles.dateContainer} className={id === 1000 && 'rbc-time-cell'}>
                          {(<>
                            <div style={styles.dayName}>
                            {id === 0 && moment(key).format('ddd')}
                            </div>
                            <div style={styles.dayNumber}>
                              {id === 0 && moment(key).format('DD')}
                            </div>
                            </>)}
                        </div>}
                      </div>
                      <div style={{ width: '100%', border: '1px solid #F0F7FF', borderTopWidth: (keyIdx === 0 && id === 0) ? 0 : 1, borderBottom: 0 }} className={getBorderLeftClassName(keyIdx, Object.keys(groupedByDate).length, id, groupedByDate[key].length)}>
                      <div style={{ width: '99%', margin: 'auto', marginBottom: '.5rem' }}>
                        <SessionCard title={event.title} startTime={event.start} endTime={event.end} variant={event.variant} isLive={event.isLive} isAvailable={event.isAvailable} isLive={event.isLive} isAvailable={event.isAvailable} size="lg" rating={event.rating} onClick={event.handleClick} />
                      </div>
                      </div>
                    </div>
                  </div>
                )
              })
            }
          </React.Fragment>
        )
      }) : <span className="rbc-agenda-empty">{messages.noEventsInRange}</span>}
    </div>
  )
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
