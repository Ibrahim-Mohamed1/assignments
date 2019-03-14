import React, { Component } from 'react';
import axios from "axios"

class Bounty extends Component {
    constructor(props) {
        super(props);
        this.state = {
            list: []
        }
    }

    componentDidMount() {
        axios.get('/bounty').then(res => {
            this.setState({
                list: res.data
            })
        })
    }

    render() {
        const mappedList = this.state.list.map(bounty => (<div style={{border:"solid 1px black", backgroundColor:"tan"}}>
                <h1 style={{marginLeft:10}} key={bounty.lastName}>Target: {bounty.firstName} {bounty.lastName}</h1>
                <h1 style={{marginLeft:10}} key={bounty._id}>Status: {bounty.isAlive ? <img alt="" style={{marginBottom:-10, width:40, display: "inline-block"}}
                    src="https://cdn1.iconfinder.com/data/icons/medicine-27/68/heart_health-512.png"/> 
                    :
                    <img alt="" style={{marginBottom:-10, width: 40, display: "inline-block"}} src="http://cdn.onlinewebfonts.com/svg/img_488688.png"/>}
                </h1>
                <h1 style={{marginLeft:10}} key={bounty._id}>Type: {bounty.type}</h1>
                <h1 style={{marginLeft:10}} key={bounty._id}>Reward: {bounty.reward}.69</h1>
            </div>))
        console.log(this.state.list)
        return (
            <div style={{display: "grid", gridGap:15, gridTemplateColumns:"repeat(auto-fit, minmax(380px, 1fr)"}}>
                {mappedList}
            </div>
        );
    }
}

export default Bounty;