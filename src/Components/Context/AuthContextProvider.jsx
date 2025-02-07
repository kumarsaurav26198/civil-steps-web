import React, { createContext, useState, useEffect } from "react";

export const AuthContext = createContext();

const AuthContextProvider = ({ children }) => {
 const [isAuth, setIsAuth] = useState(false);
 const [token, setToken] = useState(null);

 useEffect(() => {
  const storedToken = localStorage.getItem("token");
  if (storedToken) {
   setToken(storedToken);
   setIsAuth(true);
  }
 }, []);
 return (
  <AuthContext.Provider value={{ isAuth, setIsAuth, token, setToken }}>
   {children}
  </AuthContext.Provider>
 );
};

export default AuthContextProvider;

// import { createContext, useState, useEffect } from "react";

// export const AuthContext = createContext();

// function AuthContextProvider({ children }) {
//  const [isAuth, setIsAuth] = useState(
//   () => sessionStorage.getItem("isAuth") === "true"
//  );
//  const [token, setToken] = useState(sessionStorage.getItem("token") || "");

//  useEffect(() => {
//   sessionStorage.setItem("isAuth", isAuth);
//  }, [isAuth]);

//  useEffect(() => {
//   sessionStorage.setItem("token", token);
//  }, [token]);

//  const toggleAuth = () => {
//   setIsAuth((prevIsAuth) => !prevIsAuth);
//  };

//  return (
//   <AuthContext.Provider
//    value={{
//     isAuth,
//     setIsAuth,
//     toggleAuth,
//     token,
//     setToken,
//    }}
//   >
//    {children}
//   </AuthContext.Provider>
//  );
// }

// export default AuthContextProvider;
