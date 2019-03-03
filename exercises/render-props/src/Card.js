import React from "react"
import Toggler from "./Toggler"

const Card = () =>{
    return(
        <> 
            <Toggler render={({toggle, on}) =>
                <div onClick={toggle}  className='cardContainer'>
                    <h1 className={on ? "show" : "hide"}>This is a box!</h1>
                </div>
            }/>
        </>
    )
}

export default Card