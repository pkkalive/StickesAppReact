import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Note from './Note';
import Board from './Board';

// ReactDOM.render(<Note>Hello World</Note>, document.getElementById('react-container'));
ReactDOM.render(<Board count = {10}></Board>, document.getElementById('react-container'));
