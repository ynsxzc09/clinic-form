import React, { useState } from 'react';

function useToken() {
 const getToken = () => {
    const tokenString = localStorage.getItem("token");
    const userToken = JSON.parse(tokenString);
    return userToken?.token;
   } 

   const [token, setToken] = useState(getToken());

   const storeToken = (user) => {
    localStorage.setItem("token", JSON.stringify(user));

    setToken(user);
  };
  
  return {
    setToken: storeToken,
    token,
  };
}

export default useToken;