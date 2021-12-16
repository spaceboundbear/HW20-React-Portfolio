import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import ParticlesBg from 'particles-bg';
import 'bootstrap/dist/css/bootstrap.min.css';

ReactDOM.render(
  <div>
    <App />
    <ParticlesBg type="cobweb" bg={true} />
  </div>,
  document.getElementById('root')
);
