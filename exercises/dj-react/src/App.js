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
  turnBottomLeftBlue = () => this.setState({box3: "blue"})

  turnBottomRightBlue = () => this.setState({box4: "blue"})

  turnTLBRLime= () => this.setState({box1: "lime",box4: "lime"})

  turnTRBLRed= () => this.setState({box2: "red",box3: "red"})

  turnYellow= () => this.setState({box1:"yellow", box2: "yellow",box3: "yellow"})

  turnMagenta= () => this.setState({box2:"magenta", box3: "magenta",box4: "magenta"})

  
  render(){

    return (
      <div className="parentDiv">
        <div className="mainDiv">
          <div className="boxStyle" style={{backgroundColor:this.state.box1}}></div>
          <div className="boxStyle" style={{backgroundColor:this.state.box2}}></div>
          <div className="boxStyle" style={{backgroundColor:this.state.box3}}></div>
          <div className="boxStyle" style={{backgroundColor:this.state.box4}}></div>
        </div>
        <button className="buttonStyle" onClick={this.toggleBlack}>{this.state.isWhite ? "Change Black" : "Change White"}</button>
        <button className="buttonStyle" onClick={this.turnTopPurple}>Change Top</button>
        <button className="buttonStyle" onClick={this.turnBottomLeftBlue}>Change B/L</button>
        <button className="buttonStyle" onClick={this.turnBottomRightBlue}>Change B/R</button>
        <button className="buttonStyle" onClick={this.turnTLBRLime}>Change T/L B/R</button>
        <button className="buttonStyle" onClick={this.turnTRBLRed}>Change T/R B/L</button>
        <button className="buttonStyle" onClick={this.turnYellow}>Change T B/L</button>
        <button className="buttonStyle" onClick={this.turnMagenta}>Change B T/R</button>
      </div>
      )
    }
}

export default App