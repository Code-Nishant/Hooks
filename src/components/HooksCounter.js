import React from 'react'
import { useState } from 'react'

function HooksCounter() {

    const [count, setCount]=useState(0);

  return (
    <div>
        <button onClick={()=>setCount(count+1)}>Hook Count = {count}</button>
    </div>
  )
}

export default HooksCounter