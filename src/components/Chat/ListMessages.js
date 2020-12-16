import React, { useContext } from "react";
import Message from "./Message";
import ChatContext from "../../contexts/ChatContext";

const ListMessages=({ messages, scroll, sending }) => {
  const chatContext = useContext(ChatContext);

  const sendMessage = (text) => {
    chatContext.toggleChatOpen(true);
    chatContext.setSending(true);
    const message = {
      text,
      isBot: false
    };
   chatContext.setResponses(responses => [...responses, message]);
  }

  const message = {
    isBot: true,
    text: "Hola, ¿en qué puedo ayudarte?"
  }
  return (
    <ul className="messages" ref={scroll}>
      { messages&&messages.length > 1 ? (
        messages.map(message => {
          return (
            <Message message={message} sending={ sending } />
          );
        })
      ) : (
        <>
          <Message message={message} sending={ sending } />
          <div className="options">
            <button onClick={() => { sendMessage("Quiero hacer un pedido 😍") }}>Quiero hacer un pedido 😍</button>
            <button onClick={() => { sendMessage("Necesito una reservación 🥰") }}>Necesito una reservación 🥰</button>
            <button onClick={() => { sendMessage("Tengo otra duda 😬") }}>Tengo otra duda 😬</button>
          </div>
        </>
      )}
      { sending ? (
        <li className="spinner-container">
          <div class="sk-chase">
            <div class="sk-chase-dot"></div>
            <div class="sk-chase-dot"></div>
            <div class="sk-chase-dot"></div>
            <div class="sk-chase-dot"></div>
            <div class="sk-chase-dot"></div>
            <div class="sk-chase-dot"></div>
          </div>
        </li>
      ) : ""}
    </ul>
  );
};

export default ListMessages;