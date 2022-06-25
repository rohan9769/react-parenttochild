import React from 'react'

const Child = ({parentToChild,incrementCounter}) => {
  return (
    <div>
        {parentToChild}
        {incrementCounter}
    </div>
  )
}

export default Child