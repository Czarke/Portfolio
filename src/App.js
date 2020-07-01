import React from 'react';
import logo from './logo.svg';
import './App.css';
import './assets/plugins/bootstrap/css/bootstrap.min.css'
import './assets/css/styles.css'
import Header from './Components/Header.jsx'
import About from './Components/About.jsx'
import Latest from './Components/Latest.jsx'
import Experience from './Components/Experience.jsx'
import Side from './Components/Side.jsx'

function App() {
  return (
    <div className="App">
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}
      
      <div id="container-wrap">
      <div id="main">
        <Header></Header>
        <About></About>
        <Latest></Latest>
        <Experience></Experience> 
      </div>
      <Side></Side>
    </div>
      
      

      
    </div>
  )
}

export default App;
