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
    components: { event: Event, eventWrapper: EventWrapper, liveButton },
  } = props
  let title = accessors.title(event)
  let tooltip = accessors.tooltip(event)
  let end = accessors.end(event)
  let start = accessors.start(event)
  const splittedLabel = label.split(' – ')
  const splittedStartLabel = splittedLabel[0].split(' ')
  const splittedEndLabel = splittedLabel[1].split(' ')
  const processedLabel = `${
    splittedStartLabel[0]
  }${splittedStartLabel[1].toLowerCase()} - ${
    splittedEndLabel[0]
  }${splittedEndLabel[1].toLowerCase()}`
  let userProps = getters.eventProp(event, start, end, selected)

  let { height, top, width, xOffset } = style
  const inner = [
    <div key="2" className="rbc-event-content">
      {Event ? <Event event={event} title={title} /> : title}
    </div>,
    <div key="1" className="rbc-event-label">
      {processedLabel.toLowerCase()}
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
            isLive={event.isLive}
            inner={inner}
            liveButton={liveButton}
            event={event}
            selected={props.selected}
          />
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
