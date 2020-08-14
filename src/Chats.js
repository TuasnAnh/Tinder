import React from "react";
import Chat from "./Chat";
import "./Chats.css";

const Chats = () => {
  return (
    <div className="chats">
      <Chat
        name="Dog"
        message="Woops Woops"
        timestamp="55 seconds ago"
        profilePic="https://www.petplan.com.au/blog/wp-content/uploads/2016/12/pet-insurance-dog-cat-8.jpg"
      />
      <Chat
        name="cat"
        message="Meoww Meoww"
        timestamp="1 days ago"
        profilePic="https://sadanduseless.b-cdn.net/wp-content/uploads/2014/06/funny-cat1.jpg"
      />
    </div>
  );
};

export default Chats;
