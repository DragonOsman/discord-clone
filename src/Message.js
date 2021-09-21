import React from "react";
import { Avatar } from "@material-ui/core";
import "./Message.css";

function Message() {
  return (
    <div className="message">
      <Avatar />
      <div className="message__info">
        <h4>
          <span className="message__timestamp">Timestamp </span>
          DragonOsman
        </h4>
        <p>Message</p>
      </div>
    </div>
  );
}

export default Message;
