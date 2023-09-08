import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Navbar from './Components/Navbar';
import Sidebar from './Components/Sidebar';

const Home = () => {
  const [connectedUser, setConnectedUser] = useState();
  const navigate = useNavigate();

  const getConnectedUserData = () => {
    setConnectedUser(JSON.parse(localStorage.getItem("user_data")));
  }

  useEffect(() => {
    getConnectedUserData();

    if (localStorage.getItem("user_data") === null) {
      navigate("/login");
    }
  }, []);

  return (
    <>
    
    {connectedUser && <h1>Hello {connectedUser.email}</h1>}
      <Navbar />
      <Sidebar />
    </>
  );
}

export default Home;
