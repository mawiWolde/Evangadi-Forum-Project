import React, { useState } from "react";
import styles from "./questionpage.module.css";
import { FaArrowCircleRight } from "react-icons/fa";

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
      <div className={styles.steps}>
        <h2>Steps To Write A Good Question.</h2>
        <ul>
          <li>
            <FaArrowCircleRight className={styles.icon} /> Summarize your
            problems in a one-line-title.
          </li>
          <li>
            <FaArrowCircleRight className={styles.icon} /> Describe your problem
            in more detail.
          </li>
          <li>
            <FaArrowCircleRight className={styles.icon} /> Describe what you
            tried and what you expected to happen.
          </li>
          <li>
            <FaArrowCircleRight className={styles.icon} /> Review your question
            and post it here.
          </li>
        </ul>
      </div>

      <div className={styles.formBox}>
        <h3>Post Your Question</h3>
        <form onSubmit={handleSubmit} className={styles.form}>
          <input
            type="text"
            placeholder="Question title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className={styles.input}
          />
          <textarea
            placeholder="Question detail ..."
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            className={styles.textarea}
          />
          <button type="submit" className={styles.button}>
            Post Question
          </button>
        </form>
        {message && <p>{message}</p>}
      </div>
    </div>
  );
}

export default QuestionPage;
