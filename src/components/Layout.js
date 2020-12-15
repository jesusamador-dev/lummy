import React from 'react';
import Header from './Header';
import Chat from './Chat/Chat';

const Layout=({ children }) => {
  return (
      <>
        <Header />
        {children}
        <Chat />
        {/* <Footer /> */}
      </>
  );
};

export default Layout;