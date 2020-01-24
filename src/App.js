import React from 'react';
import './App.css';
import Home from './components/Home';
import CustomNavbar from './components/CustomNavbar';
import Imageslider from './components/Imageslider';
import Footer from './components/Footer';
import Connect from './components/Connect';
import FixedBg from './components/FixedBg';
import Testimonials from './components/Testimonials';

function App() {
  return (
    <div>
      <CustomNavbar/>
      <Imageslider/>
      <Home/>
      <FixedBg/>
      {/* <Testimonials/> */}
      <Connect/>
      <Footer/>
    </div>

  );
}

export default App;
