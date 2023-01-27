import React, { useEffect, useState } from 'react'
import { Button } from 'react-bootstrap';


const UseEffect = () => {
    const [count, useState] = useState(0);
    useEffect(() => {
        console.log("helo from useEffect") // it works without press anything
    }, [count]) // if the count changes, it will run useEffect again 
    return (
        <div>
            <Button onClick={() => setCount(count + 1)}>+</Button>
            <label>{count}</label>
        </div>
    )
}

export default UseEffect


/*
const UseEffect = () => {
    useEffect(()=>{
        console.log("helo from useEffect") 
    }, []) // only run once


const UseEffect = () => {
    useEffect(()=>{
        console.log("helo from useEffect") 
    }, []) // everytime this component rerenders


const UseEffect = () => {
    const [Condition, useState] = useState(0);
    useEffect(()=>{
        console.log("helo from useEffect") 
    }, [Condition]) // everytime the condition changes it will run




*/