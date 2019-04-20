import React, { Component } from 'react';
import ReactDOM from 'react-dom';

export default class Example extends Component {
  constructor(props) {
    super(props);
    this.state = {
      toggle: true,
    };
  }

  handleToggle = () => {
    if (this.state.toggle) {
      alert('hey!');
    }
  };
  render() {
    return (
      <div className="container">
        <button onClick={() => this.handleToggle()}>button</button>
      </div>
    );
  }
}

if (document.getElementById('example')) {
  ReactDOM.render(<Example />, document.getElementById('example'));
}
