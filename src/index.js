import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App2 from './App2';
//import App1 from './App1';
//import App from './App';
import * as serviceWorker from './serviceWorker';

//ReactDOM.render(<App />, document.getElementById('root'));
//ReactDOM.render(<App1/>, document.getElementById('root'));
ReactDOM.render(<App2 />, document.getElementById('root'));
serviceWorker.unregister();
