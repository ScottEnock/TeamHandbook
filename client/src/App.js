import React from 'react';
import "./assets/iconicFont/css/iconmonstr-iconic-font.min.css"
import './app.scss';
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Navbar from "./components/Navbar"
import Home from "./pages/Home"

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar/>
        <div className="main-container">
          <Switch>
            <Route exact to="/" component={Home} />
          </Switch>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
