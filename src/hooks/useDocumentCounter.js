import React ,{useState} from 'react'

function useDocumentCounter(intitalCount=0) {

    const [counter,setCounter] =useState(intitalCount);
    const increment=()=>{
        setCounter(prev=>prev+1)
    }
    const decrement=()=>{
        setCounter(prev=>prev-1)
    }
    const reset=()=>{
        setCounter(0)
    }

    return [counter,increment,decrement,reset]
}

export default useDocumentCounter