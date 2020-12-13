import React from 'react';

const Message=({ message }) => {
  return (
    <>
      { (message&&message.text!="") ? (message?.isBot ? (
        <li className="self">
          { message?.text}
        </li>
      ) : (
          <li className="other">
            { message?.text}
          </li>
        )
      ) : ""}
      
    </>
  );
};

export default Message;