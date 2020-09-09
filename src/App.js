import React, { useState } from "react";
import NewMessageFrom from "./NewMessageFrom";
import MessageList from "./MessageList";

function App() {
  const [messages, setMessages] = useState([]);

  const handleSend = (newMessage) => {
    setMessages([newMessage, ...messages]);
  };

  return (
    <div>
      <NewMessageFrom onSend={handleSend} />
      <MessageList data={messages} />
    </div>
  );
}

export default App;
