import React, {useRef} from 'react'
import { Button } from 'react-bootstrap';

/*
if weve clicked to the button it will print the text in label example

*/


const UseRef = () => {
    const valueInput = useRef(null);
    const focus=()=>{
        valueInput.current.focus();
        console.log(valueInput.current.value)
    }
  return (
    <div>
      <input type="text" ref={value}> </input>
      <Button onClick={focus}>Focus</Button>
    </div>
  )
}

export default UseRef
