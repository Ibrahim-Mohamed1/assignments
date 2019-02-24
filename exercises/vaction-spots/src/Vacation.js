import React from "react"

const Vacation = (props) => {
    let random = Math.floor(Math.random()*5)
    const styles = {
        border:"solid",
        height:250,
        textAlign:"center",
        border: "solid",
        borderRadius:50
    }
        if (random === 0){
            styles.backgroundColor = "lightgray"
        }
        if (random === 1){
            styles.backgroundColor = "orange"
        }
        if (random === 2){
            styles.backgroundColor = "Yellow"
        }
        if (random === 3){
            styles.backgroundColor = "lime"
        }
        if (random === 4){
            styles.backgroundColor = "cyan"
        }

    return (
        <div style={styles}>
            <h1>Travel Location:<span style={{color:"magenta"}}><br></br>{props.place}<hr></hr></span></h1>
            <h2>Price: <span style={{color:"magenta"}}>${props.price}<hr></hr></span></h2>
            <h3>Time to go: <span style={{color:"magenta"}}>{props.timeToGo}</span></h3>
        </div>
    )
}

export default Vacation