import React, {useState} from 'react'
import { Button } from 'react-bootstrap';
// useState, built in React, count is the initial value,
// setCount wil be in a method 
// if the value in count changes it will rerender the page
//this is useState, and its important if we need no change any thing in the same page
//if we change anything it will be visible every change
const About = () => {
  const [count , setCount] = useState(0);
  const [Text , setText] = useState("text"); //useState
  //setCount(5)
  const handleIncrease=()=>{
    setCount(count + 1)
  }
  const handledecrease=()=>{
    setCount(count - 1)
  }
  //or
  /*
  const handleInput=(e)=>{
    setText(e.target.value)
    console.log(Text)
  }
  */

//useEffect : run when the compiler starts


  return (
    <div>
      This is About
      <Button onClick={handleIncrease}>+</Button>
      <Button onClick={handledecrease}>-</Button>
      <label> count is {count}</label>

      <input type="text" value={Text} onChange={(e)=> setText(e.target.value)}></input>
      <label> count is {Text}</label>

    </div>
  )
}

export default About
