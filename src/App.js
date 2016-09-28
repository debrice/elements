import React, { Component } from 'react';
import './App.css';

import {
  PopoverExample
} from './examples'

function Paper(props) {
  const style = {
    backgroundColor: 'white',
    margin: '2em',
    padding: '2em',
    borderRadius: '.3em',
    boxShadow: '0 2px 2px 0 rgba(0,0,0,.14),0 3px 1px -2px rgba(0,0,0,.2),0 1px 5px 0 rgba(0,0,0,.12)'
  }
  return <div style={style}>{props.children}</div>
}

class App extends Component {
  render() {
    return <div>
      <h1>BN Elements</h1>

      <Paper>
        <p>
          This is an experiment to re-write BN-components using react components,
          following the recent Front End code practice.
        </p>

        <ul>
          <li>Limited CSS</li>
          <li>Stateless components</li>
        </ul>
      </Paper>

      <Paper>
        <h2>Popover</h2>
        <div> <PopoverExample /></div>
      </Paper>
    </div>
  }
}

export default App;
