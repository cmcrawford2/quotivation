import React from "react";

export default function Message({ messageText, removeMessage }) {
  return (
    <div className="message">
      <p>{messageText}</p>
      <span className="close-message" onClick={removeMessage}>
        X
      </span>
    </div>
  );
}
