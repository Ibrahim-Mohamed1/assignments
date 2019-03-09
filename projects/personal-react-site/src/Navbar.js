import React from 'react'
import { Link } from "react-router-dom"

const Navbar = () => {
    const styles = {
        div: {
            textAlign: "center",
            padding: "1%",
            fontSize: "1.5em",
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-around",
        },
        link: {
            textDecoration: "none",
            cursor: "pointer",
            border:"solid darkCyan",
            padding:"1%",
            borderRadius: 50
        },
    }
    return (
        <div style={styles.div}>
            <Link className="nav" style={styles.link} to="/">Home</Link>
            <Link className="nav" style={styles.link} to="/suggest">Suggest</Link>
            <Link className="nav" style={styles.link} to="/contact">Contact</Link>
        </div>
    )
}

export default Navbar