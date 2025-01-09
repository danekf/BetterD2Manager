import React, { useEffect, useState, } from 'react';

import getInfo from "../../helpers/getInfo/getInfo";
import { signIn } from '../../helpers/signIn/signIn';

type SignInProps = {
  
}


const SignIn:React.FC<SignInProps> = () => {

  return(
    <header className="App-header">
      <button className="signIn" id='signIn' onClick={()=>signIn('0auth')}>Sign in with auth0</button>
      <button className="signIn" id='signIn' onClick={()=>signIn('secretDevNone')}>Sign in with SecretDevAuth</button>
  </header>
  )
};

export default SignIn

