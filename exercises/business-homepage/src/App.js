import React from "react"
import Nav from "./Nav"
import Info from "./Info"
import Products from "./Products"
import Footer from "./Footer"

const App = () =>{
    return (
        <div>
            <Nav/>
            <Info/>
            <Products/>
            <Footer 
            stuff={{
                section:"Products", item1:"blah", item2:"blah", item3:"blah"
            }}
            />
            <Footer 
            stuff={{
                section:"Support", item1:"blah", item2:"blah", item3:"blah"
            }}
            />
            <Footer 
            stuff={{
                section:"Social Media", item1:"blah", item2:"blah", item3:"blah"
            }}
            />
            <Footer 
            stuff={{
                section:"Comapany", item1:"blah", item2:"blah", item3:"blah"
            }}
            />
        </div>
    )
}

export default App