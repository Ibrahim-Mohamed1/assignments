import React from "react"
import { withData } from "./Provider";

class Suggest extends React.Component {
    constructor() {
        super()
        this.state = {
            lucky: false
        }
    }

    componentDidMount() {

        const num = [1035, 152, 1, 151, 3, 193, 955, 5, 227, 132, 270, 159, 182, 133, 168, 30, 491, 956, 381, 158, 229, 25, 161, 881, 192, 100, 411, 541, 959, 651, 149, 38, 40, 112, 45, 501, 274, 134, 156, 181, 521, 143, 233, 148, 154, 140, 135, 55, 60, 164, 178, 67, 136, 70, 73, 137, 74, 147, 117, 996, 995, 321, 139, 162, 82, 320, 84, 998, 601, 304, 83, 611, 461, 972, 471, 996, 89, 141, 177, 997, 190, 179, 163, 964, 150, 95, 93, 142, 308, 99]

        const random = Math.floor(Math.random() * num.length)

        const key = num.splice(random, 1)

        this.props.luckyRestaurants(key[0])
    }

    lucky = () => {
        this.setState(prevState => ({
            lucky: !prevState.lucky
        }))
    }

    reload() {
        window.location.reload()
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

        const price = " $"

        console.log(this.props)

        return (
            <div>
                <br />
                <br />
                <h1 style={{ fontSize: "2.3em", textAlign: "center", fontFamily: "cursive", color: "cyan" }}>Find a new favorite cuisine!</h1>
                <br />
                <br />
                <button onClick={this.reload} className="homeButton" style={{ display: "block", margin: "auto", zoom: 3, borderRadius: 5, borderColor: "cyan"}}>I'm Feeling Lucky</button>
                <br />
                <br />
                <br />
                <div style={styles.div}>
                    <div className="res" style={{ border: "solid red", borderRadius: 30}}>
                        <h1 style={{ marginLeft: 10, textAlign: "center", color:"darkCyan"}}><a style={{textDecoration:"none"}} className="aa" href={this.props.luckyRestaurant.url} rel="noopener noreferrer" target="_blank">{this.props.luckyRestaurant.name}</a></h1>
                        <hr />
                        <h4 style={{ marginLeft: 10 }}>Location: <a className="aa" target="_blank" rel="noopener noreferrer" href={`https://www.google.com/maps/search/${this.props.luckyRestaurant.name}`} >{this.props.luckyRestaurant.location ? this.props.luckyRestaurant.location.address : null}</a></h4>
                        <hr />
                        <h4 style={{ marginLeft: 10 }}>Pricing:{price.repeat(this.props.luckyRestaurant.price_range)}</h4>
                        <hr />
                        <h4 style={{ marginLeft: 10 }}>Rating: {this.props.luckyRestaurant.user_rating ? this.props.luckyRestaurant.user_rating.aggregate_rating : null} / 5</h4>
                        <hr />
                        <h4 style={{ marginLeft: 10 }}>Cuisine Type(s): {this.props.luckyRestaurant.cuisines}</h4>
                        <hr />
                        <h4 style={{ marginLeft: 10, marginBottom: 11 }}>Website: <a className="aa" href={this.props.luckyRestaurant.url} rel="noopener noreferrer" target="_blank">{this.props.luckyRestaurant.name}</a></h4>
                    </div>
                </div>
            </div>
        )
    }
}
export default withData(Suggest)