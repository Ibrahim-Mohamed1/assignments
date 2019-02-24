import React from "react"

const Footer = (props) => {

    return (
        <div>
            <h4>{props.stuff.section}</h4>  
            <ul>
                <li>{props.stuff.item1}</li>
                <li>{props.stuff.item2}</li>
                <li>{props.stuff.item3}</li>
            </ul>
        </div>
    )
}

export default Footer