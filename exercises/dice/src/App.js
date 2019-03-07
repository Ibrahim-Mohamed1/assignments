import React from "react"
import Dice from "./Dice"

const App = () =>{
  return(
    <form>
    <div style={{display:"grid",gridTemplateColumns:"1fr 1fr 1fr 1fr 1fr",marginLeft:"1%",marginTop:"5%"}}>
      <Dice/>
      <Dice/>
      <Dice/>
      <Dice/>
      <Dice/>
    </div>
    <br/>
    <button style={{marginLeft:"37%",zoom:4,marginTop:"5%",backgroundColor:"cyan",outline:"none", borderRadius:5,cursor:"pointer"}}>I'm Feeling Lucky</button>
    </form>
  )
}

export default App