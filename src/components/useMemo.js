import React, { useState } from 'react'
import { Button } from 'react-bootstrap'

const useMemo = () => {
    var randomColor ="#"+ Math.floor(Math.random()*16777215).toString(16);

    const [counter, setCounter] = useState(0);
    const [test, setTEst] = useState(0);

    const resukt = useMemo(()=>{
        <div style={{color:randomColor}}>
            value is {counter} := {counter * 2}
        </div>
    }, [counter])
  return (
    <div>
        

        <Button onClick={()=> setCounter(counter - 1)}>-</Button>
        <Button onClick={()=> setCounter(counter + 1)}>+</Button>
        <Button onClick={()=> sett}>test</Button>

    </div>
  )
}

export default useMemo


//to store values and use it 
