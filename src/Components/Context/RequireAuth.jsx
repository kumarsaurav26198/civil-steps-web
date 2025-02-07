import React from "react";
import { Navigate, useLocation } from "react-router-dom";

const RequireAuth = ({ children }) => {
 // console.log("children:", children);
 const location = useLocation();
 const isAuth = localStorage.getItem("isAuth");
 //  console.log("isAuth in require component", isAuth);
 if (!isAuth) {
  return <Navigate to="/login" replace state={{ data: location.pathname }} />;
 }
 return children;
};
export default RequireAuth;
