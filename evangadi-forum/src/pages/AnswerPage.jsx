import React, { useState } from "react";
import "./AnswerPage.css";
import Answer from "../Components/Answer";

const AnswerPage = () => {
  const [answer, setAnswer] = useState("");
  const [answers, setAnswers] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (answer.trim() === "") return;

    const newAnswer = { text: answer, username: "You" };
    setAnswers([newAnswer, ...answers]);

    setAnswer("");
  };

  return (
    <div className="qa-container">

      {/* Main Content */}
      <div className="main-content">
        {/* Question */}
        <div className="question-box">
          <h2>Question</h2>
          <p className="main-question">What is React Router?</p>
          <p className="sub-question">Explain its purpose in React apps.</p>
        </div>

        {/* Community Answers */}
        <div className="community-answer">
          <hr />
          <h3>Answer From The Community</h3>
          <hr />
          {answers.map((ans, index) => (
            <Answer key={index} answer={ans} />
          ))}
        </div>

        {/* Answer Box */}
        <div className="answer-box">
          <h3>Answer The Top Question</h3>
          <p className="link">Go to Question page</p>
          <form onSubmit={handleSubmit}>
            <textarea
              value={answer}
              onChange={(e) => setAnswer(e.target.value)}
              placeholder="Your Answer..."
            />
            <button type="submit" className="submit-btn">
              Post Your Answer
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AnswerPage;
