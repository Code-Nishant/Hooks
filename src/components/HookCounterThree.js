import React, {useState} from 'react'

function HookCounterThree() {
    const [name, setName]= useState({firstName:'', lastName:''})

  return (
    <div>
        <input 
        type='text'
        value={name.firstName}
        // onChange={e =>setName({firstName:e.target.value})}
        onChange={e =>setName({...name, firstName:e.target.value})}
        />

        <input 
        type='text'
        value={name.lastName}
        // onChange={e =>setName({lastName:e.target.value})}
        onChange={e =>setName({...name, lastName:e.target.value})}
        />

        <h2>Your firstName name = {name.firstName}</h2>
        <h2>Your lastName name = {name.lastName}</h2>
        <h1>{JSON.stringify(name)}</h1>
    </div>
  )
}

export default HookCounterThree