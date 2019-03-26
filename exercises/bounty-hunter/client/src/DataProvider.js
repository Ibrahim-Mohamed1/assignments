import React, { Component } from 'react'
import axios from "axios"
const { Provider, Consumer } = React.createContext()

class DataProvider extends Component {
    constructor() {
        super()
        this.state = {
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

    postBounties = (newBounty) => {
        axios.post('/bounty', newBounty).then(res=>{
            console.log(this.state.inputs)
            this.setState(prevState=>({
                bounties: [...prevState.bounties,res.data]
            }))
        })
    }

    deleteBounty = (_id) => {
        axios.delete(`/bounty/${_id}`).then(res => {
            this.setState(prevState => ({
                bounties: prevState.bounties.filter(bounty => bounty._id !== _id)
            }))
        })
    }

    editBounty = (id, updatedBounty) => {
        axios.put(`bounty/${id}`, updatedBounty).then(res => {
            this.setState(prevState => ({
                bounties: prevState.bounties.map(bounty => bounty._id === id ? bounty = updatedBounty : bounty)
            }))
        })
    }
    
    render() {
        return (
            <Provider value={{
                getBounties: this.getBounties,
                postBounties: this.postBounties,
                deleteBounty: this.deleteBounty,
                editBounty: this.editBounty,
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