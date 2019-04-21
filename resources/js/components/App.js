import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Router from './Router';

export default class App extends Component {
  render() {
    return (
      <div>
        <Router />
      </div>
    );
  }
}

if (document.getElementById('kimschool')) {
  ReactDOM.render(<App />, document.getElementById('kimschool'));
}
