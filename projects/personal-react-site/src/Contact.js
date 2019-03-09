import React from "react"

class Contact extends React.Component {
    constructor() {
        super()
        this.state = {
            toggle: true
        }
    }

    toggle = () =>{
        this.setState(prevState =>({
            toggle: !prevState.toggle
        }))
    }

    render() {
        const styles = {
            input: {
                zoom: 2.5,
                margin: "1%",
                marginLeft: "8%",
                width: "36.5%"
            },
        }

        return (
            <div>
                {this.state.toggle ?
                    <>
                        <form onSubmit={this.toggle}>
                        <br />
                        <span style={{ fontSize: "1.5em", border: "solid lime", marginRight: 50, marginTop: 20, marginLeft: 50, display: "block", borderRadius:10 }}>
                            <p className="res" style={{ paddingLeft: 10, paddingRight: 10, marginTop:0,paddingTop:30, marginBottom:0, paddingBottom:30,textAlign: "center", borderRadius: 7 }}>Need to contact us? Please reach out to one of our professional team members to address your concern. We will have a resolution to your concern as soon as possible.</p>
                        </span>
                        <br />
                        <br />
                        <input style={styles.input} type="text" placeholder="First Name" required/>
                        <input style={styles.input} type="text" placeholder="Last Name" />
                        <br />
                        <br />
                        <input style={styles.input} type="email" placeholder="Email" required/>
                        <input style={styles.input} type="text" placeholder="Phone Number" />
                        <br />
                        <br />
                        <br />
                        <textarea style={{ display: "block", margin: "auto", fontSize: "1.5em", width: "84%", height: "100%" }} name="" id="" rows="5" placeholder="What is the nature of your concern?" required></textarea>
                        <br />
                        <br />
                        <button className="homeButton" style={{ display: "block", margin: "auto", zoom: 3.5, borderRadius: 5, border:"solid white" }}>Submit</button>
                        </form>
                    </>
                :
                    <>
                        <br/>
                        <br/>
                        <br/>
                        <span style={{ fontSize: "1.5em", border: "solid lime", marginRight: 50, marginTop: 20, marginLeft: 50, display: "block", borderRadius:10}}>
                            <p className="res" style={{ paddingLeft: 10, paddingRight: 10, paddingTop: 30, paddingBottom: 30, textAlign: "center", marginTop:0, marginBottom:0, borderRadius:7 }}>Thank you so much for your feedback! We greatly appreciate you for reaching out to us! Please allow 24 hours to hear back from one of our team members. Thank you!</p>
                        </span>
                        <br/>
                        <br/>
                        <br/>
                        <button className="homeButton" onClick={this.toggle} style={{ display: "block", margin: "auto", zoom: 3.5, borderRadius: 5, border:"solid cyan" }}>Go back</button>
                    </>
                }
            </div>
        )
    }
}
export default Contact