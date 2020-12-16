import React, { useState } from 'react';
import Header from './Header';
import Footer from './Footer';
import Chat from './Chat/Chat';
import ChatContext from '../contexts/ChatContext';

const Layout=({ children }) => {
  const [isChatOpen, setIsChatOpen] = useState(false);
  const [responses, setResponses] = useState([{text: "", isBot: false}]);
  const [sending, setSending]=useState(false);

  const value = {
    isChatOpen,
    toggleChatOpen: (state = null) => {
      if(typeof state === 'boolean') {
        setIsChatOpen( isChatOpen !== state ? state : isChatOpen);
      } else{ 
        setIsChatOpen(!isChatOpen);
      }
    },
    responses,
    setResponses,
    sending,
    setSending
  }
  return (
      <>
        <ChatContext.Provider value={ value }>
          <Header />
          {children}
          <Chat />
          <Footer />
        </ChatContext.Provider>
      </>
  );
};

export default Layout;