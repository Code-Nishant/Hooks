import React, { useEffect, useState } from 'react'

function HookIntervalCounter() {
    const[count,setCount] =useState(0)

    const tick=()=>{
        setCount(prevcount=prevcount+1)
    }
    useEffect(()=>{
        const interval=setInterval(tick,1000)
    },[count])
  return (
    <div>
        {count}
    </div>
  )
}

export default HookIntervalCounter