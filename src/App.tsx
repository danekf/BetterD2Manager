import React, { useEffect } from 'react';
import logo from './logo.svg';
import './App.css';

import Home from './pages/Home/Home';
import getInfo from './helpers/getInfo/getInfo';


type User = {
  bungieName: String;
}

const App = ()=>{

  // user should be set with 0auth login data. This is placeholder until 0auth implemented
  const user: User = {
    bungieName: '',
  };

  const apiKey: string = (process.env.REACT_APP_BUNGIE_API_KEY as string);




  

  return (
    <div className="App">
      <button className="getGjally" onClick={()=>getInfo(apiKey)}>Get Gjally</button>
      {
        user.bungieName ? 
          <Home  user={user}/> :
          <header className="App-header">
            <button className="signIn" id='signIn'>Sign in</button>
          </header>
      }
    </div>
  );
}

export default App;
