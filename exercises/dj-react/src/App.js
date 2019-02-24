import React, {Component} from 'react'
import "./App.css"

class App extends Component{
  constructor(){
    super()
    this.state = {
      box1: "white",
      box2: "white",
      box3: "white",
      box4: "white"
    }
  }
  toggleBlack = () => {
    this.setState((prevState)=>{
      if(prevState.isWhite){
        return {
          box1: "black",
          box2: "black",
          box3: "black",
          box4: "black",
          isWhite: false
        }
      } else {
        return {
          box1: "white",
          box2: "white",
          box3: "white",
          box4: "white",
          isWhite: true
        }
      }
    })
  }
  turnTopPurple = () => {
    this.setState({box1: "purple", box2: "purple",})
  }
  turnBottomLeftBlue = () => {
    this.setState({box3: "blue"})
  }
  turnBottomRightBlue = () => {
    this.setState({box4: "blue"})
  }
  render(){

    return (
      <div className="parentDiv">
        <div className="mainDiv">
          <div className="boxStyle" style={{backgroundColor:this.state.box1}}></div>
          <div className="boxStyle" style={{backgroundColor:this.state.box2}}></div>
          <div className="boxStyle" style={{backgroundColor:this.state.box3}}></div>
          <div className="boxStyle" style={{backgroundColor:this.state.box4}}></div>
        </div>
        <button className="buttonStyle" onClick={this.toggleBlack}>{this.state.isWhite ? "Turn Black" : "Turn White"}</button>
        <button className="buttonStyle" onClick={this.turnTopPurple}>Turn Top Purple</button>
        <button className="buttonStyle" onClick={this.turnBottomLeftBlue}>Turn B/L Blue</button>
        <button className="buttonStyle" onClick={this.turnBottomRightBlue}>Turn B/R Blue</button>
        <button className="buttonStyle" >click</button>
        <button className="buttonStyle" >click</button>
        <button className="buttonStyle" >click</button>
        <button className="buttonStyle" >click</button>
      </div>
      )
    }
}

export default App