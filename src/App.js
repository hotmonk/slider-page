import React from 'react';
import './App.css';
import Home from './components/Home';
import CustomNavbar from './components/CustomNavbar';
import Imageslider from './components/Imageslider';
import Footer from './components/Footer';
import Connect from './components/Connect';
import FixedBg from './components/FixedBg';

function App() {
  return (
    <div>
      <CustomNavbar/>
      <Imageslider/>
      <Home/>
      <FixedBg/>
      <Connect/>
      <Footer/>
    </div>

  );
}

export default App;
