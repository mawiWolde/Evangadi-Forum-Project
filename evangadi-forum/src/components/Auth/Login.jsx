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
    // 1. ADDED: Wrapper to correctly position the form on the left
    <div className={styles.authPageWrapper}>
      <div className={styles.authContainer}>
        <h2>Welcome Back</h2>
        <form onSubmit={handleSubmit} className={styles.authForm}>
          {/* 2. ADDED: Class to apply styling for input fields */}
          <input
            type="email"
            name="email"
            placeholder="Email"
            value={credentials.email}
            onChange={handleChange}
            required
            className={styles.authForm__input}
          />
          {/* 2. ADDED: Class to apply styling for input fields */}
          <input
            type="password"
            name="password"
            placeholder="Password"
            value={credentials.password}
            onChange={handleChange}
            required
            className={styles.authForm__input}
          />

          {/* The button and link are already using correct styles: 
              styles.authForm button and styles.link */}
          <button type="submit">Log In</button>

          <p>
            Don’t have an account?{" "}
            <Link to="/signup" className={styles.link}>
              Join the Network
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
};

export default Signin;
