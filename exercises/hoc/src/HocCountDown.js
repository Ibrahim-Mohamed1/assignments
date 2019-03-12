import React, { Component } from 'react'

class HocCountDown extends Component {
    constructor(){
        super()
        this.state={
            sub: 69
        }
    }
    
    countDown =() =>{
        this.setState(prevState=>{
            return {sub: prevState.sub - 1}
        })
    }

  render() {
      const Comp = this.props.component
    return (
        <Comp
            sub = {this.state.sub}
            countDown = {this.countDown}
            {...this.props}
        />
    )
  }
}

export default HocCountDown

export function withHocCountDown(C){
    return function (props){
        return <HocCountDown component= {C}{...props}/>
    }
}