import React, { Component } from 'react';
import {withData} from "./DataProvider"

class Bounty extends Component {
    constructor(props) {
        super(props);
        this.state = {

        }
    }

    componentDidMount() {
        this.props.getBounties()
    }

    render() {
        const mappedBounties = this.props.bounties.map(bounty => (<div style={{border:"solid 1px black", backgroundColor:"tan"}} key={bounty._id}>
                <h1 style={{marginLeft:10}} key={bounty.lastName}>Target: {bounty.firstName} {bounty.lastName}</h1>
                <h1 style={{marginLeft:10}}>Status: {bounty.isAlive ? <img alt="" style={{marginBottom:-10, width:40, display: "inline-block"}}
                    src="https://cdn1.iconfinder.com/data/icons/medicine-27/68/heart_health-512.png"/>
                    :
                    <img alt="" style={{marginBottom:-10, width: 40, display: "inline-block"}} src="http://cdn.onlinewebfonts.com/svg/img_488688.png"/>}
                </h1>
                <h1 style={{marginLeft:10}}>Type: {bounty.type}</h1>
                <h1 style={{marginLeft:10}}>Reward: {bounty.reward}.69</h1>
            </div>))
        console.log(this.props.bounties)
        return (
            <div style={{display: "grid", gridGap:15, gridTemplateColumns:"repeat(auto-fit, minmax(380px, 1fr)"}}>
                {mappedBounties}
            </div>
        );
    }
}

export default withData(Bounty);