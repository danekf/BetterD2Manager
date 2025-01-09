import React, { useEffect } from 'react';
import logo from './logo.svg';
import './App.css';

import Home from './pages/Home/Home';
import SignIn from './pages/SignIn/SignIn';

import { sampleCalc } from './helpers/stats/calculateStats';


type User = {
  bungieName: String;
}

const App = ()=>{

  sampleCalc();

  // user should be set with 0auth login data. This is placeholder until 0auth implemented
  const user: User = {
    bungieName: '',
  };


  return (
    <div className="App">
      {
        user.bungieName ? 
        <Home  user={user}/> :
        <SignIn />
      }
    </div>
  );
}

export default App;
