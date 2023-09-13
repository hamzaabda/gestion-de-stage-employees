// Register.js
import React, { useState } from 'react';
import toast, { Toaster } from 'react-hot-toast';
import UserService from '../Services/UserService';

const Register = () => {
  const [nom, setNom] = useState('');
  const [prenom, setPrenom] = useState('');
  const [email, setEmail] = useState('');
  const [cin, setCin] = useState('');
  const [role, setRole] = useState('');
  const [password, setPassword] = useState('');

  const register = async (e) => {
    e.preventDefault();
    console.log("form submitted");
    console.log("form data", nom, prenom, email, cin, role, password);

    const data = {
      nom: nom,
      prenom: prenom,
      email: email,
      cin: cin,
      role: role,
      password: password,
    };
    try {
      const response = await UserService.register(data);
      console.log("response===>", response);
      toast.success('successfully created!');
    } catch (err) {
      console.log(err);
      toast.error('failed');
    }
  };

  return (
    <div className='register'>
      <Toaster />

      <div className='register-cover'></div>

      <div className='register-content'>
        <div>
          <h1>Space</h1>
          <p> Space Application</p>
        </div>

        <div>
          <form onSubmit={register}>
            <div className='form-group'>
              <label> Nom</label>
              <input className="input" type="text" value={nom} onChange={(e) => setNom(e.target.value)} />
            </div>

            <div className='form-group'>
              <label> Prenom</label>
              <input className='input' type="text" value={prenom} onChange={(e) => setPrenom(e.target.value)} />
            </div>

            <div className='form-group'>
              <label> Email</label>
              <input className='input' type="text" value={email} onChange={(e) => setEmail(e.target.value)} />
            </div>

            <div className='form-group'>
              <label> cin</label>
              <input className='input' type="text" value={cin} onChange={(e) => setCin(e.target.value)} />
            </div>

            <div className='form-group'>
              <label> Role</label>
              <input className='input' type="text" value={role} onChange={(e) => setRole(e.target.value)} />
            </div>

            <div className='form-group'>
              <label> Password</label>
              <input className='input' type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
            </div>

            <button className='btn signin' type='submit'>Sign in</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Register;
