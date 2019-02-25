import React from "react"
import App from "./App.css"

const Navbar = () => {
    const title = {
        display:"inline-block",
        overflow:"hidden",
        margin: 0,
        marginTop:20,
        marginLeft:180,
        cursor:"pointer"
    }
    const nav = {
        display:"inline-block",
        float:"right",
        marginRight: 160,
        marginTop:20
    }
    const list = {
        display:"inline",
        marginRight: 30,
        frontWeight:"bold",
        fontSize:14,
        cursor:"pointer"
    }
    return (
        <div>
            <h2 className="grayHover" style={title}>Start Bootstrap</h2>
            <div style={nav}>
                <li className="grayHover" style={list}>HOME</li>
                <li className="grayHover" style={list}>ABOUT</li>
                <li className="grayHover" style={list}>SAMPLE POST </li>
                <li className="grayHover" style={list}>CONTACT</li>
            </div>
        </div>
    )
}

export default Navbar