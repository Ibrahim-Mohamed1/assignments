import React from 'react'
import { Link } from "react-router-dom"

const Navbar = () => {
    const styles = {
        div: {
            textAlign: "center",
            border: "solid",
            margin: 1,
            padding: "1%",
            fontSize: "2em",
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-around",
        },
        link: {
            textDecoration: "none",
            color: "white",
            cursor: "pointer"
        },
    }
    return (
        <div style={styles.div}>
            <Link style={styles.link} to="/">Home</Link>
            <Link style={styles.link} to="/suggest">Suggest</Link>
            <Link style={styles.link} to="/contact">Contact</Link>
        </div>
    )
}

export default Navbar