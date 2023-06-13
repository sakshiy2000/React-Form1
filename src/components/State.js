import React from 'react'
import { useState } from 'react';

const State = () => {

    const [counter, setCounter] = useState(0);



  return (
    <div>
        <h1>{counter}</h1>
        <button type='button' onClick={( ) => setCounter(counter + 1)}> + </button> 
        <button type='button' onClick={( ) => setCounter(counter - 1)}> - </button> 



    </div>
  )
}

export default State