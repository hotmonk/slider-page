import React from 'react';
import './App.css';
import Home from './components/Home';
import CustomNavbar from './components/CustomNavbar';
import Imageslider from './components/Imageslider';
import Footer from './components/Footer';
import Connect from './components/Connect';

function App() {
  return (
    <div>
      <CustomNavbar/>
      <Imageslider/>
      <Home/>
      <Connect/>
      <Footer/>


    </div>

  );
}

export default App;
