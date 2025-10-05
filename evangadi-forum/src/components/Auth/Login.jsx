// src/components/Auth/Signin.jsx
import React, { useState } from "react";
import { Link } from "react-router-dom";
import styles from "./Auth.module.css";

const Signin = () => {
  const [credentials, setCredentials] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setCredentials({ ...credentials, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Signin data:", credentials);
  };

  return (
    <div className={styles.authContainer}>
      <h2>Welcome Back</h2>
      <form onSubmit={handleSubmit} className={styles.authForm}>
        <input
          type="email"
          name="email"
          placeholder="Email"
          value={credentials.email}
          onChange={handleChange}
          required
        />
        <input
          type="password"
          name="password"
          placeholder="Password"
          value={credentials.password}
          onChange={handleChange}
          required
        />
        <button type="submit">Log In</button>
        <p>
          Don’t have an account?{" "}
          <Link to="/signup" className={styles.link}>
            Join the Network
          </Link>
        </p>
      </form>
    </div>
  );
};

export default Signin;
