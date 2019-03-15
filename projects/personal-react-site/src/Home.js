import React from "react"
import { withData } from "./Provider"

class Home extends React.Component {
    constructor() {
        super()
        this.state = {
            value: 0
        }
    }

    componentDidMount() {
        this.props.getCuisines()
    }

    handleChange = (e) => {
        e.preventDefault()
        this.setState({ value: e.target.value })
    }

    handleSubmit = () => {
        this.props.getRestaurants(this.state.value)

    }

    render() {
        const price = " $"
        const mappedRestaurants = this.props.restaurants.map(place =>
            <div class="res" style={{ border: "solid red", borderRadius:30 }} key={place.restaurant.id}>
                <h1 style={{ marginLeft: 10, textAlign: "center", color:"darkCyan"}}><a style={{textDecoration:"none"}} className="aa" href={place.restaurant.url} rel="noopener noreferrer" target="_blank">{place.restaurant.name}</a></h1>
                <hr />
                <h4 style={{ marginLeft: 10 }}>Location: <a className="aa" target="_blank" rel="noopener noreferrer" href={`https://www.google.com/maps/search/${place.restaurant.name}`} >{place.restaurant.location ? place.restaurant.location.address : null}</a></h4>                <hr />
                <h4 style={{ marginLeft: 10 }}>Pricing:{price.repeat(place.restaurant.price_range)}</h4>
                <hr />
                <h4 style={{ marginLeft: 10 }}>Rating: {place.restaurant.user_rating.aggregate_rating} / 5</h4>
                <hr />
                <h4 style={{ marginLeft: 10 }}>Cuisine Type(s): {place.restaurant.cuisines}</h4>
                <hr />
                <h4 style={{ marginLeft: 10, marginBottom: 11 }}>Website: <a className="aa" href={place.restaurant.url} rel="noopener noreferrer" target="_blank">{place.restaurant.name}</a></h4>
            </div>)
        const styles = {
            select: {
                display: "block",
                margin: "auto",
                zoom: 3.5,
                marginTop: "1.2em",
                outline: "none",
                width: "40%",
                fontSize: "6px",
                color: "white"
            },
            button: {
                display: "block",
                margin: "auto",
                outline: "none",
                zoom: 3.5,
                borderRadius: 5,
                marginTop: 10,
                borderColor: "cyan ",
            },
            h1: {
                textAlign: "center",
                margin: 0,
                fontFamily: "cursive",
                fontSize: "2.2em",
                padding:"1%",
                color:"cyan"
            },
            div: {
                gridGap: 15,
                margin: 15,
                display: "grid",
                gridTemplateColumns: "repeat(auto-fill,minmax(390px, 1fr))"
            }
        }
        const mappedCuisines = this.props.cuisines.map(food => <option value={food.cuisine.cuisine_id} key={food.cuisine.cuisine_id}>{food.cuisine.cuisine_name}</option>)
        console.log(this.props.restaurants)
        return (
            <>
                <br />
                <br />
                <br />
                <h1 style={styles.h1}>Try New and Exciting Food!</h1>
                <div>
                    <select style={styles.select} action="" onChange={this.handleChange}>
                        <option value="">Please Select...</option>
                        {mappedCuisines}
                    </select>
                </div>
                <br />
                <button onClick={this.handleSubmit} className="homeButton" style={styles.button}>Search</button>
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