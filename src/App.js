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
      <Header></Header>
      <div id="container-wrap" style={{
        padding: '2rem'
      }}>
        <div id="main">
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
