import React, { Component } from 'react';

class Note extends Component {
  constructor() {
        super();
        this.state = {editing: false };
        this.edit = this.edit.bind(this);
        this.save = this.save.bind(this);
        this.remove = this.remove.bind(this);
        this.renderForm = this.renderForm.bind(this);
        this.renderDisplay = this.renderDisplay.bind(this);
  }
  edit(){
    this.setState({editing: true});
  }
  save(){
    var newValue = this.refs.newText.value
    alert("I will be saving this value: " + newValue)
    this.setState({editing: false});
  }
  remove(){
    alert("I am going to remove note")
  }
  renderForm(){
    return (
      <div className="note">
        <textarea ref="newText"></textarea>
        <button onClick = {this.save}>SAVE</button>
      </div>
    );
  }
  renderDisplay(){
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
  render() {
    return (this.state.editing) ? this.renderForm(): this.renderDisplay()
  }
}

export default Note;
