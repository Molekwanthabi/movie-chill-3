import React from 'react';
import Header from './components/Header';
import WelcomeMessage from './components/WelcomeMessage';
import UserProfile from './components/UserProfile';
import MainContent from './components/MainContent';
import Footer from './components/Footer';



const App = () => {
  return (
    <>
      <Header />
      <WelcomeMessage />
      <UserProfile name="Alice" age="25" bio="Loves hiking and photography" />
      <MainContent />
      <Footer />
    </>
  );
};

export default App;

