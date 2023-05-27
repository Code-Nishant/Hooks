import React, { useEffect, useState } from 'react'
import useDocumentCounter from '../hooks/useDocumentCounter'

function HookDocCounterOne() {

    const [count, increment,decrement,reset]=useDocumentCounter()

    // const [counter,setCounter] =useState(0);
    // const increment=()=>{
    //     setCounter(prev=>prev+1)
    // }
    // const decrement=()=>{
    //     setCounter(prev=>prev-1)
    // }
    // const reset=()=>{
    //     setCounter(0)
    // }
    
  return (
    <div>
        <h2>{count}</h2>
        <button onClick={increment}>Increment</button>
        <button onClick={decrement}>Decrement</button>
        <button onClick={reset}>Reset</button>
    </div>
  )
}

export default HookDocCounterOne