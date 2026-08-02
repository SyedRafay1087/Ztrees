import './App.css';
//import About from './Components/About';
import Navbar from './Components/Navbar';
import Textform from './Components/Textform';
import React, { useState } from 'react';

//import {
//BrowserRouter as Router,
//Switch,
//Route
//} from "react-router-dom";

function App() {
  const [mode, setMode] = useState('light');

  const togglemode = () => {
    if (mode === 'light') {
      setMode('dark');
    } else {
      setMode('light');
    }
  };

  return (
    <>
    {/*<Router>*/}
      <Navbar title="Ztrees" aboutText="About" mode={mode} togglemode={togglemode} />

      <div className="container">
        {/*<Switch>*/}
          {/*<Route exact path="/about"> 
          <About />
          </Route>*/}

          {/*<Route exact path="/">*/}
            <Textform heading="Enter your text here!" />
          {/*</Route>*/}
        {/*</Switch>*/}
      </div>
    {/*</Router>*/}
    </>
          );
}

export default App;