import React,{Component} from "react"
import Liked from "./Liked"

class App extends Component{
  constructor(){
    super()
    this.state={
      like: false
    }
  }

  likeHandle = () =>{
    this.setState({
      like: !this.state.like
    })
  }
  render(){
    return (
      <div>
        <Liked/>
      </div>
    )
  }
}

export default App