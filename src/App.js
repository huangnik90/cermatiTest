import React from 'react';
import './App.css';
import BannerNotif from './components/bannerNotification'
import Header from './components/header'
import Highlight from './components/highlight';
import Footer from './components/footer'
import NewsLetter from './components/newsletter';
function App() {
  return (
    <div>
      <BannerNotif/>
      <Header/>
      <Highlight/>
      <Footer/>
      <NewsLetter/>
    </div>
  );
}

export default App;
