import React from 'react'
import {withHocPopUp} from "./HocPopUp"

const PopUp = ({pop, popUp}) => {
  return (
    <div>
        <h1>Hola</h1>
        <h1 className={pop ? "show" : "hide"}>Sup bro</h1>
        <button onClick={popUp}>Click Here for some candy!</button>
    </div>
  )
}

export default withHocPopUp(PopUp)