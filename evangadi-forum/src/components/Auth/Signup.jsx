import React, { useState } from "react";
import { Link } from "react-router-dom";
import styles from "./Auth.module.css";

const Signup = () => {
  const [form, setForm] = useState({
    email: "",
    firstName: "",
    lastName: "",
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
        <h2>Join The Network</h2>
        <form onSubmit={handleSubmit} className={styles.authForm}>
          {/* FIX: Applying the 'styles.authForm input' class to all inputs */}
          <input
            type="email"
            name="email"
            placeholder="Email"
            value={form.email}
            onChange={handleChange}
            required
            className={styles.authForm__input} // Added class
          />
          <input
            type="text"
            name="firstName"
            placeholder="First Name"
            value={form.firstName}
            onChange={handleChange}
            required
            className={styles.authForm__input} // Added class
          />
          <input
            type="text"
            name="lastName"
            placeholder="Last Name"
            value={form.lastName}
            onChange={handleChange}
            required
            className={styles.authForm__input} // Added class
          />
          <input
            type="password"
            name="password"
            placeholder="Password"
            value={form.password}
            onChange={handleChange}
            required
            className={styles.authForm__input} // Added class
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
              .
              {/* The first image links the words 'privacy policy' and 'terms of service', which is good practice. */}
            </label>
          </div>

          {/* The button already uses the styling from .authForm button */}
          <button type="submit">Agree and Join</button>

          <p>
            Already have an account?{" "}
            <Link to="/signin" className={styles.link}>
              Log in
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
};

export default Signup;
