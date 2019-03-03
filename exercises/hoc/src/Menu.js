import React from "react"
import { withToggler } from "./Toggler";

const Menu = ({on,toggle}) => {
    return(
        <div>
            <button onClick={toggle}>Menu</button>
            <ul className={on ? "open" : "closed"}>
                <li>Home</li>
                <li>About</li>
                <li>Contact</li>
            </ul>
        </div>
    )
}

export default withToggler(Menu)