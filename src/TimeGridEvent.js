import clsx from 'clsx'
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
    components: { eventWrapper: EventWrapper, sessionCard: SessionCard },
  } = props
  const tooltip = accessors.tooltip(event)
  const end = accessors.end(event)
  const start = accessors.start(event)
 
  const userProps = getters.eventProp(event, start, end, selected)

  const { top, width, xOffset } = style
  const inner = [
    // week/workWeek view
    <SessionCard title={event.title} startTime={event.start} endTime={event.end} variant={event.variant} size="md" rating={event.rating} onClick={event.handleClick} />
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
          height: 'auto',
          padding: 0
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
          // Day view
          <SessionCard title={event.title} startTime={event.start} endTime={event.end} variant={event.variant} size="lg" rating={event.rating} onClick={event.handleClick} />
        )}
      </div>
    </EventWrapper>
  )
}

export default TimeGridEvent

const EventItem = ({ inner, isLive, liveButton, event, selected }) => {
  return (
    <div style={styles.container}>
      <div>{inner}</div>
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
