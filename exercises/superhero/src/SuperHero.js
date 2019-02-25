import React from 'react'

const SuperHero = (props) => {
    let random = Math.floor(Math.random()*5)
    const size = {
        height:240,
        width:400,
        cursor:"pointer"
    }
    const styles = {
        border:"solid",
        height:370,
        textAlign:"center"
    }
    const h2={
        cursor:"pointer"
    }

    if (random === 0){
        styles.backgroundColor = "magenta"
    }
    if (random === 1){
        styles.backgroundColor = "orange"
    }
    if (random === 2){
        styles.backgroundColor = "cyan"
    }
    if (random === 3){
        styles.backgroundColor = "lime"
    }
    if (random === 4){
        styles.backgroundColor = "red"
    }
    
    return (
        <div style={styles}  onClick={()=>{alert(props.catchphrase)}}>
            <h2 style={h2} onClick={props.catchPhrase}>{props.name}</h2>
            <img style={size} src={props.image}  alt=""/>
        </div>
    )
}

export default SuperHero