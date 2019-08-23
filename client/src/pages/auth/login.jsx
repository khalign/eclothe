import React from "react";

import SignIn from "../../components/auth/sign-in";
import SignUp from "../../components/auth/sign-up";

import "./auth.scss";

const Login = () => (
  <div className="login">
    <SignIn />
    <SignUp />
  </div>
);

export default Login;
