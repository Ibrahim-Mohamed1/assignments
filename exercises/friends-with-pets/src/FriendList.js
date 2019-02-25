import React from 'react'
import PetList from "./PetList"

const FriendList = (props) => {
    return (
        <div>
            <h3>{props.name}</h3>
            <PetList/>
        </div>
    )
}

export default FriendList