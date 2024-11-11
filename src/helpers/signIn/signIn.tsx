import axios from "axios";

//creates a state parameter which must be verified and stored for CORS purposes.
const createStateParameter = () => {
  https://auth0.com/docs/secure/attack-protection/state-parameters

  //temp, must create more dynamically
  return '43qwfpcglq';
};

const auth0SignIn = async () => {

  const stateParam: string = createStateParameter();

  const API_KEY = process.env.REACT_APP_BUNGIE_API_KEY;
  const AUTH0_CLIENT_ID = process.env.REACT_APP_CLIENT_ID;
  const AUTH_URL = process.env.REACT_APP_AUTH_URL;
  const REDIRECT_URL = process.env.REACT_APP_REDIRECTURL;
  const TOKEN_URL = process.env.REACT_APP_TOKEN_URL;


  const requestURI:string = AUTH_URL + `?client_id=${AUTH0_CLIENT_ID}&response_type=code&state=${stateParam}`;

  //attempt sign in
    //https://github.com/Bungie-net/api/wiki/OAuth-Documentation
    //https://www.npmjs.com/package/axios-oauth-client

    //https://paracausal.science/guide/oauth/access-token
    //https://clerk.com/blog/oauth2-react-user-authorization
    //https://www.youtube.com/watch?v=IcES0K5VCns
  
  console.log('requesting');
  axios.get(requestURI)
    .then((response)=>console.log(response));


    //set authToken as per response from loginAttempt
    const authToken: string = 'test';

  //set token in session storage
  if(authToken){
    sessionStorage.setItem('auth_token', authToken)
  };
}

type SignIn = "0auth" | "secretDevNone";

export const signIn = (signInType: SignIn) => {
  console.log(signInType);

  if(signInType==="0auth"){
    auth0SignIn();
  };
}