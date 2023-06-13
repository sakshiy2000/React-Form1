//  this is the parent ---------> of card1 folder
import React from 'react'
import Card1 from './Card1'

export const Cardhome = () => {
  return (
    <div className='container'>

        <div className='row'>

            <div className='col-md-4'>
                <Card1 title={"petdata"} price={"400"} path={"./assets/images/pet.webp"}/>

            </div>

        </div>

    </div>
  )
}
export default Cardhome