import React from 'react'
import { useState } from 'react'


function HooksCounterTwo() {

    const [count,setCount]=useState(0);
    const incrementFive=()=>{
        for(let i=0;i<5;i++){
            // setCount(count+1)
            setCount(prev=>prev+1)
        }
    }

  return (
    <div>
        <p>HooksCounterTwo = {count}</p>
        <button onClick={()=>{setCount(0)}}>Reset</button>
        {/* <button onClick={()=>{setCount(count+1)}}>Increment</button> */}
        {/* <button onClick={()=>{setCount(count-1)}}>Decrement</button> */}
        <button onClick={()=>{setCount(prev => prev+1)}}>Increment</button>
        <button onClick={()=>{setCount(prev =>prev-1)}}>Decrement</button>
        <button onClick={incrementFive}>Increment Five</button>
    </div>
  )
}

export default HooksCounterTwo