import React from 'react'
import {withHocCountUp } from "./HocCountUp"

const CountUp = ({add, countUp, name}) => {
  return (
    <div>
        <h1>{add}</h1>
        <button onClick={countUp}>Add</button>
        <h1>{name}</h1>
    </div>
  )
}

export default withHocCountUp(CountUp)