import React, { Component } from 'react';
import { withData } from "./DataProvider"
// import Form from "./Form"

class Bounty extends Component {
    constructor(props) {
        super(props);
        this.state = {
            edit: true,
            firstName: props.bounties.firstName,
            lastName: props.bounties.lastName,
            isAlive: props.bounties.isAlive,
            reward: props.bounties.reward,
            type: props.bounties.type
        }
    }

    componentDidMount() {
        this.props.getBounties()
    }

    toggle = () => {
        this.setState(prevState => ({
            edit: !prevState.edit
        }))
    }

    handleSubmit = (e, id) => {
        e.preventDefault()
        let {firstName, lastName, isAlive, reward, type} = this.state;
        const updatedBounty = {firstName, lastName, isAlive, reward, type}
        this.props.editBounty(id, updatedBounty)
    }

    render() {

        const { deleteBounty } = this.props

        const mappedBounties = this.props.bounties.map(bounty => (<div style={{ border: "solid 1px black", borderRadius: 10, backgroundColor: "tan" }} key={bounty._id}>
            <h1 style={{ marginLeft: 10 }} key={bounty.lastName}>Target: {bounty.firstName} {bounty.lastName}</h1>
            <h1 style={{ marginLeft: 10 }}>Status: {bounty.isAlive ? <img alt="" style={{ marginBottom: -10, width: 40, display: "inline-block" }}
                src="https://cdn1.iconfinder.com/data/icons/medicine-27/68/heart_health-512.png" />
                :
                <img alt="" style={{ marginBottom: -10, width: 40, display: "inline-block" }} src="http://cdn.onlinewebfonts.com/svg/img_488688.png" />}
            </h1>
            <h1 style={{ marginLeft: 10 }}>Type: {bounty.type}</h1>
            <h1 style={{ marginLeft: 10 }}>Reward: ${bounty.reward}</h1>
            <button style={{ zoom: 2.1, borderRadius: 5, margin: "1%", float: "left" }} onClick={this.toggle}>Edit</button>
            <button style={{ zoom: 2.1, borderRadius: 5, margin: "1%", float: "right" }} onClick={() => { deleteBounty(bounty._id) }}>Delete</button>
        </div>))
        console.log(this.props)
        return (
            <div style={{ display: "grid", gridGap: 15, gridTemplateColumns: "repeat(auto-fit, minmax(380px, 1fr)" }}>
                {this.state.edit ?
                    <>
                        {mappedBounties}
                    </>
                    :
                    <>
                        <form onSubmit={(e) => this.handleSubmit} style={{zoom:2.5, border:"white solid", width:150, display:"block", margin:"auto", textAlign:"center"}}>
                            <input style={{margin:"1%"}} 
                                type="text" 
                                value={this.state.firstName} 
                                name="firstName" 
                                placeholder="First Name" 
                                onChange={this.handleChange}
                                required/>
                            <input style={{margin:"1%"}} 
                                type="text" 
                                value={this.state.lastName} 
                                name="lastName" 
                                placeholder="Last Name" 
                                onChange={this.handleChange}
                                required/>
                            <br/>
                            <input style={{margin:"1%"}} 
                                type="radio" 
                                name="isAlive" 
                                value={true} 
                                onChange={this.handleChange}/>Alive 
                            <input style={{margin:"1%", marginLeft:"10%"}} 
                                type="radio" 
                                name="isAlive" 
                                value={false}
                                onChange={this.handleChange}/>Dead 
                            <br/>
                            <input style={{margin:"1%"}} 
                                type="text" 
                                value={this.state.reward} 
                                name="reward" 
                                placeholder="Type" 
                                onChange={this.handleChange}/>
                            <input style={{margin:"1%"}} 
                                type="text" 
                                value={this.state.type} 
                                name="type" 
                                placeholder="Reward" 
                                onChange={this.handleChange}/>
                            <br/>
                            <button style={{marginBottom:"1%"}}>Save</button>
                        </form>
                    </>
                }
            </div>
        );
    }
}

export default withData(Bounty);