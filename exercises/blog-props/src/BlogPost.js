import React from "react"

const BlogPost = () => {
    const div={
        marginLeft: "22.3em",
        marginRight: "22.3em"
    }
    const title ={
        fontSize:43,
        marginBottom:10,
        cursor:"pointer"
    }
    const description ={
        fontSize:30,
        margin:0,
        fontWeight:"lighter",
        cursor:"pointer"
    }
    const date ={
        fontSize:20,
        color:"gray"
    }
    const span={
        color:"black",
        cursor:"pointer"
    }
    const button={
        height:55,
        width:180,
        fontSize:15,
        fontWeight:"bold",
        color:"white",
        backgroundColor:"#0085a1",
        marginLeft:"64.7%",
        display:"block",
        outline: "none",
        cursor:"pointer"
      }
// #00657b
    return (
        <div>
            <div style={div}>
                <h1 style={title}>Man must explore, and this is exploration at its greatest</h1>
                <p style={description}>Problems look mighty small from 150 miles up</p>
                <p style={date}>Posted by <span style={span}>Start Bootstrap</span> on September 24, 2019</p>
                <hr></hr>
                <h1 style={title}>I believe every human has a finite number of heartbeats. I don't intend to waste any of mine.</h1>
                <p style={date}>Posted by <span style={span}>Start Bootstrap</span> on September 18, 20199</p>
                <hr></hr>
                <h1 style={title}>Science has not yet mastered prophecy</h1>
                <p style={description}>We predict too much for the next year and yet far too little for the next ten.</p>
                <p style={date}>Posted by <span style={span}>Start Bootstrap</span> on August 24, 2019</p>
                <hr></hr>
                <h1 style={title}>Failure is not an option</h1>
                <p style={description}>Many say exploration is part of our destiny, but it’s actually our duty to future generations.</p>
                <p style={date}>Posted by <span style={span}>Start Bootstrap</span> on July 8, 2019</p>
                <hr></hr>
            </div>
                <button style={button}>OLDER POSTS</button>
                <hr></hr>
        </div>
    )
}

export default BlogPost