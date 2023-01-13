import React from 'react';
import ReactDOM from 'react-dom/client';
import Header from './Components/header.js';
import LandingPage from './Components/landing_page.js';
import SignIn from './Components/signIn.js';
import './custom.css';

function App() {
  return (
    <div className="App">
      <Header />
      <SignIn />
      <LandingPage />
    </div>
  );
}

export default App;
