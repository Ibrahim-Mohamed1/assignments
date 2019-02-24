
import React from "react"

const Box = (props) =>{
    let random = Math.floor(Math.random()*5)
    const styles = {
        border:"solid",
        height:370,
        textAlign:"center"
    }
        if (random === 0){
            styles.backgroundColor = "red"
        }
        if (random === 1){
            styles.backgroundColor = "orange"
        }
        if (random === 2){
            styles.backgroundColor = "cyan"
        }
        if (random === 3){
            styles.backgroundColor = "green"
        }
        if (random === 4){
            styles.backgroundColor = "blue"
        }

    return (
        <div style={styles}>
            <h1>{props.title}</h1>
            <h3>{props.subtitle}</h3>
            <p>{props.information}</p>
        </div>
    )
}

export default Box