import clsx from 'clsx'
import PropTypes from 'prop-types'
import React, { Component } from 'react'

import * as TimeSlotUtils from './utils/TimeSlots'
import TimeSlotGroup from './TimeSlotGroup'

export default class TimeGutter extends Component {
  constructor(...args) {
    super(...args)

    const { min, max, timeslots, step } = this.props
    this.slotMetrics = TimeSlotUtils.getSlotMetrics({
      min,
      max,
      timeslots,
      step,
    })
  }

  UNSAFE_componentWillReceiveProps(nextProps) {
    const { min, max, timeslots, step } = nextProps
    this.slotMetrics = this.slotMetrics.update({ min, max, timeslots, step })
  }

  renderSlot = (value, idx, isBordered) => {
    if (idx !== 0) return null
    const { localizer, getNow } = this.props

    const isNow = this.slotMetrics.dateIsInGroup(getNow(), idx)
    return (
      <div
        style={{ display: 'flex', flexDirection: 'row', position: 'relative' }}
      >
        <div
          className={clsx('rbc-label', isNow && 'rbc-now')}
          style={{ width: 50, borderBottom: 2, borderColor: 'red' }}
        >
          <span
            style={{ position: 'absolute', left: 0, zIndex: 9990, top: -10 }}
            className=""
          >
            {localizer.format(value, 'timeGutterFormat')}
          </span>
        </div>
        <div style={{ marginTop: 0, display: 'flex', flexDirection: 'column' }}>
          <div
            style={{
              marginBottom: 28.5,
              width: 20,
              borderTop: 2,
              height: 1,
              borderColor: '#ebebeb',
              background: '#ebebeb',
            }}
          />
          <div
            style={{
              marginBottom: 29.5,
              width: 20,
              borderTop: 2,
              height: 1,
              borderColor: '#ebebeb',
              background: '#ebebeb',
            }}
          />
        </div>
      </div>
    )
  }

  render() {
    const { resource, components, getters } = this.props

    return (
      <div className="rbc-time-gutter rbc-time-column">
        {this.slotMetrics.groups.map((grp, idx) => {
          return (
            <TimeSlotGroup
              key={idx}
              group={grp}
              resource={resource}
              components={components}
              renderSlot={this.renderSlot}
              getters={getters}
              lastColumnDate={this.props.lastColumnDate}
            />
          )
        })}
      </div>
    )
  }
}

TimeGutter.propTypes = {
  min: PropTypes.instanceOf(Date).isRequired,
  max: PropTypes.instanceOf(Date).isRequired,
  timeslots: PropTypes.number.isRequired,
  step: PropTypes.number.isRequired,
  getNow: PropTypes.func.isRequired,
  components: PropTypes.object.isRequired,
  getters: PropTypes.object,
  lastColumnDate: PropTypes.string,
  localizer: PropTypes.object.isRequired,
  resource: PropTypes.string,
}
