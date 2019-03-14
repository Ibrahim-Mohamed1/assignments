import React, { Component } from 'react';

class Form extends Component {

    handleChange = () =>{
        console.log("I am a handleChange")
    }

    handleSubmit = () =>{
        console.log("I am a handleSubmit")
    }

    render() {
        return (
            <form style={{zoom: 1.8, display:"block", textAlign:"center", marginBottom:8}}>
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