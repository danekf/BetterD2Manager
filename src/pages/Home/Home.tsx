import React, { useState, } from 'react';


type User = {
  bungieName: String;
}

type HomeProps = {
  user: User;
}

//could also use Home = ({user} : HomeProps) =>, but this is more explicit.
const Home: React.FC<HomeProps> = ({user}) => {


  return (
    <div className="Home">
      {user.bungieName}
    </div>
  )
};

export default Home