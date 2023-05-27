import React, { Component } from 'react'

export class ClassTimer extends Component {
    interval
    constructor(props) {
      super(props)
    
      this.state = {
         timmer:0
      }
    }

    componentDidMount(){
        this.interval=setInterval(()=>{
            this.setState(prevState=>({timmer:prevState.timmer+1}))
        },1000)
    }
    componentWillUnmount(){
        clearInterval(this.interval)
    }
    render() {
    return (
      <div>
        Class Timmer= {this.state.timmer}
        <button onClick={()=>{clearInterval(this.interval)}}>Clear Timmer</button>
      </div>
    )
  }
}

export default ClassTimer