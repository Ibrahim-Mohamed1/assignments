import React from 'react';
import { Switch, Route } from "react-router-dom"
import Suggest from "./Suggest"
import Home from "./Home"
import Navbar from "./Navbar"
import Contact from "./Contact"
import './App.css';

const App = () => {
  return (
    <div>
      <Navbar />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/suggest" component={Suggest} />
        <Route path="/contact" component={Contact} />
      </Switch>
    </div>
  )
}

export default App