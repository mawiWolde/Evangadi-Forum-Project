import React, { useState } from "react";
import { Link } from "react-router-dom";
import styles from "./Auth.module.css";

const Signup = () => {
  const [form, setForm] = useState({
    username: "",
    firstName: "",
    lastName: "",
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Signup data:", form);
  };

  return (
    <div className={styles.authPageWrapper}>
      <div className={styles.authContainer}>
        <h2>Join the network</h2>
        <p>
          Already have an account?{" "}
          <Link to="/signin" className={styles.linkOrange}>
            Sign in
          </Link>
        </p>

        <form onSubmit={handleSubmit} className={styles.authForm}>
          <input
            type="text"
            name="username"
            placeholder="Username"
            value={form.username}
            onChange={handleChange}
            required
            className={styles.authForm__input}
          />

          <div className={styles.nameRow}>
            <input
              type="text"
              name="firstName"
              placeholder="First name"
              value={form.firstName}
              onChange={handleChange}
              required
              className={styles.authForm__input}
            />
            <input
              type="text"
              name="lastName"
              placeholder="Last name"
              value={form.lastName}
              onChange={handleChange}
              required
              className={styles.authForm__input}
            />
          </div>

          <input
            type="email"
            name="email"
            placeholder="Email address"
            value={form.email}
            onChange={handleChange}
            required
            className={styles.authForm__input}
          />

          <input
            type="password"
            name="password"
            placeholder="Password"
            value={form.password}
            onChange={handleChange}
            required
            className={styles.authForm__input}
          />

          <div className={styles.checkbox}>
            <input type="checkbox" id="agree" required />
            <label htmlFor="agree">
              I agree to the{" "}
              <Link to="/privacy" className={styles.link}>
                privacy policy
              </Link>{" "}
              and{" "}
              <Link to="/terms" className={styles.link}>
                terms of service
              </Link>
            </label>
          </div>

          <button type="submit" className={styles.submitButton}>
            Agree and Join
          </button>

          <p className={styles.bottomText}>
            Already have an account?{" "}
            <Link to="/signin" className={styles.linkOrange}>
              Already have an account?
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
};

export default Signup;
