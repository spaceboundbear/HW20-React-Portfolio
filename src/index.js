import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import ParticlesBg from 'particles-bg';
import 'bootstrap/dist/css/bootstrap.min.css';

ReactDOM.render(
  <BrowserRouter>
    <App />
    <ParticlesBg type="cobweb" bg={true} />
  </BrowserRouter>,
  document.getElementById('root')
);
