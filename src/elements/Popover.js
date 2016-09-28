import React, { Component, PropTypes } from 'react';
import ReactDOM from 'react-dom';

const componentStyle = {
  zIndex: 14,
  position: 'absolute',
  background: '#fff',
  border: '1px solid #e1e4ec',
  boxShadow: '0 2px 8px rgba(0,0,0,0.2)',
  borderRadius: '6px',
  overflow: 'hidden',
  minHeight: '48px',
  minWidth: '92px',
  maxWidth: '640px',
}

export default class Popover extends Component {
  constructor (props) {
    super(props)
    this.state = {}
  }

  popoverMounted = (ref) => {
    if (!ref || 'rect' in this.state) return
    this.setState({'rect': ref.getBoundingClientRect()})
  }

  getTopLeftPosition (rect, origin) {
    return {
      position: 'absolute',
      top: origin.top - rect.height - 18 + 'px',
      left: origin.left + 'px',
    }
  }

  getTopRightPosition (rect, origin) {
    return {
      position: 'absolute',
      top: origin.top - rect.height - 18 + 'px',
      left: origin.left + origin.width - rect.width + 'px',
    }
  }

  getBottomLeftPosition (rect, origin) {
    return {
      position: 'absolute',
      top: origin.top + origin.height - 18 + 'px',
      left: origin.left + 'px',
    }
  }

  getBottomRightPosition (rect, origin) {
    return {
      position: 'absolute',
      top: origin.top + origin.height - 18 + 'px',
      left: origin.left + origin.width - rect.width + 'px',
    }
  }

  getPosition () {
    if (this.state.rect){
      const {rect} = this.state

      switch(this.props.position){
        case 'top-left': return this.getTopLeftPosition(rect, this.origin)
        case 'top-right': return this.getTopRightPosition(rect, this.origin)
        case 'bottom-left': return this.getBottomRightPosition(rect, this.origin)
        default: return this.getBottomLeftPosition(rect, this.origin)
      }
    }
    else{
      return {}
    }
  }

  componentDidUpdate () {
    this.origin = ReactDOM.findDOMNode(this.props.origin).getBoundingClientRect()
  }

  render () {
    const style = Object.assign(this.getPosition(), componentStyle, this.props.style)

    if(!this.props.open)
      return null

    return <div ref={this.popoverMounted} style={style}>{this.props.children}</div>
  }
}

Popover.proptypes = {
  style: PropTypes.object,
  open: PropTypes.bool.isRequired,
  position: PropTypes.oneOf(['top-left', 'top-right', 'bottom-left', 'bottom-right']),
  origin: PropTypes.node.isRequired,
}
