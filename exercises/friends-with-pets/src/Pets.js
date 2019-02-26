import React from 'react'

const Pets = (props) => {
    return (<div>
        <ul></ul>
        <hr></hr>
        <h3>Name: {props.name}</h3>
        <h4> Breed: {props.breed}</h4>
    </div>
    )
}

export default Pets