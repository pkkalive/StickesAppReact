import React, { Component } from 'react';
import './App.css';

class App extends Component {
  render() {
    return (
      <div id="new">
        <p align="center">{this.props.text}</p>
          <div id="mynew">
              <ul>
                  <li>{this.props.children}</li>
                  <li>Item 2</li>
                  <li>Item 3</li>
              </ul>
          </div>
      </div>
    );
  }
}

export default App;
