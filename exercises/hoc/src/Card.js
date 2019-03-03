import React from "react"
import {withToggler} from "./Toggler"

const Card = ({on, toggle}) =>{
    return(
        <div onClick={toggle} className='cardContainer'>
            <div className={on ? "show" : "hide"}>
                <h1>Fuck this box</h1>
            </div>
        </div>
    )
}

export default withToggler(Card)