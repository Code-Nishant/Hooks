import React, {useReducer} from 'react'
import { act } from 'react-dom/test-utils';

const intialState={
    firstCounter:0,
    secondCounter:10
};

const reducer= (currentState,action)=>{
    switch (action.type) {
        case 'increment':
            return {...currentState,firstCounter: currentState.firstCounter+action.value};
        case 'decrement':
            return {...currentState,firstCounter: currentState.firstCounter-action.value};
        case 'increment2':
            return {...currentState,secondCounter: currentState.secondCounter+action.value};
        case 'decrement2':
            return {...currentState,secondCounter: currentState.secondCounter-action.value};  
        case 'reset':
            return intialState;
        default:
            return currentState
    }
}

function HookCounterTwo() {
    const [newState, dispatch]=useReducer(reducer, intialState)
    return (
      <div>
        <div>
          <h3>First Count= {newState.firstCounter}</h3>
          <button onClick={()=>{dispatch({type:'increment',value:1})}}>Increment</button>
          <button onClick={()=>{dispatch({type:'decrement',value:1})}}>Decrement</button>

          <button onClick={()=>{dispatch({type:'increment',value:5})}}>Increment by 5</button>
          <button onClick={()=>{dispatch({type:'decrement',value:5})}}>Decrement by 5</button>
        </div>

        <div>
          <h3>Second Count= {newState.secondCounter}</h3>
          <button onClick={()=>{dispatch({type:'increment2',value:1})}}>Increment</button>
          <button onClick={()=>{dispatch({type:'decrement2',value:1})}}>Decrement</button>

          <button onClick={()=>{dispatch({type:'increment2',value:5})}}>Increment by 5</button>
          <button onClick={()=>{dispatch({type:'decrement2',value:5})}}>Decrement by 5</button>
        </div>          

        <div>
          <button onClick={()=>{dispatch({type:'reset'})}}>Reset</button>
        </div>
      </div>
    )
}

export default HookCounterTwo