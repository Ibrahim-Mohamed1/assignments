import React, { Component } from 'react';
import {withData} from "./DataProvider"

class Form extends Component {
    constructor(){
        super()
        this.state={
            inputs: {
                firstName:"",
                lastName:"",
                isAlive: true,
                type:"",
                reward:""
            },
            bounties:[]
        }
    }

    handleChange = (e) =>{
        console.log(e.target.value)
        let {name, value} = e.target;
        this.setState(prevState => ({
            inputs: {
                ...prevState.inputs,
                [name]: value
            }
        }))
    }

    handleSubmit = (e) =>{
        e.preventDefault()
        console.log("I am a handleSubmit")
        this.props.postBounties(this.state.inputs)
        this.setState({
            inputs:{
                firstName: "",
                lastName: "",
                isAlive: true,
                type: "",
                reward: ""
            }
        })
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit} className="post" style={{zoom: 3, display:"block", textAlign:"center", marginBottom:8}}>
                <input style={{margin:"1%"}} 
                    type="text" 
                    autoComplete="off"
                    value={this.state.inputs.firstName} 
                    name="firstName" 
                    placeholder="First Name" 
                    onChange={this.handleChange}
                    required/>
                <input style={{margin:"1%"}} 
                    type="text" 
                    autoComplete="off"
                    value={this.state.inputs.lastName} 
                    name="lastName" 
                    placeholder="Last Name" 
                    onChange={this.handleChange}
                    required/>
                <br/>
                <input style={{margin:"1%"}} 
                    type="radio" 
                    name="isAlive" 
                    autoComplete="off"
                    value={true} 
                    onChange={this.handleChange}/>Alive 
                <input style={{margin:"1%", marginLeft:"10%"}} 
                    type="radio" 
                    name="isAlive" 
                    autoComplete="off"
                    value={false}
                    onChange={this.handleChange}/>Dead 
                <br/>
                <input style={{margin:"1%"}} 
                    type="text" 
                    autoComplete="off"
                    value={this.state.inputs.type} 
                    name="type" 
                    placeholder="Type" 
                    onChange={this.handleChange}
                    required/>
                <input style={{margin:"1%"}} 
                    type="text" 
                    autoComplete="off"
                    value={this.state.inputs.reward} 
                    name="reward" 
                    placeholder="Reward" 
                    onChange={this.handleChange}
                    required/>
                <br/>
                <button  style={{margin:"1%"}}>Submit</button>
            </form>
        );
    }
}

export default withData(Form);