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
    components: { event: Event, eventWrapper: EventWrapper, liveButton, sessionCard },
  } = props
  const title = accessors.title(event)
  const tooltip = accessors.tooltip(event)
  const end = accessors.end(event)
  const start = accessors.start(event)
  const splittedLabel = label && label.split(' – ')
  const splittedStartLabel = splittedLabel && splittedLabel[0] && splittedLabel[0].split(' ')
  const splittedEndLabel = splittedLabel && splittedLabel[1] && splittedLabel[1].split(' ')
  const startLabel = `${splittedStartLabel && splittedStartLabel[0] && splittedStartLabel[0].toLowerCase()}${splittedStartLabel&&splittedStartLabel[1]&&splittedStartLabel[1].toLowerCase()}`
  const endLabel = `${splittedEndLabel && splittedEndLabel[0] && splittedEndLabel[0].toLowerCase()}${splittedEndLabel && splittedEndLabel[1] && splittedEndLabel[1].toLowerCase()}`
  const processedLabel = `${startLabel} - ${endLabel}`;
 
  const userProps = getters.eventProp(event, start, end, selected)

  const { height, top, width, xOffset } = style
  const inner = [
    <div key="2" className="rbc-event-content">
      {Event ? <Event event={event} title={title} /> : title}
    </div>,
    <div key="1" className="rbc-event-label">
      {processedLabel}
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
          backgroundColor: 'grey'
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
      <SessionCard title={event.title} startTime={event.start} endTime={event.end} variant={event.variant} size="sm" rating={event.rating} onClick={event.handleClick} />
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
