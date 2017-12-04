import React from 'react';
import ReactDOM from 'react-dom';
import Header from './Header';
import Home from './Home';
import Footer from './Footer';
import './resources/index.css';

ReactDOM.render(
  <div className="main">
  <Header />
  <Home />
  <Footer />
  </div>
  , document.getElementById('root')
);
