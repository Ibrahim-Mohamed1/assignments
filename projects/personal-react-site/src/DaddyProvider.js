import React, { Component } from 'react'
import axios from "axios"
const { Provider, Consumer } = React.createContext()

class DaddyProvider extends Component {
    constructor() {
        super()
        this.state = {
            cuisines: [],
            restaurants: [],
            // luckyRestaurant: {}
        }
    }

    getCuisines = () => {
        axios.get('https://developers.zomato.com/api/v2.1/cuisines?city_id=1213', { headers: { "user-key": 'b9231aba813528cc150e005038ae0983' } }).then(res => {
            this.setState({
                cuisines: res.data.cuisines
            })
        })
    }

    saveLuckyRestaurant = (cuisineKey) => {
        this.setState(() =>({
            getRestaurants(cuisineKey)
        }))
    }

    getRestaurants = (cuisineKey) => {
        axios.get(`https://developers.zomato.com/api/v2.1/search?entity_id=1213&entity_type=city&cuisines=${cuisineKey}`, { headers: { "user-key": 'b9231aba813528cc150e005038ae0983' } }).then(res => {
            this.setState({
                restaurants: res.data.restaurants
            })
            
        })
    }
    
    
    render() {
        // console.log(getRestaurants)
        return (
            <Provider value={{
                getCuisines: this.getCuisines,
                getRestaurants: this.getRestaurants,
                ...this.state
            }}
            >
                {this.props.children}
            </Provider>
        )
    }
}
export default DaddyProvider

export function withData(C) {
    return props => <Consumer>
        {value => <C {...value}{...props} />}
    </Consumer>
}