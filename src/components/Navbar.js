import React from 'react';
import { NavLink } from 'react-router-dom';



const Navbar = () => {
    return (

        <>

            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <div className="container-fluid">
                    <a className="navbar-brand" href="#">Navbar</a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">

                                <NavLink to={'/'}>Home</NavLink>
                                {/* <a className="nav-link active" aria-current="page" href="#">Home</a> */}
                            </li>

                            <li className="nav-item">
                                 <NavLink to={'/contact'}>Contact</NavLink>
                            </li>

                            <li className="nav-item">
                                 <NavLink to={'/services'}>Services</NavLink>
                            </li>

                            <li className="nav-item">
                                 <NavLink to={'/about'}>About</NavLink>
                            </li>

                            <li className="nav-item">
                                 <NavLink to={'/books'}>Books</NavLink>
                            </li>

                            <li className="nav-item">
                                 <NavLink to={'/state'}>State</NavLink>
                            </li>

                            <li className="nav-item">
                                 <NavLink to={'/parent'}>Parent</NavLink>
                            </li>

                            <li className="nav-item">
                                 <NavLink to={'/child'}>Child</NavLink>
                            </li>

                            <li className="nav-item">
                                 <NavLink to={'/form'}>Form</NavLink>
                            </li>

                            <li className="nav-item">
                                 <NavLink to={'/myform'}>Myform</NavLink>
                            </li>

                            <li className="nav-item">
                                 <NavLink to={'/bookDum'}>BookDum</NavLink>
                            </li>

                            
                        </ul>

                    </div>
                </div>
            </nav>


        </>

    )
}

export default Navbar