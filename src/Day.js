import PropTypes from 'prop-types'
import React from 'react'
import moment from 'moment'
import * as dates from './utils/dates'
import { navigate } from './utils/constants'
import TimeGrid from './TimeGrid'

class Day extends React.Component {
  render() {
    let { date, ...props } = this.props
    let range = Day.range(date)
    const dayName = moment(this.props.date.toString()).format('dd')
    const dayNumber = moment(this.props.date.toString()).format('DD')

    return (
      <>
        <div>
          <div
            style={{
              marginLeft: 70,
              width: 34,
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
              alignItems: 'center  ',
            }}
          >
            <div
              style={{
                align: 'center',
                fontSize: 14,
                fontFamily: 'Circular Std Medium',
              }}
            >
              {dayName}
            </div>
            <div style={{ fontSize: 24, fontFamily: 'Circular Std Bold' }}>
              {dayNumber}
            </div>
          </div>
        </div>
        <TimeGrid {...props} range={range} eventOffset={10} view="day" />
      </>
    )
  }
}

Day.propTypes = {
  date: PropTypes.instanceOf(Date).isRequired,
}

Day.range = date => {
  return [dates.startOf(date, 'day')]
}

Day.navigate = (date, action) => {
  switch (action) {
    case navigate.PREVIOUS:
      return dates.add(date, -1, 'day')

    case navigate.NEXT:
      return dates.add(date, 1, 'day')

    default:
      return date
  }
}

Day.title = (date, { localizer }) => localizer.format(date, 'dayHeaderFormat')

export default Day
