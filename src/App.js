import React from 'react';
// import logo from './logo.svg';
import './CSS/App.css';
import './CSS/Nav.css';
import './CSS/Social.css';
import './CSS/Glitch.css';
import Header from './components/Header.js';



function App() {
  return (
    <div className="App">
      {/* <header className="App-header"> */}
      {/* <img src="header.jpeg" /> */}

        <Header />
        

      {/* </header> */}
    </div>
  );
}

export default App;