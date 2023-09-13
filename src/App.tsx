import React from 'react';
import logo from './logo.svg';
import './App.css';

import Home from './pages/Home/Home';

type User = {
  bungieName: String;
}

const App = ()=>{

  // user should be set with 0auth login data. This is placeholder until 0auth implemented
  const user: User = {
    bungieName: '',
  };


  return (
    <div className="App">
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
