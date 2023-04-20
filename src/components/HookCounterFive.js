import React, { useEffect, useState } from 'react'

function HookCounterFive() {
    const [count,setCount]=useState(0);
    const [name,setName]=useState("");

    useEffect(()=>{
        console.log("Updating Hook")
        document.title=`You Clicked ${count} times`
    }, [count])

  return (
    <div>
        <input type='text' value={name} onChange={e=>setName(e.target.value)}></input>
        <button onClick={()=>setCount(count+1)}>Clicked {count}</button>
    </div>
  )
}

export default HookCounterFive