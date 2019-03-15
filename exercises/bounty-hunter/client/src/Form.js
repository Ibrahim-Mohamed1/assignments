import React, { Component } from 'react';
import axios from "axios"

class Form extends Component {
    constructor(){
        super()
        this.state={
            inputs: {firstName:"",
            lastName:"",
            status:"",
            type:"",
            reward:""},
            bounties:[]
        }
    }

    // componentDidMount() {
    //     axios.post('/bounty').then(res => {
    //         this.setState({
    //             list: res.data
    //         })
    //     })
    // }

    handleChange = (e) =>{
        console.log("I am a handleChange")
    }

    handleSubmit = (e) =>{
        e.preventDefault()
        console.log("I am a handleSubmit")
        this.props.postbounties()
    }

    render() {
        return (
            <form onClick={this.handleSubmit} style={{zoom: 1.8, display:"block", textAlign:"center", marginBottom:8}}>
                <input style={{margin:"1%"}} type="text" placeholder="First Name" onChange={this.handleChange}/>
                <input style={{margin:"1%"}} type="text" placeholder="Last Name" onChange={this.handleChange}/>
                <br/>
                <input style={{margin:"1%"}} type="radio" name="status" value="dead" onChange={this.handleChange}/>Alive 
                <input style={{margin:"1%", marginLeft:"10%"}} type="radio" name="status" value="alive" onChange={this.handleChange}/>Dead 
                <br/>
                <input style={{margin:"1%"}} type="text" placeholder="Type" onChange={this.handleChange}/>
                <input style={{margin:"1%"}} type="text" placeholder="Reward" onChange={this.handleChange}/>
                <br/>
                <button style={{margin:"1%"}}>Submit</button>
            </form>
        );
    }
}

export default Form;