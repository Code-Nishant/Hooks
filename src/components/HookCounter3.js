import React, {useReducer} from 'react'

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
function HookCounter3() {
    const [newStateOne, dispatchOne]=useReducer(reducer, intialState)
    const [newStateTwo, dispatchTwo]=useReducer(reducer, intialState)
    return (
        <div>
            <div>
                <h3>COUNT= {newStateOne}</h3>
                <button onClick={()=>{dispatchOne('increment')}}>Increment</button>
                <button onClick={()=>{dispatchOne('decrement')}}>Decrement</button>
                <button onClick={()=>{dispatchOne('reset')}}>Reset</button>
            </div>
            <div>
                <h3>COUNT= {newStateTwo}</h3>
                <button onClick={()=>{dispatchTwo('increment')}}>Increment</button>
                <button onClick={()=>{dispatchTwo('decrement')}}>Decrement</button>
                <button onClick={()=>{dispatchTwo('reset')}}>Reset</button>
            </div>
        </div>
    )
}

export default HookCounter3