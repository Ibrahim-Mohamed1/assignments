import React from "react"
import Toggler from "./Toggler";

const Menu = () => {
    return(
        <>
            <Toggler render={({toggle, on}) =>
                <>
                    <button onClick={toggle}>Menu</button>
                    <ul className={on ? "open" : "closed"}>
                        <li>Home</li>
                        <li>About</li>
                        <li>Contact</li>
                    </ul>
                </>
            }/>
        </>
    )
}

export default Menu