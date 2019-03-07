import React from "react"

const Dice = ()=>{

    let random = Math.floor(Math.random()*6)

    const styles={
        height:265,
        width:265,
        backgroundColor:"white",
        borderRadius:"13%"
    }

    if(random === 0){
        styles.backgroundImage = "url(https://upload.wikimedia.org/wikipedia/commons/thumb/1/1b/Dice-1-b.svg/557px-Dice-1-b.svg.png)"
        styles.backgroundSize="cover"
    }
    if(random === 1){
        styles.backgroundImage = "url(https://upload.wikimedia.org/wikipedia/commons/thumb/5/5f/Dice-2-b.svg/557px-Dice-2-b.svg.png)"
        styles.backgroundSize="cover"
    }
    if(random === 2){
        styles.backgroundImage = "url(https://upload.wikimedia.org/wikipedia/commons/thumb/b/b1/Dice-3-b.svg/2000px-Dice-3-b.svg.png)"
        styles.backgroundSize="cover"
    }
    if(random === 3){
        styles.backgroundImage = "url(https://upload.wikimedia.org/wikipedia/commons/thumb/f/fd/Dice-4-b.svg/768px-Dice-4-b.svg.png)"
        styles.backgroundSize="cover"
    }
    if(random === 4){
        styles.backgroundImage = "url(https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Dice-5-b.svg/557px-Dice-5-b.svg.png)"
        styles.backgroundSize="cover"
    }
    if(random === 5){
        styles.backgroundImage = "url(https://upload.wikimedia.org/wikipedia/commons/thumb/2/26/Dice-6-b.svg/768px-Dice-6-b.svg.png)"
        styles.backgroundSize="cover"
    }
    return(
        <div style={styles}></div>
    )
}
export default Dice