// import {Component} from "react"

// class Toggler extends Component{
//     constructor(){
//         super()
//         this.state={
//             on:false
//         }
//     }
    
//     toggle = () => {
//         this.setState(({on}) => ({on: !on}))
//     }
    
//     render(){
//         return(this.props.render({on: this.state.on, toggle: this.toggle}))
//     }
// }

// export default Toggler

// import React from "react"

// class Toggler extends React.Component{
//     constructor(){
//         super()
//         this.state={
//             on: false
//         }
//     }
//     toggle = () =>{
//         this.setState(({on}) => ({on: !on}))
//     }
//     render(){
//         return this.props.render({on: this.state.on, toggle: this.toggle})
//     }
// }
// export default Toggler

// import React from "react"

// class Toggler extends React.Component{
//     constructor(){
//         super()
//         this.state={
//             on: false
//         }
//     }
//     toggle = () => {
//         this.setState(({on}) => ({on: !on}))
//     }
//     render(){
//         return this.props.render({on: this.state.on, toggle: this.toggle})
//     }
// }

// export default Toggler

// import React from "react"

// class Toggler extends React.Component{
//     constructor(){
//         super()
//         this.state={

//         }
//     }
//     toggle = () =>{
//         this.setState(({on}) => ({on: !on}))
//     }
//     render(){
//         return this.props.render({on: this.state.on, toggle: this.toggle})
//     }
// }

// export default Toggler

import React from "react"

class Toggler extends React.Component{
    constructor(){
        super()
        this.state={
            on: false
        }
    }
    toggle = () =>{
        this.setState(({on}) => ({on: !on}))}
}