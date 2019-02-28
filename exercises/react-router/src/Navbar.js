import React from "react"
import {Link} from "react-router-dom"

const Navbar = () => {
    const styles = {
        link:{
            margin:"10%",
            paddingTop:0,
            textDecoration:"none",
            fontSize:30,
            color:"white",
            cursor:"pointer"
        },
        div:{
            backgroundColor:"black",
            color:"white",
            textAlign:"center",
        }
    }
    return (
        <div style={styles.div}>
            <Link style={styles.link} to="/">Home</Link>
            <Link style={styles.link} to="/Services">Services</Link>
            <Link style={styles.link} to="/About">About</Link>
        </div>
    )
}


export default Navbar