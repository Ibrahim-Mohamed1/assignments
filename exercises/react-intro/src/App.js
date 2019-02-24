import React, {Component} from 'react';

class App extends Component {
    constructor(){
        super()

        this.state = {
            number: 69
        }
    }

    add = () => {
        this.setState((prevState) => {
            return {
                number: prevState.number + 1
            }
        })
    }
    subtractor = () => {
        this.setState((prevState) => {
            return {
                number: prevState.number - 1
            }
        })
    }

    render(){
        return (
            <div>
                <h1>Number: {this.state.number}</h1>
                <button onClick={this.subtractor}>Press Here Subtract</button>
                <button onClick={this.add}>Press Here Add</button>

            </div>
        )
    }
}


export default App