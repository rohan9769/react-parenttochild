import React, { useEffect, useState } from 'react'
import Child from './Child'

const Parent = () => {

    const[data,setData] = useState('')
    const[counter,setCounter] = useState(0)
    const[name,setName] = useState('')

    const parentToChild = () =>{
        setData("This is data from parent to child")
    }

    const incrementCounter = () =>{
        setCounter(counter + 1)
        console.log('Counter from parent to child')

    }

    const handleSubmit = (e) =>{
        e.preventDefault()
        alert(`Name from parent to child is ${name}`)
    }

  return (
    <>
    <Child incrementCounter={counter} parentToChild={data} handleSubmit={name}></Child>
    <div>
        <button onClick = {()=>parentToChild()}>Click Parent</button>
        <button onClick={()=>incrementCounter()}>Increment Counter (Parent)</button>
        <form onSubmit={handleSubmit}>
            <label>Name  : </label>
            <input type='text' value={name} onChange={(e)=>setName(e.target.value)}></input>
            <button type='submit'>Submit</button>
        </form>
        
    </div>
    </>
  )
}

export default Parent