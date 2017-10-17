import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Note from './Note';

class Board extends Component {
  constructor() {
    super();
    this.state = {
        notes: [
          'Learn HTMl Semantics',
          'Learn JavaScript',
          'Become Expert in JavaScript',
          'Learn React'
        ]
    };
  }
  render() {
    return (
      <div className="board">
        {this.state.notes.map((note, i) => {
          return <Note key={i}>{note}</Note>
        })}
      </div>
    )
  }
}

Board.propTypes = {
  count : function (props, propName) {
    if (typeof props[propName] !== "number") {
      return new Error("the count must be a number")
    }
    if (props[propName] >= 100) {
      return new Error("You have requested to create "+ props[propName] + " notes. Creating too much notes is rediculous.")
    }
  }
}

export default Board;
