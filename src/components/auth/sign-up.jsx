import React, { useState } from "react";

import { auth, createUser } from "../../utils/firebase";

import Input from "../form/input";
import Button from "../form/button";

import "./auth.scss";

const SignUp = () => {
  const [credentials, setCredentials] = useState({
    displayName: "",
    email: "",
    password: "",
    confirmPassword: ""
  });

  const { displayName, email, password, confirmPassword } = credentials;

  const handleSubmit = async event => {
    event.preventDefault();

    if (password !== confirmPassword) {
      alert("Passwords do not match");
      return;
    }

    try {
      const { user } = await auth.createUserWithEmailAndPassword(
        email,
        password
      );
      await createUser(user, { displayName });
      setCredentials({
        displayName: "",
        email: "",
        password: "",
        confirmPassword: ""
      });
    } catch (error) {
      console.log(error);
    }
  };

  const handleChange = event => {
    let { value, name } = event.target;

    setCredentials({ ...credentials, [name]: value });
  };

  return (
    <div className="sign">
      <h2 className="title">I do not have an account</h2>
      <span>Sign in with your email and password</span>

      <form onSubmit={handleSubmit}>
        <Input
          required
          type="text"
          name="displayName"
          label="Display Name"
          value={displayName}
          onChange={handleChange}
        />

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

        <Input
          required
          type="password"
          name="confirmPassword"
          label="Confirm Password"
          value={confirmPassword}
          onChange={handleChange}
        />

        <Button type="submit">Sign Up</Button>
      </form>
    </div>
  );
};

export default SignUp;
