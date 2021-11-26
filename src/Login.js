import React from "react";
import "./Login.css";
import logo from "./img/logo.png";
import { Button } from "@material-ui/core";
import { auth, provider } from "./firebase";

const Login = () => {
  const signIn = () => {
    auth.signInWithPopup(provider).catch((error) => alert(error.message));
  };

  return (
    <div className="login">
      <div className="login__logo">
        <img src={logo} className="login__img" />
      </div>
      <Button onClick={signIn}>Sign In</Button>
    </div>
  );
};
export default Login;
