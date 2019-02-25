import React from "react"

const Footer = () => {
    const container={
        textAlign:"center"
    }
    const list={
        display:"inline-block",
        listStyle:"none",
        marginLeft: 0,
        marginRight: 35,
        marginTop:0
    }
    const img={
        height: 50,
        width: 50,
        cursor:"pointer"
    }
    const pp={
        textAlign:"center",
        marginBottom:60
    }
    return (
        <div>
            <ul style={container}>
                <li style={list}><img style={img} src="https://image.flaticon.com/icons/png/512/23/23681.png"/></li>
                <li style={list}><img style={img} src="http://www.haguetalks.com/user-files/uploads/2018/11/HagueTalks-instagram.png"/></li>
                <li style={list}><img style={img} src="https://cdn3.iconfinder.com/data/icons/2018-social-media-black-and-white-logos/1000/2018_social_media_popular_app_logo_snapchat-512.png"/></li>
            </ul>
            <p style={pp}>Copyright © Your Website 2019</p>
        </div>
    )
}

export default Footer