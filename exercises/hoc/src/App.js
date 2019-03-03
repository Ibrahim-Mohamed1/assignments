import React from "react"
import Card from "./Card"
import Menu from "./Menu"
import "./App.css"

class App extends React.Component{
  render(){
    return(
      <div>
          <Menu />
          <Card />
      </div>
    )
  }
}

export default App 