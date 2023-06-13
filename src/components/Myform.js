import React from 'react'
import { useState } from 'react'
import classes from './Myform.module.css'

const Myform = () => {

    const [firstName, setFirstName] = useState();
    const [fname, setfname] = useState();

    const [lastName, setLastName] = useState();
    const [lname, setlname] = useState();

    const [email, setEmail] = useState();
    const [email1, setemail1] = useState();



    const handleForm = (e) => {

        e.preventDefault();
        setfname(firstName)
        setlname(lastName)
        setemail1(email)

    }

    return (
        <div className={`mt-4 d-flex ${classes.maindiv}`}>

            <div className={`mt-5 ${classes.innerdiv1}`}>
                <form className={`mt-2 text-center ${classes.labels}`} onSubmit={handleForm}>

                    <legend className={`mt-2 ${classes.heading}`}>Create Account</legend>

                    <label>Enter First Name :  </label>
                    <input className={`${classes.l1}`} type='text' onChange={(e) => setFirstName(e.target.value)} /> <br/><br/>

                    <label>Enter Last Name :  </label>
                    <input className={`${classes.l1}`} type='text' onChange={(e) => setLastName(e.target.value)} /><br/><br/>

                    <label>Enter Email :  </label>
                    <input className={`${classes.l1}`} type='email' onChange={(e) => setEmail(e.target.value)} /> <br/><br/>

                    <button type='submit' className={`mt-1 ${classes.button}`}> Submit </button><br/><br/>

                </form>
                </div>

                <div className={`mt-5 ${classes.innerdiv2}`}>
                    <h2 className={`${classes.h2}`}>Check Account</h2>
                    <h3>{fname}</h3>
                    <h3>{lname}</h3>
                    <h3>{email1}</h3>

                </div>

        </div>
    )
}

export default Myform