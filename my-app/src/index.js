import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

// const elem = <h2>Hello world!</h2>;

const elem = React.createElement('h2', {className: 'greeting'}, 'Hello world!')


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
 elem
);
