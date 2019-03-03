import React, {Component} from "react"
import axios from "axios"

class Body extends Component{
    constructor(){
        super()
        this.state={
            suspects:[]
        }
    }
    
    componentDidMount(){
        axios.get("https://s3.amazonaws.com/v-school/data/hitlist.json").then(res => {
            this.setState({
                suspects: res.data
            })
        })
    }

    render(){
        const styles={
            div:{
                backgroundColor:"gray",
                color:"white",
                paddingBottom:"5%",
                textAlign:"center",
                display:"grid",
                gridTemplateColumns:"1fr 1fr 1fr",
                gridGap:0,
                // marginLeft: "25%",
                // marginTop:"20%",
                // marginRight:"25%"
            },
            img:{
                width:300,
                height:300,
                marginTop:50,
                image:"cover"
            },
            h1:{
                marginLeft:"18.8%",
                marginRight:"18.8%",
                marginTop:-4,
                padding:"1%",
                backgroundColor:"cyan",
            }
        }
        const mappedSuspects = this.state.suspects.map((suspect, i)=>{
            return (
                <div key={i}>
                    <img style={styles.img} src={suspect.image}/>
                    <h1 style={styles.h1}>{suspect.name}</h1>
                </div>
            )
        })
        return(
        <div style={styles.mainDiv}>
            <div style={styles.div}>
                {mappedSuspects}
            </div>
        </div>
        )}
}
export default Body