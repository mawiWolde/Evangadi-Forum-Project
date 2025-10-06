import React from "react";
import styles from "../PrivacyPolicy/PrivacyPolicy.module.css";

const PrivacyPolicy = () => {
  return (
    <div className={styles.privacyContainer}>
      <h1>Privacy Policy</h1>
      <p><strong>Effective Date:</strong> September 26, 2019</p>

      <p>
        Evangadi.com (“we,” “our,” or “us”) respects your privacy. 
        This Privacy Policy explains how we collect, use, and share information 
        about you when you use our website, communities, and mobile applications.
      </p>

      <h2>Information We Collect</h2>
      <ul>
        <li>Personal information such as name, email, and phone number when you register.</li>
        <li>Content you post, including comments, questions, and discussions.</li>
        <li>Technical data like IP address, browser type, and device information.</li>
      </ul>

      <h2>How We Use Your Information</h2>
      <p>We use the information we collect to:</p>
      <ul>
        <li>Provide and improve our services.</li>
        <li>Communicate with you about updates and support.</li>
        <li>Monitor safe and respectful use of the platform.</li>
      </ul>

      <h2>Sharing of Information</h2>
      <p>
        We do not sell your personal information. 
        We may share information only with trusted partners or as required by law.
      </p>

      <h2>Cookies</h2>
      <p>
        Evangadi.com uses cookies to improve user experience, 
        remember your preferences, and analyze traffic.
      </p>

      <h2>Your Rights</h2>
      <p>
        You have the right to access, update, or delete your personal information. 
        To exercise these rights, contact us at <a href="mailto:support@evangadi.com">support@evangadi.com</a>.
      </p>

      <h2>Security</h2>
      <p>
        We take reasonable steps to protect your information, 
        but no method of transmission or storage is 100% secure.
      </p>

      <h2>Changes to This Policy</h2>
      <p>
        We may update this Privacy Policy from time to time. 
        Continued use of Evangadi.com after changes means you accept the new policy.
      </p>

      <h2>Contact Us</h2>
      <p>
        If you have any questions about this Privacy Policy, 
        please email us at <a href="mailto:support@evangadi.com">support@evangadi.com</a>.
      </p>
    </div>
  );
};

export default PrivacyPolicy; //