import React from "react";
import Message from "./Message";

const ListMessages=({ messages, scroll, sending }) => {
  // sending=true;
  return (
    <ul className="messages" ref={scroll}>
      { messages ? (
        messages.map(message => {
          return (
            <Message message={message} sending={ sending } />
          );
        })
      ):""}
      { sending? (
        <li className="spinner-container">
        <div className="spinner">
          <div className="rect1"></div>
          <div className="rect2"></div>
          <div className="rect3"></div>
          <div className="rect4"></div>
          <div className="rect5"></div>
        </div>
        </li>
      ) : ""}
    </ul>
  );
};

export default ListMessages;