import React from 'react'

const Child = ({parentToChild,incrementCounter,handleSubmit}) => {
  return (
    <div>
        {parentToChild}
        ------------------
        {incrementCounter}
        ------------------
        <h1>Inside Child Component{handleSubmit}</h1>

    </div>
  )
}

export default Child