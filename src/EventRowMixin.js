import PropTypes from 'prop-types'
import React from 'react'
import EventCell from './EventCell'
import { isSelected } from './utils/selection'

/* eslint-disable react/prop-types */
export default {
  propTypes: {
    slotMetrics: PropTypes.object.isRequired,

    selected: PropTypes.object,
    isAllDay: PropTypes.bool,

    accessors: PropTypes.object.isRequired,
    localizer: PropTypes.object.isRequired,
    components: PropTypes.object.isRequired,
    getters: PropTypes.object.isRequired,

    onSelect: PropTypes.func,
    onDoubleClick: PropTypes.func,
    onKeyPress: PropTypes.func,
  },

  defaultProps: {
    segments: [],
    selected: {},
  },

  renderEvent(props, event) {
    let {
      selected,
      isAllDay: _,
      accessors,
      getters,
      onSelect,
      onDoubleClick,
      onKeyPress,
      localizer,
      slotMetrics,
      components,
      resizable,
    } = props

    let continuesPrior = slotMetrics.continuesPrior(event)
    let continuesAfter = slotMetrics.continuesAfter(event)

    return (
      <EventCell
        event={event}
        getters={getters}
        localizer={localizer}
        accessors={accessors}
        components={components}
        onSelect={onSelect}
        onDoubleClick={onDoubleClick}
        onKeyPress={onKeyPress}
        continuesPrior={continuesPrior}
        continuesAfter={continuesAfter}
        slotStart={slotMetrics.first}
        slotEnd={slotMetrics.last}
        selected={isSelected(event, selected)}
        resizable={resizable}
      />
    )
  },

  renderSpan(slots, len, key, content = {}) {
    let per = (Math.abs(len) / slots) * 100 + '%'
    const { props: { components: { sessionCard: SessionCard } = {} } = {} } = content
    const { props: { event } = {} } = content

    return (
      <div
        key={key}
        className="rbc-row-segment"
        // IE10/11 need max-width. flex-basis doesn't respect box-sizing
        style={{ WebkitFlexBasis: per, flexBasis: per, maxWidth: per }}
      >
        {
          //month view
          event && <SessionCard title={event.title} startTime={event.start} endTime={event.end} variant={event.variant} size="sm" rating={event.rating} onClick={event.handleClick} />
        }
        {/* {content} */}
      </div>
    )
  },
}
