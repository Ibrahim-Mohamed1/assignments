import React from "react"

const Badge = (props) =>{
    const {firstName, lastName, email, birth, phone, favFood, about} = props.badge
    return(
        <div style={{backgroundColor:"white",border:"solid",borderColor:"orange",borderRadius:20,display:"grid",gridTemplateColumns:'1fr 1fr',marginLeft:"15%",marginRight:"15%",marginBottom:40}}>
            <h1 style={{backgroundColor:"orange",marginRight:"-100%",marginTop:0,borderTopRightRadius:17,borderTopLeftRadius:17,paddingLeft:15}}>Badge:</h1>
            <br/>
            <h2 style={{marginLeft:50}}>Name: {firstName} {lastName}</h2>
            <h3 style={{marginLeft:50}}>Place of Birth: {birth}</h3>
            <h3 style={{marginLeft:50}}>Email: {email}</h3>
            <h3 style={{marginLeft:50}}>Phone Number: {phone}</h3>
            <h3 style={{marginLeft:50}}>Favorite Food: {favFood}</h3>
            <br/>
            <h3 style={{border:"solid",height:160,marginLeft:50,marginRight:"-90.5%",borderRadius:10,borderColor:"orange"}}>{about}</h3>
        </div>
    )
}
export default Badge