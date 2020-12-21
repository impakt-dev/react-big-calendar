import PropTypes from 'prop-types'
import React from 'react'
import clsx from 'clsx'
import { navigate } from './utils/constants'

class Toolbar extends React.Component {
  render() {
    let {
      localizer: { messages },
      label,
    } = this.props

    const processedLabel =
      this.props.view === 'month'
        ? `${label.split(' ')[1]}, ${label.split(' ')[0]}`
        : label

    return (
      <div
        style={{
          justifyContent: 'space-between',
          display: 'flex',
          alignItems: 'center',
        }}
      >
        <span className="rbc-btn-group">
          <div
            style={{
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              alignContent: 'center',
            }}
          >
            <div
              style={{
                marginRight: 21,
                justifyContent: 'center',
                alignItems: 'center',
                paddingTop: 4,
              }}
              onClick={this.navigate.bind(null, navigate.PREVIOUS)}
            >
              <LeftArrow />
            </div>
            <div style={styles.labelStyle}>{processedLabel}</div>
            <div
              style={{
                marginLeft: 21,
                justifyContent: 'center',
                alignItems: 'center',
                paddingTop: 4,
              }}
              type="button"
              onClick={this.navigate.bind(null, navigate.NEXT)}
            >
              <RightArrow />
            </div>
          </div>
        </span>
        <span className="rbc-btn-group">{this.viewNamesGroup(messages)}</span>
      </div>
    )
  }

  navigate = action => {
    this.props.onNavigate(action)
  }

  view = view => {
    this.props.onView(view)
  }

  viewNamesGroup = messages => {
    let viewNames = this.props.views
    const view = this.props.view

    if (viewNames.length > 1) {
      return (
        <select
          value={view}
          onChange={e => {
            this.view(e.target.value)
          }}
          style={{
            borderWidth: '2px',
            borderColor: '#909090',
            borderRadius: '4px',
            padding: '8px',
          }}
        >
          {viewNames.map(name => (
            <option
              type="button"
              value={name}
              key={name}
              className={clsx({ 'rbc-active': view === name })}
              onClick={() => this.view(name)}
            >
              {messages[name]}
            </option>
          ))}
        </select>
      )
    }
  }
}

Toolbar.propTypes = {
  view: PropTypes.string.isRequired,
  views: PropTypes.arrayOf(PropTypes.string).isRequired,
  label: PropTypes.node.isRequired,
  localizer: PropTypes.object,
  onNavigate: PropTypes.func.isRequired,
  onView: PropTypes.func.isRequired,
}

export default Toolbar

const styles = {
  labelStyle: {
    fontFamily: 'Circular Std Medium',
    fontSize: '16px',
    color: '#262626',
  },
}
const LeftArrow = () => (
  <svg
    width="9"
    height="16"
    viewBox="0 0 9 16"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M8 15L1 8L8 1"
      stroke="#272727"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
  </svg>
)

const RightArrow = () => (
  <svg
    width="9"
    height="16"
    viewBox="0 0 9 16"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M1 15L8 8L1 1"
      stroke="#272727"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
  </svg>
)
