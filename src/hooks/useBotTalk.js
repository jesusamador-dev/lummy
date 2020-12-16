import { useState, useEffect } from 'react';

const useBotTalk=(message = null) => {
  const [response, setResponse] = useState(null);
  const talk = () => {
    console.log(message);
    const data = {
      message: message?.text
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
        console.log(res);
        const message = res.message;
        const responseData = {
          text: message.fulfillmentText !== "" ? message.fulfillmentText : "Lo siento, no entendí. ¿Podrías ser más claro?",
          isBot: true
        };
          setResponse(responseData);
      })
      .catch(error => {
        console.log("Error: ", error);
      });
  };

  useEffect(() => {
    if (message) {
      message = message[message.length - 1];
      if(message?.isBot === false && message.text !== "") {
      talk();
      }
    }
  }, [message]);

  return response;
};

export default useBotTalk;