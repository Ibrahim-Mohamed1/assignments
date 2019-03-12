import React, { Component } from 'react'

class HocCountUp extends Component {
    constructor(){
        super()
        this.state={
            add: 0
        }
    }

    // countUp = () => {this.setState(({add}) => ({add: add + 1}))}

    countUp = () => {
        this.setState(prevState => {
            return {add: prevState.add + 69}
        })
    }

  render() {

    const Comp = this.props.component

    return (
        <Comp
            add= {this.state.add}
            countUp= {this.countUp}
            {...this.props}
        />
    )
  }
}

export default HocCountUp

export function withHocCountUp (C){
    return function (props){
        return <HocCountUp component={C}{...props}/>
    }
}