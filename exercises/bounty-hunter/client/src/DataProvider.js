import React, { Component } from 'react'
import axios from "axios"
const { Provider, Consumer } = React.createContext()

class DataProvider extends Component {
    constructor() {
        super()
        this.state = {
            inputs:{
                firstName: "",
                lastName: "",
                status: "",
                type: "",
                reward: ""
            },
            bounties:[]
        }
    }

    getBounties = () => {
        axios.get('/bounty').then(res => {
            this.setState({
                bounties: res.data
            })
        })
    }

    postBounties = () => {
        axios.post('/bounty', this.state.inputs).then(res=>{
            this.setState(prevState=>({
                bounties: [...prevState.bounties,res.data],
                inputs:{
                    firstName: "",
                    lastName: "",
                    status: "",
                    type: "",
                    reward: ""
                }
            }))
        })
    }
    
    render() {
        return (
            <Provider value={{
                getBounties: this.getBounties,
                postBounties: this.postBounties,
                ...this.state
            }}
            >
                {this.props.children}
            </Provider>
        )
    }
}
export default DataProvider

export function withData(C) {
    return props => <Consumer>
        {value => <C {...value}{...props} />}
    </Consumer>
}