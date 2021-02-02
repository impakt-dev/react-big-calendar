import clsx from 'clsx'
import dayjs from 'dayjs'
import React from 'react'

function stringifyPercent(v) {
  return typeof v === 'string' ? v : v + '%'
}

/* eslint-disable react/prop-types */
function TimeGridEvent(props) {
  const {
    style,
    className,
    event,
    accessors,
    rtl,
    selected,
    label,
    continuesEarlier,
    continuesLater,
    getters,
    onClick,
    onDoubleClick,
    onKeyPress,
    components: { eventWrapper: EventWrapper, sessionCard },
  } = props
  const SessionCard = sessionCard
  const tooltip = accessors.tooltip(event)
  const end = accessors.end(event)
  const start = accessors.start(event)
 
  const userProps = getters.eventProp(event, start, end, selected)

  const { height, top, width, xOffset } = style
  const size = Math.abs(dayjs(event.start).diff(event.end, 'm')) <= 30 ? 'sm' : 'md'
  // week view
  const inner = [
    <div key="2" className="rbc-event-content" style={{ maxHeight: 'inherit', margin: 0 }}>
      <SessionCard title={event.title} startTime={event.start} endTime={event.end} variant={event.variant} isLive={event.isLive} isAvailable={event.isAvailable} size={size} rating={event.rating} onClick={event.handleClick} />
    </div>,
  ]

  return (
    <EventWrapper type="time" {...props}>
      <div
        onClick={onClick}
        onDoubleClick={onDoubleClick}
        onKeyPress={onKeyPress}
        style={{
          ...userProps.style,
          top: stringifyPercent(top),
          [rtl ? 'right' : 'left']: stringifyPercent(xOffset),
          width: stringifyPercent(width),
          height: stringifyPercent(height),
          margin: 0
        }}
        title={
          tooltip
            ? (typeof label === 'string' ? label + ': ' : '') + tooltip
            : undefined
        }
        className={clsx('rbc-event', className, userProps.className, {
          'rbc-selected': selected,
          'rbc-event-continues-earlier': continuesEarlier,
          'rbc-event-continues-later': continuesLater,
        })}
      >
        {props.view !== 'day' && inner}
        {props.view === 'day' && (
          <EventItem
            event={event}
            sessionCard={sessionCard}
          />
        )}
      </div>
    </EventWrapper>
  )
}

export default TimeGridEvent

const EventItem = ({ event, sessionCard: SessionCard }) => {
  // day view
  return (
    <div style={styles.container, {height: '100%'}}>
      <SessionCard title={event.title} startTime={event.start} endTime={event.end} variant={event.variant} isLive={event.isLive} isAvailable={event.isAvailable} size="md" rating={event.rating} onClick={event.handleClick} />
    </div>
  )
}

const styles = {
  container: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
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
    fontFamily: 'Poppins',
    fontWeight: 700,
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
    fontFamily: 'Poppins',
    fontWeight: 700,
  },
}
