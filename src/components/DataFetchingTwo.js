import React, {useReducer, useEffect} from 'react'
import axios from 'axios'

const intialState={
    loading:true,
    error:"",
    post:{}
}
const reducer=(state,action)=>{
    switch(action.type){
        case 'Fetch_Success':
            return {
                loading:false,
                post:action.payload,
                error:''
            }
        case 'Fetch_Error':
            return {
                loading:false,
                post:{},
                error:'Something went wrong'
            }
        default:
            return state
    }    
}
function DataFetchingTwo() {
    const [currentState,dispatch]=useReducer(reducer,intialState);

    useEffect(()=>{
        axios.get('https://jsonplaceholder.typicode.com/posts/1')
        .then(respone=>{
            dispatch({type:"Fetch_Success", payload: respone.data})
        })
        .catch(error=>{
            dispatch({type:"Fetch_Error"})
        })
    },[])

  return (
    <div>
        {currentState.loading?'Loading...':currentState.post.title}
        {currentState.error?currentState.error:null}
    </div>
  )
}

export default DataFetchingTwo