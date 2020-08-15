import React, { useState } from "react";
import "./ChatScreen.css";
import Avatar from "@material-ui/core/Avatar";

const ChatScreen = () => {
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState([
    {
      name: "Cat",
      image:
        "https://sadanduseless.b-cdn.net/wp-content/uploads/2014/06/funny-cat1.jpg",
      message: "meowww",
    },
    {
      name: "Cat",
      image:
        "https://sadanduseless.b-cdn.net/wp-content/uploads/2014/06/funny-cat1.jpg",
      message: "meowwwwwwww",
    },
    {
      message: "zzz",
    },
  ]);

  return (
    <div className="chatScreen">
      {messages.map((message) =>
        message.name ? (
          <div className="chatScreen_message">
            <Avatar
              className="chatScreen_image"
              src={message.image}
              alt={message.name}
            ></Avatar>
            <p className="chatScreen_text">{message.message}</p>
          </div>
        ) : (
          <div className="chatScreen_message">
            <p className="chatScreen_userMessage">{message.message}</p>
          </div>
        )
      )}

      <form className="chatScreen_input">
        <input
          value={input}
          onChange={(e) => setInput(e.target.value)}
          className="chatScreen_inputField"
          type="text"
          placeholder="Type a message ..."
        />
        <button
          className="chatSCreen_inputButton"
          onClick={(e) => {
            e.preventDefault();
            setMessages([...messages, { message: input }]);
            setInput("");
          }}
        >
          SEND
        </button>
      </form>
    </div>
  );
};

export default ChatScreen;
