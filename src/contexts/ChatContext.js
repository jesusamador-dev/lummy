import { createContext } from 'react';

const ChatContext = createContext({
  isOpen: false,
  responses: [{text: "", isBot: false}],
  setResponse: () => {}
});

export default ChatContext;