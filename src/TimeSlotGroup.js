import clsx from 'clsx'
import PropTypes from 'prop-types'
import moment from 'moment'
import React, { Component } from 'react'

import BackgroundWrapper from './BackgroundWrapper'

export default class TimeSlotGroup extends Component {
  render() {
    const {
      renderSlot,
      resource,
      group,
      getters,
      lastColumnDate,
      components: { timeSlotWrapper: Wrapper = BackgroundWrapper } = {},
    } = this.props

    const groupProps = getters ? getters.slotGroupProp() : {}
    return (
      <div className="rbc-timeslot-group" {...groupProps}>
        {group.map((value, idx) => {
          const slotProps = getters ? getters.slotProp(value, resource) : {}
          const isBordered =
            moment(value)
              .format('DD MM YY')
              .toString() ===
            moment(lastColumnDate)
              .format('DD MM YY')
              .toString()
          console.log(value, lastColumnDate)
          return (
            <Wrapper key={idx} value={value} resource={resource}>
              <div
                {...slotProps}
                className={clsx(
                  'rbc-time-slot',
                  slotProps.className,
                  isBordered ? 'rbc-time-slot-last-column' : {}
                )}
                style={{
                  borderWidth: 1,
                }}
              >
                {renderSlot && renderSlot(value, idx, isBordered)}
              </div>
            </Wrapper>
          )
        })}
      </div>
    )
  }
}

TimeSlotGroup.propTypes = {
  renderSlot: PropTypes.func,
  group: PropTypes.array.isRequired,
  resource: PropTypes.any,
  components: PropTypes.object,
  getters: PropTypes.object,
}
