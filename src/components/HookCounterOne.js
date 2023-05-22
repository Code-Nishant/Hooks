import React, { useReducer } from 'react'

const intialState=0;

const reducer= (currentState,action)=>{
    switch (action) {
        case 'increment':
            return currentState+1;
            break;
        case 'decrement':
            return currentState-1;
            break;
        case 'reset':
            return intialState;
            break;
        default:
            return currentState
            break;
    }
}

function HookCounterOne() {
    const [newState, dispatch]=useReducer(reducer, intialState)
  return (
    <div>
        <h3>COUNT= {newState}</h3>
        <button onClick={()=>{dispatch('increment')}}>Increment</button>
        <button onClick={()=>{dispatch('decrement')}}>Decrement</button>
        <button onClick={()=>{dispatch('reset')}}>Reset</button>
    </div>
  )
}

export default HookCounterOne