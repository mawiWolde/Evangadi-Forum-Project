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
    <div className={styles.authContainer}>
      <h2>Join The Network</h2>
      <form onSubmit={handleSubmit} className={styles.authForm}>
        <input
          type="email"
          name="email"
          placeholder="Email"
          value={form.email}
          onChange={handleChange}
          required
        />
        <input
          type="text"
          name="firstName"
          placeholder="First Name"
          value={form.firstName}
          onChange={handleChange}
          required
        />
        <input
          type="text"
          name="lastName"
          placeholder="Last Name"
          value={form.lastName}
          onChange={handleChange}
          required
        />
        <input
          type="password"
          name="password"
          placeholder="Password"
          value={form.password}
          onChange={handleChange}
          required
        />

        <div className={styles.checkbox}>
          <input type="checkbox" id="agree" required />
          <label htmlFor="agree">
            I agree to the privacy policy and terms of service.
          </label>
        </div>

        <button type="submit">Agree and Join</button>

        <p>
          Already have an account?{" "}
          <Link to="/signin" className={styles.link}>
            Log in
          </Link>
        </p>
      </form>
    </div>
  );
};

export default Signup;
