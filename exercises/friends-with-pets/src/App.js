import React from "react"
import Friends from "./Friends"

const friends = [
  {
    name: "Ben",
    age: 29,
    pets: [
      {
        name: "spot",
        breed: "tabby"
      },{
        name: "John Johnson",
        breed: "husky"
      },{
        name: "Bear the bear",
        breed: "Grizzly"
      }
    ]
  },{
    name: "Bob",
    age: 31,
    pets: [
      {
        name: "Sally",
        breed: "Australian Shepard"
      }
    ]
  },{
    name: "Marcus",
    age: 25,
    pets: [
      {
        name: "Indy",
        breed: "Akita"
      },{
        name: "Anna",
        breed: "persian cat"
      }
    ]
  },{
    name: "Jacob",
    age: 20,
    pets: [
      {
        name: "fluffy",
        breed: "sphynx cat"
      },{
        name: "patches",
        breed: "sphynx cat"
      },{
        name: "tiger",
        breed: "sphynx cat"
      },{
        name: "oscar",
        breed: "sphynx cat"
      }
    ]
  }
]
const App = (props) => {
  
  const mappedFriends = friends.map((friend) =>{
    return <div>
      <Friends 
        name={friend.name} pets={friend.pets}
      />
    </div>
  })

  return (
    <div style={{display:"grid", gridTemplateColumns:"repeat(auto-fit, minmax(100px, 1fr))", marginTop:200}}>
      {mappedFriends}
    </div>
  )
}

export default App