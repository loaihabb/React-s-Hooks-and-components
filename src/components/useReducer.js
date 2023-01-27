import React, { useState, useReducer } from 'react'
import { Button } from 'react-bootstrap';

const initialValue={
    count:0
}
const reducer = (state, action)=>{ //state: what i need to save
    switch(action.type)
    {
        case "increment":
            return {count:state.count + 1}
        case "decrement":
            return {count:state.count - 1}
        case "reset":
            return {count:state = 0}
        default:
            return {state}
    }
}



const useReducer = () => {
    const [value, setValue] = useState(0);
    const [state, dispatch] = useReducer(reducer, initialValue); //state : the value, dispatch the requirement
  return (
    <div>
      <Button onClick={()=> dispatch({type:"increment"})}> +</Button>
      <Button onClick={()=> dispatch({type:"decrement"})}> +</Button>
      <Button onClick={()=> dispatch({type:"reset"})}> +</Button>
    </div>
  )
}

export default useReducer


// to call reducer that i do 
// doing rerender to my component 

//const [state, dispatch] = useReducer(reducer, initial value)