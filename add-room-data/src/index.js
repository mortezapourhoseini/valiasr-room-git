import React from 'react';
import ReactDOM from 'react-dom';
import App from './Components/App';
import './index.css';
import { BrowserRouter } from 'react-router-dom';

ReactDOM.render(
      <BrowserRouter>
        <App />
      </BrowserRouter>,
  document.getElementById('root')
);
