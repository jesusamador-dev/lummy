import React, { useState, useRef } from "react";
import ListMessages from "./ListMessages";
import imgSend from '../../images/send.svg';
import imgClose from '../../images/cerrar.svg';
import imgChat from '../../images/chat.svg';

const Chat = props => {
  const scrollMessages = useRef(null);
  const [isOpen, setIsOpen] = useState(false);
  const [sending, setSending] = useState(false);
  const [responses, setResponses] = useState([{text: "", isBot: false}]);
  const [currentMessage, setCurrentMessage] = useState("");

  const handleMessageSubmit = message => {
    const data = {
      message
    };
    const config={
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    };
    fetch("https://lummy-api.herokuapp.com/talk", config)
      .then(response => response.json())
      .then(res => {
        const message = res.message;
        const responseData = {
          text: message.fulfillmentText != "" ? message.fulfillmentText : "Lo siento, no entendí. ¿Podrías ser más claro?",
          isBot: true
        };
          setResponses(responses => [...responses, responseData]);
          executeScroll();
          setSending(false);

      })
      .catch(error => {
        console.log("Error: ", error);
      });
  };

  const handleMessageChange = event => {
    setCurrentMessage(event.target.value);
  };

  const executeScroll = () => {
    scrollMessages.current.scrollTop = scrollMessages.current.scrollHeight;
  };

  const handleSubmit = event => {
    const message = {
      text: currentMessage,
      isBot: false
    };
    if (event.key=="Enter" || event.type == "click") {
      setSending(true);
      setResponses(responses => [...responses, message]);
      executeScroll();
      handleMessageSubmit(message.text);
      setCurrentMessage("");
    }
  };

  const toggleClass=() => {
    setIsOpen(!isOpen)
  }

  return (
    <>
      <div className="floating-chat" onClick={toggleClass}>
              <img src={imgChat} alt=""/>
      </div>
      <div className={`box-chat ${(isOpen ? "expand" : null)}`}>
        
        <div className="chat">
          <div className="header">
            <span className="title">
              Hola, ¿qué necesitas?
            </span>
            <button className="btn-close-chat" onClick={toggleClass}>
              <img src={imgClose} alt=""/>
            </button>
          </div>
              
          <ListMessages messages={responses} scroll={scrollMessages} sending={ sending }/>
                  
          <div className="footer">
            <input type="text"
                      value={currentMessage}
                      onChange={handleMessageChange}
                      onKeyDown={handleSubmit}
                      placeholder="Escribe un mensaje..."
                      className="text-box"
                    />
            <button className="send-button" onClick={handleSubmit}>
              <img src={imgSend}/>
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Chat;