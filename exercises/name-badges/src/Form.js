import React, {Component} from "react"
import Badge from "./Badge";

class Form extends Component{
    constructor(){
        super()
        this.state={
            inputs:{
                firstName:"",
                lastName:"",
                email:"",
                birth:"",
                phone:"",
                favFood:"",
                about:""
            },
            badges:[]
        }
    }

    handleChange = (e) => {
        const {name,value} = e.target
        this.setState(prevState => {
            return {
                inputs: {
                    ...prevState.inputs,
                    [name]: value
                }
            }
        })
    }

    handleSubmit = (e) =>{
        e.preventDefault()
        this.setState(prevState =>{
            return{
                badges:[prevState.inputs,...prevState.badges],
                inputs:{
                    firstName:"",
                    lastName:"",
                    email:"",
                    birth:"",
                    phone:"",
                    favFood:"",
                    about:"" 
                }
            }
        })
    }

    render(){
        const {firstName, lastName, email, birth, phone, favFood, about} = this.state.inputs
        const mappedBadges = this.state.badges.map((badge,i)=>{
            return <Badge
                    badge={badge}
                    key={badge.firstName + i}
                />
        })
        
        return (
            <>
                <h1 style={{color:"orange",textAlign:"center",fontFamily:"cursive",fontSize:"3em",margin:0,textDecoration:"underline"}}>Badge Generator</h1>
                <form className="parentDiv" onSubmit={this.handleSubmit}>
                    <input type="text" name="firstName" value={firstName} onChange={this.handleChange} placeholder="First Name" autoComplete="off" required/>
                    <input type="text" name="lastName" value={lastName} onChange={this.handleChange} placeholder="Last Name" autoComplete="off"/>
                    <input type="email" name="email" value={email} onChange={this.handleChange} placeholder="Email" autoComplete="off"/>
                    <input type="text" name="birth" value={birth} onChange={this.handleChange} placeholder="Place of Birth" autoComplete="off"/>
                    <input type="number" name="phone" value={phone} onChange={this.handleChange} placeholder="Phone Number" autoComplete="off"/>
                    <input type="text" name="favFood" value={favFood} onChange={this.handleChange} placeholder="Favorite Food" autoComplete="off"/>
                    <input type="text" name="about" value={about} onChange={this.handleChange} placeholder="Tell us about yourself..." className="about" autoComplete="off"/>
                    <br/>
                    <button className="submit">Submit</button>
                </form>
                {mappedBadges}
          </>
        )
    }
}
export default Form