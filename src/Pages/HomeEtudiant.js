import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import NavbarEtudiant from './Components/NavbarEtudiant';
import SidebarEtudiant from './Components/SidebarEtudiant';

const HomeEtudiant = () => {
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
      <NavbarEtudiant />
      <SidebarEtudiant />
    </>
  );
}

export default HomeEtudiant;
