import React, { useEffect, useState } from 'react';
import Router from '../src/routes/router';
import Header from '../src/components/Header';
import Footer from '../src/components/Footer';
import { BrowserRouter } from 'react-router-dom';
import './App.css';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Router />
        <Footer />
      </BrowserRouter>
    </div>
  );

}

export default App;
