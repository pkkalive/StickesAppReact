import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Note from './Note';

class Board extends Component {
  constructor() {
    super();
    this.state = {
        notes: [
          {id: 0, note: 'Learn HTMl Semantics'},
          {id: 1, note: 'Learn JavaScript'},
          {id: 2, note: 'Become Expert in JavaScript'},
          {id: 3, note: 'Learn React'}
        ]
    };
    this.update = this.update.bind(this);
    this.remove = this.remove.bind(this);
    this.eachNote = this.eachNote.bind(this);
  }
  update(newText, id) {
    var notes = this.state.notes.map(
      note => (note.id !== id) ?
      note :
        {
          ...note,
          note: newText
        }
      )
      this.setState({notes})
    }
    remove(id) {
      var notes = this.state.notes.filter(note => note.id !== id)
      this.setState({notes})
    }
    eachNote(note) {
      return (
        <Note key={note.id}
          id={note.id}
          onChange={this.update}
          onRemove={this.remove}>
          {note.note}
        </Note>
      )
    }
    render() {
      return (<div className='board'>
      {this.state.notes.map(this.eachNote)}
      </div>)
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
