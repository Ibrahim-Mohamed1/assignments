import React from 'react'
import {withHocCountDown} from "./HocCountDown"

const CountDown = ({sub, countDown}) => {

  return (
    <div>
        <h1>{sub}</h1>
        <button onClick={countDown}>Subtract</button>
    </div>
  )
}

export default withHocCountDown(CountDown)