import React, { Component, PropTypes } from 'react';
import omit from 'lodash/omit'

const componentStyle = {
  padding: '.5em 1em',
  textTransform: 'uppercase',
  borderRadius: '.3em',
  backgroundColor: '#2b90d9',
  color: '#fff',
  border: '1px solid #2b90d9',
}

export default class Button extends Component {
  render () {
    const style = Object.assign({}, componentStyle, this.props.style)
    const buttonProps  = omit(this.props, ['style', 'children'])

    return <button style={style} {...buttonProps}>{ this.props.children }</button>
  }
}

Button.proptypes = {
  style: PropTypes.object,
  children: PropTypes.node,
}
