import React from "react"

const Header = () =>{
    const styles={
        div:{
            backgroundColor: "black",
            color: "red",
            display: "grid",
            gridTemplateColumns: "1fr 1fr 1fr 1fr 1fr 1fr"
        },
        img:{
            height:125,
            marginLeft:30
        },
        h1:{
            marginTop:"auto",
            marginBottom: "auto",
        }
    }
    return (
        <div style={styles.div}>
            <img style={styles.img} src="https://www.meme-arsenal.com/memes/5305a68eebd24ae4d3efb2b5a6b1daac.jpg" alt=""/>
            <h1>Don CorLeone</h1>
        </div>
    )
}
export default Header