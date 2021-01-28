import PropTypes from 'prop-types'
import React from 'react'
import clsx from 'clsx'
import * as dates from './utils/dates'
import moment from 'moment'

class EventCell extends React.Component {
  render() {
    let {
      style,
      className,
      event,
      selected,
      isAllDay,
      onSelect,
      onDoubleClick,
      onKeyPress,
      continuesPrior,
      continuesAfter,
      accessors,
      getters,
      children,
      components: { eventWrapper: EventWrapper, sessionCard: SessionCard },
      ...props
    } = this.props
    delete props.resizable

    let tooltip = accessors.tooltip(event)
    let end = accessors.end(event)
    let start = accessors.start(event)
    let allDay = accessors.allDay(event)

    let showAsAllDay =
      isAllDay || allDay || dates.diff(start, dates.ceil(end, 'day'), 'day') > 1

    let userProps = getters.eventProp(event, start, end, selected)
    const diffMins = moment().diff(moment(start).add(1, 'minutes'), 'minutes')
    const is15MinAfterBefore = -15 <= diffMins && diffMins <= 15
    const isPastSession = end < moment()
    const backgroundColor = is15MinAfterBefore
      ? 'rgb(38, 38, 38)'
      : isPastSession
      ? '#EBEBEB'
      : '#909090'
    const content = (
      <div
        className="rbc-event-content"
        style={{
          color: is15MinAfterBefore
            ? 'white'
            : end < moment()
            ? '#909090'
            : 'white',
        }}
        title={tooltip || undefined}
      >
        <SessionCard title={event.title} startTime={event.start} endTime={event.end} variant={event.variant} size="sm" rating={event.rating} onClick={event.handleClick} />
      </div>
    )

    return (
      <EventWrapper {...this.props} type="date">
        <div
          {...props}
          tabIndex={0}
          style={{ ...userProps.style, ...style, padding: 0 }}
          className={clsx('rbc-event', className, userProps.className, {
            'rbc-selected': selected,
            'rbc-event-allday': showAsAllDay,
            'rbc-event-continues-prior': continuesPrior,
            'rbc-event-continues-after': continuesAfter,
          })}
          style={{ backgroundColor, color: 'black' }}
          onClick={e => onSelect && onSelect(event, e)}
          onDoubleClick={e => onDoubleClick && onDoubleClick(event, e)}
          onKeyPress={e => onKeyPress && onKeyPress(event, e)}
        >
          {typeof children === 'function' ? children(content) : content}
        </div>
      </EventWrapper>
    )
  }
}

EventCell.propTypes = {
  event: PropTypes.object.isRequired,
  slotStart: PropTypes.instanceOf(Date),
  slotEnd: PropTypes.instanceOf(Date),

  resizable: PropTypes.bool,
  selected: PropTypes.bool,
  isAllDay: PropTypes.bool,
  continuesPrior: PropTypes.bool,
  continuesAfter: PropTypes.bool,

  accessors: PropTypes.object.isRequired,
  components: PropTypes.object.isRequired,
  getters: PropTypes.object.isRequired,
  localizer: PropTypes.object,

  onSelect: PropTypes.func,
  onDoubleClick: PropTypes.func,
  onKeyPress: PropTypes.func,
}

export default EventCell
