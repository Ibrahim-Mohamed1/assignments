import React from 'react'
import Pets from "./Pets"

const Friends = (props) => {
    const Pet = props.pets.map((pet) => {
        return (
            <div>
        <Pets name={pet.name} breed={pet.breed}/>
        </div>
        )
    })

    return (
        <div style={{border:"solid", textAlign:"center", height:"auto", width:300, backgroundColor:"cyan"}}>
            <h1>{props.name}</h1>
            <h4>{Pet}</h4>
        </div>
    )
}

export default Friends