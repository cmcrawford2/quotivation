import React, { useEffect } from "react";

export default function Message({ messageText, removeMessage }) {
  useEffect(() => {
    let milliSeconds = 50 * messageText.length;
    if (milliSeconds < 1500) milliSeconds = 1500;
    const timeoutId = setTimeout(() => {
      removeMessage();
    }, milliSeconds);
    window.setTimeout(timeoutId);
    return () => window.clearTimeout(timeoutId);
  });

  return (
    <div className="message">
      <p>{messageText}</p>
      <span className="close-message" onClick={removeMessage}>
        X
      </span>
    </div>
  );
}
