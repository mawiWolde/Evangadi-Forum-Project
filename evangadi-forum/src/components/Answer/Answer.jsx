import { FaUserCircle } from "react-icons/fa"; // user icon
import "./Answer.css";

function Answer({ answer }) {
  return (
    <div className="answer-card">
      <div className="answer-header">
        {answer?.userAvatar ? (
          <img
            src={answer.userAvatar}
            alt="User avatar"
            className="avatar-img"
          />
        ) : (
          <FaUserCircle size={40} className="avatar-icon" />
        )}
        <h4 className="answer-username">{answer?.username || "Anonymous"}</h4>
      </div>

      <div className="answer-body">
        <p>{answer?.text || "No answer provided."}</p>
      </div>
    </div>
  );
}

export default Answer;
