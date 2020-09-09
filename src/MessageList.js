import React from "react";

const MessageList = ({ data }) => (
  <div>
    <ul>
      {data.map((message) => <li key={message}>{message}</li>)}
    </ul>
  </div>
);

export default MessageList;
