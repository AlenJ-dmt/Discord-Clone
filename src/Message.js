import React from "react";
import "./Message.css";
import { Avatar } from "@material-ui/core";

const Message = ({ timestamp, user, message }) => {
  return (
    <div className="message">
      {console.log(timestamp)}
      <Avatar src={user.photo} />
      <div className="message__info">
        <h4>
          {user.displayName}
          <span className="message__timeStamp">
            {new Date(timestamp?.toDate()).toUTCString()}
          </span>
        </h4>
        <p>{message}</p>
      </div>
    </div>
  );
};

export default Message;
