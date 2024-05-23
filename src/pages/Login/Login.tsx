import React, { useState, useEffect } from 'react';
import axios from 'axios';

interface LoginProps { }

const Login: React.FC<LoginProps> = () => {
  const [authorizationCode, setAuthorizationCode] = useState('');

  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search);
    const codeParam = urlParams.get('code');
    if (codeParam) {
      setAuthorizationCode(codeParam);
    }
  }, []);

  useEffect(() => {
    if (authorizationCode) {
      const tokenEndpoint = 'https://www.bungie.net/platform/app/oauth/token/';
      const headers = {
        'Content-Type': 'application/x-www-form-urlencoded',
        Authorization: `Basic ${btoa(`${process.env.REACT_APP_BUNGIE_CLIENT_ID}:${process.env.REACT_APP_BUNGIE_CLIENT_SECRET}`)}`,
      };
      const data = `grant_type=authorization_code&code=${authorizationCode}&redirect_uri=${process.env.REACT_APP_REDIRECT_URI}`;

      axios.post(tokenEndpoint, data, { headers })
        .then((response) => {
          const accessToken = response.data.access_token;
          // Use the access token to make requests to the Bungie API
        })
        .catch((error) => console.error(error));
    }
  }, [authorizationCode]);

  const handleLogin = () => {
    const authorizationUrl = `https://www.bungie.net/en/oauth/authorize?client_id=${process.env.REACT_APP_BUNGIE_CLIENT_ID}&response_type=code&redirect_uri=${process.env.REACT_APP_REDIRECT_URI}`;
    window.location.href = authorizationUrl;
  };

  return (
    <div>
      <button onClick={handleLogin}>Login with Bungie</button>
    </div>
  );
};

export default Login;