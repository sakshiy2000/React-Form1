import React from 'react'

const Child = (props) => {

    // console.log(props.childGift);

    const returnGift = "Fruits"
    
    props.Return("Fruits");

  return (
    <div> 
        <h1>This is Child components
            This is gift recived 
            {props.childGift} hello
            </h1>
            
    </div>
  )
}

export default Child