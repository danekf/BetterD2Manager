import React, { useEffect, useState, } from 'react';


import { signIn } from '../../helpers/signIn/signIn';
import { getSpecificItemInfo } from '../../helpers/getInfo/getInfo';

type SignInProps = {
  
}


const SignIn:React.FC<SignInProps> = () => {

  //test get gjally info from backend.
  getSpecificItemInfo(1274330687);

  return(
    <header className="App-header">
      <button className="signIn" id='signIn' onClick={()=>signIn('0auth')}>Sign in with auth0</button>
      <button className="signIn" id='signIn' onClick={()=>signIn('secretDevNone')}>Sign in with SecretDevAuth</button>
  </header>
  )
};

export default SignIn

