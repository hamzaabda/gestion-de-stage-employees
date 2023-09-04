import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Navbar from './Components/Navbar';

const Home= ()=>{

const [connectedUser,setConnectedUser]=useState()

const navigate =useNavigate();

const getConnectedUserData = ()=>{


setConnectedUser(JSON.parse(localStorage.getItem("user_data")))

}

useEffect(()=>{

getConnectedUserData();


if(localStorage.getItem("user_data")===null){


navigate("/login");

}
},[]);



return(

    <>
<Navbar/>    
    <h1>Hello connectedUser</h1>
    
    
    </>


)


}
export default Home;