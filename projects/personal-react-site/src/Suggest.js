import React from "react"
import { withData } from "./DaddyProvider";

class Suggest extends React.Component {
    constructor() {
        super()
        this.state = {

        }
    }

    render() {
        const styles = {
            div: {
                gridGap: 5,
                margin: 5,
                marginLeft: "10%",
                marginRight: "10%"
            }
        }
        const num = [1035, 152, 1, 151, 3, 193, 955, 5, 227, 132, 270, 159, 182, 133, 168, 30, 491, 956, 381, 158, 229, 25, 161, 881, 192, 100, 411, 541, 959, 651, 149, 38, 40, 112, 45, 501, 274, 134, 156, 181, 521, 143, 233, 148, 154, 140, 135, 55, 60, 164, 178, 67, 136, 70, 73, 137, 74, 147, 117, 996, 995, 321, 139, 162, 82, 320, 84, 998, 601, 304, 83, 611, 461, 972, 471, 996, 89, 141, 177, 997, 190, 179, 163, 964, 150, 95, 93, 142, 308, 99]

        const random = Math.floor(Math.random() * 89)

        const cuisineKey = num.splice(random, 1)

        console.log(cuisineKey)

        const price = " $"

        const restaurant = this.props.restaurants[Math.floor(Math.random()*this.props.restaurants.length)]

        console.log(restaurant)
        // <div style={{ border: "solid", backgroundColor: "tan" }} key={place.restaurant.id}>
        //     <h1 style={{ marginLeft: 10, textAlign: "center" }}>{place.restaurant.name}</h1>
        //     <hr />
        //     <p style={{ marginLeft: 10 }}>Location: {place.restaurant.location.address}</p>
        //     <hr />
        //     <p style={{ marginLeft: 10 }}>Pricing:{price.repeat(place.restaurant.price_range)}</p>
        //     <hr />
        //     <p style={{ marginLeft: 10 }}>Rating: {place.restaurant.user_rating.aggregate_rating} / 5</p>
        //     <hr />
        //     <p style={{ marginLeft: 10 }}>Cuisine Types: {place.restaurant.cuisines}</p>
        //     <hr />
        //     <p style={{ marginLeft: 10, marginBottom: 11 }}>Website: <a href={place.restaurant.url} target="_blank">{place.restaurant.name}</a></p>
        // </div>

        return (
            <div>
                <br />
                <br />
                <h1 style={{ fontSize: "2.3em", textAlign: "center", fontFamily: "cursive", color: "lime" }}>Find a new favorite cuisine!</h1>
                <br />
                <br />
                <button onClick={ () => this.props.saveLuckyRestaurant(cuisineKey)} style={{ display: "block", margin: "auto", zoom: 3, borderRadius: 5 }}>I'm Feeling Lucky</button>
                <br />
                <br />
                <br />
                <br />
                <div style={styles.div}>
                    {/* {filterRestaurants} */}
                </div>
            </div>
        )
    }
}
export default withData(Suggest)