import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

ReactDOM.render(<div>
	<App text="Hello World"> This is first component </App>
	<App text="I am a component"> This is second component </App>
	<App text="I have been reused !!">  This is third component </App>
	</div>, document.getElementById('root'));
