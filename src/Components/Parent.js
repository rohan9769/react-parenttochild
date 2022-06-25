import React, { useEffect, useState } from 'react'
import Child from './Child'

const Parent = () => {

    const[data,setData] = useState('')
    const[counter,setCounter] = useState(0)

    const parentToChild = () =>{
        setData("This is data from parent to child")
    }

    const incrementCounter = () =>{
        setCounter(counter + 1)
        console.log('Counter from parent to child')

    }

  return (
    <>
    <Child incrementCounter={counter} parentToChild={data}></Child>
    <div>
        <button onClick = {()=>parentToChild()}>Click Parent</button>
        <button onClick={()=>incrementCounter()}>Increment Counter (Parent)</button>
        
    </div>
    </>
  )
}

export default Parent