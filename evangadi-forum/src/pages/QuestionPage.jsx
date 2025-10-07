import React, { useState } from "react";
import styles from "./questionpage.module.css";

function QuestionPage() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log({ title, description });
    setTitle("");
    setDescription("");
  };

  return (
    <div className={styles.container}>
      <div className={styles.steps}>
        <h2>Steps to write a good question</h2>
        <ul>
          <li>Summarize your problem in a one-line title.</li>
          <li>Describe your problem in more detail.</li>
          <li>Describe what you tried and what you expected to happen.</li>
          <li>Review your question and post it to the site.</li>
        </ul>
      </div>

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
      </div>
    </div>
  );
}

export default QuestionPage;
