import React, { useState } from 'react'
import useDocumentUserInput from '../hooks/useDocumentUserInput'

function HookDocUserFormOne() {

    // const[firstName, setFirstName]=useState('')
    // const[lastName, setLastName]=useState('')

    const [firstName,bindFirstName,resetFirstName]=useDocumentUserInput("")
    const [lastName,bindLastName,resetLastName]=useDocumentUserInput("")

    const sumbitHandler= e=>{
        e.preventDefault();
        alert(`Hello ${firstName} ${lastName}`)
        resetFirstName()
        resetLastName()
    }
    
  return (
    <div>
        <form onSubmit={sumbitHandler}>
            <div>
                <label>First Name</label>
                {/* <input type="text" value={firstName} onChange={e=>setFirstName(e.target.value)} /> */}
                <input type="text" {...bindFirstName} />
            </div>
            <div>
                <label>Last Name</label>
                {/* <input type="text" value={lastName} onChange={e=>setLastName(e.target.value)} /> */}
                <input type="text" {...bindLastName} />
            </div>
            <button>Sumbit</button>
        </form>
    </div>
  )
}

export default HookDocUserFormOne