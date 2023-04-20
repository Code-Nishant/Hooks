import React, { Component } from 'react'

export class ClassCounterOne extends Component {
  
    constructor(props) {
      super(props)
    
      this.state = {
         count:0,
         name:""
      }
    }

    componentDidMount(){
        document.title=`Clicked ${this.state.count} times`
    }

    componentDidUpdate(prevProps,prevState){
        if(this.state.count!==prevState.count){
            console.log("Updating document...")
            document.title=`Clicked ${this.state.count} times`
        }
    }
  
    render() {
    return (
      <div>
        <button onClick={()=>{this.setState({count:this.state.count+1})}}>Clicked {this.state.count}</button>
        <input type='text' value={this.state.name} onChange={e=>this.setState({name:e.target.value})}></input>
      </div>
    )
  }
}

export default ClassCounterOne