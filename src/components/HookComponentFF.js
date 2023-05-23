import React,{useContext} from 'react'

function HookComponentFF() {
    const countContext=useContext(CountContext)
    return (
      <div>
          HookComponentFF
          <button onClick={()=>{countContext.countDispatch('increment')}}>Increment</button>
          <button onClick={()=>{countContext.countDispatch('decrement')}}>Decrement</button>
          <button onClick={()=>{countContext.countDispatch('reset')}}>Reset</button>
      </div>
    )
}

export default HookComponentFF