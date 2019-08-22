import React, { useState } from "react";

import { auth, signInWithGoogle } from "../../utils/firebase";

import Input from "../form/input";
import Button from "../form/button";

import "./auth.scss";

const SignIn = () => {
  const [credentials, setCredentials] = useState({ email: "", password: "" });

  const { email, password } = credentials;

  const handleSubmit = async event => {
    event.preventDefault();

    try {
      await auth.signInWithEmailAndPassword(email, password);
      setCredentials({ email: "", password: "" });
    } catch (error) {
      console.log("error signing in" + error);
    }
  };

  const handleChange = event => {
    const { value, name } = event.target;

    setCredentials({ ...credentials, [name]: value });
  };

  return (
    <div className="sign">
      <h2 className="title">I already have an account</h2>
      <span>Sign in with your email and password</span>

      <form onSubmit={handleSubmit}>
        <Input
          required
          type="email"
          name="email"
          label="Email"
          value={email}
          onChange={handleChange}
        />

        <Input
          required
          type="password"
          name="password"
          label="Password"
          value={password}
          onChange={handleChange}
        />

        <div className="buttons">
          <Button type="submit">Sign in</Button>

          <Button google onClick={signInWithGoogle}>
            Sign in with Google
          </Button>
        </div>
      </form>
    </div>
  );
};

export default SignIn;
