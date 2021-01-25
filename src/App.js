import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { dataUserLoggedIn } from './store/actions/users'
import Main from './components/Main';
import { BrowserRouter } from 'react-router-dom';
import './App.css';


function App() {
  // const dispatch = useDispatch();
  // useEffect(() => {
  //   if (localStorage.getItem('token')){
  //     dispatch(dataUserLoggedIn());
  //   }
  // }, []);
  return (
    <div className="App">
      <BrowserRouter>
        <Main />
      </BrowserRouter>
    </div>
  );

}

export default App;
