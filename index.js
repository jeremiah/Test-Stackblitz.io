import React, { Component } from 'react';
import { render } from 'react-dom';
import Hello from './Hello';
import './style.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      name: 'foo      '
    };
  }

  render() {
    return (
      <div>
        <Hello name={this.state.name} />
        <p>
          Now need to create a React app. :P
        </p>
      </div>
    );
  }
}

render(<App />, document.getElementById('root'));
