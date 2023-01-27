import React, {useEffect, useState} from 'react'
import usefetchData from './fetchData'
const customHooks = () => {
 const [state] = usefetchData("https://jsonplaceholder.typicode.com/todos")
  return (
    <div>
      
    </div>
  )
}

export default customHooks
//to get data from api or site


/*
  {state.map((item)=>{
            return (<p>{item.tite}</p>)
        })}
*/