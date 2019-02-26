import React, { Component } from 'react';


class App extends Component {
  constructor(){
    super()
    this.state={
      firstName: "",
      lastName: "",
      array:[]
    }
  }
  changeHandle = (event) =>{
    this.setState({
      [event.target.name] : event.target.value
    })
  }

  handleClick = (e) => {
    e.preventDefault()
    let fullName = this.state.firstName +" "+this.state.lastName
    this.setState(prevState => {
      return {
        array:[fullName,...prevState.array],
        firstName: '',
        lastName: ''
      }
    })
  }
  render() {
    const mappedName = this.state.array.map((name) => {
      return <li >{name}</li>
    })
    return (
      <form onSubmit={this.handleClick}>
        <input placeholder="First Name" value={this.state.firstName} name={"firstName"} type='text' onChange={this.changeHandle} required></input>
        <br></br>
        <input placeholder="Last Name" value={this.state.lastName} name={"lastName"} type="text" onChange={this.changeHandle} required></input>
        <h1>{this.state.firstName} {this.state.lastName}</h1>
        <button >Click</button>
        <ul>
          {mappedName}
        </ul>
      </form>
    );
  }
}

export default App;
