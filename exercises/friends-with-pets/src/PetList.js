import React from 'react'

const PetList = (props) => {
    return (
        <div>
            <h2>{props.name}</h2>
            <h2>{props.breed}</h2>
        </div>
    )
}

export default PetList