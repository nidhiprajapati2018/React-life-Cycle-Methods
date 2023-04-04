import React from 'react'
import { useEffect } from 'react'

export default function Counter1({number}) {

    useEffect(() => {
        console.log("functional Component: Mounting..")
        return ()=>{
            console.log("function Component: Mounting")
        }
    },[number])
  

  return (
    <div>
      <h1>{number}</h1>
    </div>
  )
}
