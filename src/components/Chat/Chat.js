import React, { useState, useRef, useEffect, useContext } from "react";
import ListMessages from "./ListMessages";
import useBotTalk from '../../hooks/useBotTalk';
import ChatContext from '../../contexts/ChatContext';
import imgSend from '../../images/send.svg';
import imgClose from '../../images/cerrar.svg';
import imgChat from '../../images/chat.svg';
import './chat.css';

const Chat = props => {
  const scrollMessages = useRef(null);
  const chatContext = useContext(ChatContext);
  const [currentMessage, setCurrentMessage] = useState("");
  const response = useBotTalk(chatContext.responses);

  useEffect(() => {
    if(response?.isBot === true) {
      chatContext.setResponses(responses => [...responses, response]);
      chatContext.setSending(false);
      executeScroll();
    }
  }, [response]);

  const handleMessageChange = event => {
    setCurrentMessage(event.target.value);
  };

  const executeScroll = () => {
    scrollMessages.current.scrollTop = scrollMessages.current.scrollHeight;
  };

  const handleSubmit = async (event) => {
    const message = {
      text: currentMessage,
      isBot: false
    };
    if (event.key === "Enter" || event.type === "click") {
      chatContext.setSending(true);
      chatContext.setResponses(responses => [...responses, message]);
      executeScroll();
      setCurrentMessage("");
    }
  };

  return (
    <>
      <div className="floating-chat" onClick={chatContext.toggleChatOpen}>
              <img src={imgChat} alt=""/>
      </div>
      <div className={`box-chat ${(chatContext.isChatOpen ? "expand" : null)}`}>
        
        <div className="chat">
          <div className="header">
            <span className="title">
              Lummy ChatBot
            </span>
            <span className="btn-close-chat" onClick={chatContext.toggleChatOpen}>
              <img src={imgClose} alt=""/>
            </span>
          </div>
              
          <ListMessages messages={chatContext.responses} scroll={scrollMessages} sending={ chatContext.sending }/>
                  
          <div className="footer-chat">
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