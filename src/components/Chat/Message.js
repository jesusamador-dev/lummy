import React from 'react';

const Message=({ message }) => {
  return (
    <>
      { (message&&message.text!=="") ? (message?.isBot ? (
        <li className="message self">
          { message?.text}
        </li>
      ) : (
          <li className="message other">
            { message?.text}
          </li>
        )
      ) : ""}
      
    </>
  );
};

export default Message;