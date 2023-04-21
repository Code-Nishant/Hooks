import React, { useEffect, useState } from 'react'

function HookIntervalCounter() {
    const[count,setCount] =useState(0)
    // const [someProp, setProp]= useState("nishant")

    const tick=()=>{
        setCount(prevcount=> prevcount+1)
    }
    useEffect(()=>{
        // function doSomething(someProp) {
        //     console.log(someProp)
        // }
        // doSomething()
        // declare function inside useEffect method
        const interval=setInterval(tick,1000)

        return ()=>{
            clearInterval(interval)
        }
    },[])
  return (
    <div>
        {count}
    </div>
  )
}

export default HookIntervalCounter