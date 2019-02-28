import React from "react"

const Services = () => {
    const styles={
        div:{
            backgroundColor:"orange"
        },
        title:{
            fontSize:"5em",
            fontFamily:"cursive",
            textAlign:"center"
        },
        img:{
            width:"50%",
            marginLeft:"25%"
        }
    }
    return(
        <div style={styles.div}>
            <h1 style={styles.title}>Professional Roasting!</h1>
            <img style={styles.img} src="https://i.ytimg.com/vi/T5H66bGK_WU/maxresdefault.jpg"/>
            <br></br>
            <br></br>
            <h1 style={styles.title}>Professional Squaring Up!</h1>
            <img style={styles.img} src="http://memecrunch.com/meme/AIZIT/square-up/image.jpg"/>
            <br></br>
            <br></br>
        </div>
    )
}

export default Services