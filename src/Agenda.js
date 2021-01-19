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

  const Component = components.agendaComponent;

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
      alignItems: 'flex-end',
      marginRight: 8,
      width: 60,
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
      flex: 1,
      borderRadius: 5,
      padding: 8,
      marginBottom: 8,
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


  if (components.renderAgenda) {
    return components.renderAgenda({
      events,
      date,
    })
  }


  return (
    <div className="rbc-agenda-view" style={{ marginTop: 8 }}>
      {range.map((day, idx) => renderDay(day, events, idx))}

      {Object.keys(groupedByDate).length !== 0 ? Object.keys(groupedByDate).map((key) => {
        const isShowTimeIndicator = moment(activeDay[0]).format('DD MM YYYY') === moment(key).format('DD MM YYYY');

        return (
          <React.Fragment key={key}>
            {
              groupedByDate[key].map((event, id) => {
                const eventDate = `${moment(event.start)
                  .format('HH:mmA')
                  .toLowerCase()} - ${moment(event.end)
                    .format('HH:mmA')
                    .toLowerCase()}`;

                return (
                  <div key={event.id}>
                    { isShowTimeIndicator && id === 0 && <div
                      className='rbc-current-time-indicator'
                      style={{
                        marginBottom: 4,
                        display: 'flex',
                        height: 2,
                        backgroundColor: 'black',
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
                    </div>}

                    <div style={styles.container}>
                      {<div style={styles.dateContainer}>
                        {id === 0 && (<><div style={styles.dayNumber}>
                          {moment(key).format('DD')}
                        </div>
                          <div style={styles.dayName}>
                            {moment(key).format('ddd')}
                          </div></>)}
                      </div>}
                      <Component title={event.title} variant={event.variant}/>
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
