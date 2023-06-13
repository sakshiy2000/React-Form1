import React from "react";
import Blog from '../ui/Blog/Blog'; 
import Card from "../ui/Card/Card"
import Card1 from "./Card1";
import Cardhome from "./Cardhome";


const Home = () =>{

    return(

        <>
        <h1>This is Home component</h1>

        <Blog/>
        <Card/>
        <Cardhome/>
        </>
    )
}

export default Home ;