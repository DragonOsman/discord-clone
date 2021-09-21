import React from "react";
import Button from "@material-ui/core/Button";
import { auth, provider, signInWithPopup } from "./firebase";
import "./Login.css";

function Login() {
  const signIn = () => {
    signInWithPopup(auth, provider).catch(error => alert(error.message));
  };

  return (
    <div className="login">
      <div className="login__logo">
        <img
          src="../kisspng-portable-network-graphics-computer-icons-transpare-braingoodgames-5c9d9c5093e378.8617067815538330406058.png"
          alt="Discord Logo"
        />
        <Button onClick={signIn}>Sign In</Button>
      </div>
    </div>
  );
}

export default Login;
