import React from 'react'
import Child from './Child'
import { useState } from 'react';

const Parent = () => {

    const gift = "phone" 

    const [returnGift, setReturnGift] = useState("");



  return (
    
    <div>
        <Child childGift={gift} Return={setReturnGift}/>
        <h1>This is Recived return gift : {returnGift}</h1>
    

    </div>
    


    // parent data used to child
    // <div>  
    //     <Child  childGift={gift} />
    //     <Child childGift={"Bike"} />
    // </div> 
  )
}

export default Parent