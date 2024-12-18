import React from 'react';
import logo from './img/denis.jpg';
import './App.css';
import axios from "axios";

function App() {
    const a =  async () => {
        const HTMLdoc = await axios.get('https://datki.net/komplimenti/zhenshine/page/1/')
        console.log(HTMLdoc)
    }
     a()
    const parser = new DOMParser()

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
      </header>
    </div>
  );
}

export default App;
