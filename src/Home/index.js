import React from 'react';

import Button from 'react-bootstrap/Button';
import { useCookies } from 'react-cookie';

function Home() {
  const [cookies, , removeCookie] = useCookies(["token"]);

  const logOut = () => {
    removeCookie("token");
  }

  return (
    <>
      <h1>Hello User!</h1>
      <p>Your API token is {cookies.token}</p>
      <Button variant="link" onClick={logOut}>Log Out</Button>
    </>
  );
}

export default Home;
