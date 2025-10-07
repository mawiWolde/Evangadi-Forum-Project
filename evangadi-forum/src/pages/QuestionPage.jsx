import React, { useState } from "react";
import styles from "./questionpage.module.css";

function QuestionPage() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await fetch(
        "https://evangadi-forum-backend-project.onrender.com/api/questions",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${localStorage.getItem("token")}`
          },
          body: JSON.stringify({ title, description })
        }
      );

      const data = await res.json();

      if (res.ok) {
        setMessage("Question posted successfully");
        setTitle("");
        setDescription("");
      } else {
        setMessage(data.msg || "Something went wrong");
      }
    } catch (err) {
      setMessage("Failed to connect to server");
    }
  };

  return (
    <div className={styles.container}>
      <h2>Steps to write a good question</h2>
      <ul className={styles.steps}>
        <li>Summarize your problem in a one-line title.</li>
        <li>Describe your problem in detail.</li>
        <li>Explain what you tried and what you expected.</li>
      </ul>

      <div className={styles.formBox}>
        <h3>Ask a public question</h3>
        <p className={styles.link}>Go to Question page</p>
        <form onSubmit={handleSubmit} className={styles.form}>
          <input
            type="text"
            placeholder="Title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className={styles.input}
          />
          <textarea
            placeholder="Question Description..."
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            className={styles.textarea}
          />
          <button type="submit" className={styles.button}>
            Post Your Question
          </button>
        </form>
        {message && <p>{message}</p>}
      </div>
    </div>
  );
}

export default QuestionPage;
