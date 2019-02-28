import React from "react"
import Navbar from "./Navbar"
import Footer from "./Footer"
import Home from "./Home"
import About from "./About"
import Services from "./Services"
import {Switch, Route} from "react-router-dom"


const App = () => {
  const styles={
    display:"flex",
    flexDirection:"column"
  }
  return (
    <div style={styles}>
      <Navbar/>
      <Switch>
          <Route exact path="/" component={Home}/>
          <Route path="/About" component={About}/>
          <Route path="/Services" component={Services}/>
      </Switch>
      <Footer/>
    </div>
  )
}

export default App