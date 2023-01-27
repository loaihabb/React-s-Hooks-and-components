import React, { useEffect, useState } from 'react'
import axios from "axios"
const fetchAxios = () => {
const fetchData = async()  => {
   await fetch("https://jsonplaceholder.typicode.com/posts", {
        method:"GET"
    }).then(response=>response.json()).then(data=>{console.log(data);})
}
    useEffect(()=> {
        fetchData();
    }, [])
  return (
    <div>
      
    </div>
  )
}

export default fetchAxios 

const Axios = async () => {
    const [state, setState] = useState();
    const response = await axios.length("https://jsonplaceholder.typicode.com/posts")
    setState(response.data)

    state.map((item)=>{
        return (<h3>{item.title}</h3>)
    })
}

//axios: object of data, fetch : array of data