import React from "react"
import {withData} from "./DaddyProvider"

class Home extends React.Component {
    constructor(){
        super()
        this.state={
            value: 0
        }
    }

    componentDidMount(){
        this.props.getCuisines()
    }

    handleChange = (e) =>{
        e.preventDefault()
        this.setState({value: e.target.value})
    }
    
    handleSubmit = () =>{
        this.props.getRestaurants(this.state.value)
        
    }

    render() {
        const price = " $"
        const mappedRestaurants = this.props.restaurants.map(place => 
            <div style={{ border: "solid", backgroundColor: "tan" }} key={place.restaurant.id}>
                <h1 style={{ marginLeft: 10, textAlign:"center" }}>{place.restaurant.name}</h1>
                <hr />
                <p style={{ marginLeft: 10 }}>Location: {place.restaurant.location.address}</p>
                <hr />
                <p style={{ marginLeft: 10 }}>Pricing:{price.repeat(place.restaurant.price_range)}</p>
                <hr />
                <p style={{ marginLeft: 10 }}>Rating: {place.restaurant.user_rating.aggregate_rating} / 5</p>
                <hr />
                <p style={{ marginLeft: 10 }}>Cuisine Types: {place.restaurant.cuisines}</p>
                <hr />
                <p style={{ marginLeft: 10, marginBottom:11}}>Website: <a href={place.restaurant.url} target="_blank">{place.restaurant.name}</a></p>
            </div>)
        const styles = {
            select: {
                display: "block",
                margin: "auto",
                zoom: 3.5,
                marginTop: "1.2em",
                outline: "none",
                width: "40%"
            },
            button: {
                display: "block",
                margin: "auto",
                outline: "none",
                zoom: 3.5,
                borderRadius: 5,
                marginTop: 10
            },
            h1: {
                textAlign: "center",
                margin: 0,
                fontFamily: "cursive",
                fontSize: "2.2em",
                color: "lime"
            },
            div: {
                gridGap: 5,
                margin: 5,
                display: "grid",
                gridTemplateColumns: "repeat(auto-fill,minmax(390px, 1fr))"
            }
        }
        const mappedCuisines = this.props.cuisines.map(food => <option value={food.cuisine.cuisine_id} key={food.cuisine.cuisine_id}>{food.cuisine.cuisine_name}</option>)
        
        return (
            <>
                <br />
                <br />
                <br />
                <h1 style={styles.h1}>Try New and Exciting Food!</h1>
                <select style={styles.select} action="" onChange={this.handleChange}>
                    <option value="">Please Select...</option>
                    {mappedCuisines}
                </select>
                <br />
                <button onClick={this.handleSubmit} style={styles.button}>Search</button>
                <br />
                <br />
                <br />
                <div style={styles.div}>
                    {mappedRestaurants}
                </div>
            </>
        )
    }
}
export default withData(Home)