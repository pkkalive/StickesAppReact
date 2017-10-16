import React, { Component } from 'react';
import './Note.css';

class Note extends Component {
  edit(){
    alert("I am going to edit note")
  }
  remove(){
    alert("I am going to remove note")
  }
  render() {
    return (
      <div className="note">
        <p>{this.props.children}</p>
        <span>
          <button onClick = {this.edit}>EDIT</button>
          <button onClick = {this.remove}>X</button>
        </span>
      </div>
    );
  }
}

export default Note;
