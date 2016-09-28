import React, { Component } from 'react';

import {
  Popover,
  Button,
} from '../elements'

export default class PopoverExample extends Component {
  constructor (props) {
    super(props)
    this.state = {open: false}
  }

  toggle = name => (event) => {
    this.setState({[name]: !this.state[name]})
  }

  render () {
    return <div>

      <h3>Simple popover</h3>
      <Button ref="small_popover" onClick={this.toggle('small_popover')}>Click Me</Button>
      <Popover
        style={{padding: '.5em', backgroundColor: '#B2DFDB'}}
        open={this.state.small_popover}
        origin={this.refs.small_popover}
      >
        This is the content of the popover
      </Popover>

      <h3>Positioning</h3>

      <Button
        style={{marginRight: '1em'}}
        ref="top_right"
        onClick={this.toggle('top_right')}>Click Me</Button>
      <Popover
        style={{padding: '1em'}}
        open={this.state.top_right}
        origin={this.refs.top_right}
        position="top-right">top right</Popover>

      <Button
        style={{marginRight: '1em'}}
        ref="bottom_left"
        onClick={this.toggle('bottom_left')}>Click Me</Button>
      <Popover
        style={{padding: '1em'}}
        open={this.state.bottom_left}
        origin={this.refs.bottom_left}
        position="bottom-left">bottom left</Popover>

      <Button
        style={{marginRight: '1em'}}
        ref="bottom_right"
        onClick={this.toggle('bottom_right')}>Click Me</Button>
      <Popover
        style={{padding: '1em'}}
        open={this.state.bottom_right}
        origin={this.refs.bottom_right}
        position="bottom-right">bottom right</Popover>

      <Button
        ref="top_left"
        style={{marginRight: '1em'}}
        onClick={this.toggle('top_left')}>Click Me</Button>
      <Popover
        style={{padding: '1em'}}
        open={this.state.top_left}
        origin={this.refs.top_left}
        position="top-left">top left</Popover>

      <h3>Richer popover</h3>
      <Button
        ref="large_popover"
        onClick={this.toggle('large_popover')}>Click Me</Button>
      <Popover
        style={{padding: '1em'}}
        open={this.state.large_popover}
        origin={this.refs.large_popover}
      >
        <h2>Larger one</h2>
        <p>
          This is a slightly larger popover
          involving more sub elements
        </p>
      </Popover>

    </div>
  }
}
