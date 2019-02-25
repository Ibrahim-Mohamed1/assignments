import React from "react"
import Navbar from "./Navbar"

const Header = () => {
    const parent = {
        backgroundImage:"url(https://blackrockdigital.github.io/startbootstrap-clean-blog/img/home-bg.jpg)",
        backgroundSize:"cover",
        backgroundPositionX:"center",
        backgroundPositionY:"center",
        backgroundRepeatX:"no-repeat",
        backgroundRepeaty:"no-repeat",
        height:"33.2em",
        marginBottom: "4em",
        color:"white"
    }
    const overlay={
        backgroundColor:"black",
        height:"33.2em",
        opacity:.4
    }
    const title={
        textAlign: "center",
        fontSize: 85.5,
        marginTop: "1.7em"
    }
    const slogan ={
        textAlign: "center",
        marginTop: -45,
        fontSize: 23
    }
    return(
        <div style={parent}>
            <div style={overlay}>
                <Navbar/>
                <h1 style={title}>Clean Blog</h1>
                <h3 style={slogan}>A Blog Theme by Start Bootstrap</h3>
            </div>
        </div>
    )
}

export default Header