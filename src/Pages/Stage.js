import React, { useState } from 'react';
import toast, { Toaster } from 'react-hot-toast';
import UserService from '../Services/UserService';

const Stage = () => {
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [startdate, setStartdate] = useState('');
  const [enddate, setEnddate] = useState('');

  const stage = async (e) => {
    e.preventDefault();
    console.log("form submitted");
    console.log("form data", name, description, startdate, enddate);

    const data = {
      name: name,
      description: description,
      startdate: startdate,
      enddate: enddate,
    };

    try {
      // Fetch the authentication token from wherever you store it (e.g., localStorage)
      const authToken = localStorage.getItem('token');

      if (!authToken) {
        // Handle the case where the token is missing or not valid
        toast.error('Authentication token missing or invalid');
        return;
      }

      const response = await UserService.stage(data, authToken);
      console.log("response ===>", response);
      toast.success('Successfully created!');
      localStorage.setItem('user_data', JSON.stringify(response.data.user));
      localStorage.setItem('token', response.data.token);

      // Clear the input fields
      setName('');
      setDescription('');
      setStartdate('');
      setEnddate('');
  

    } catch (err) {
      console.log(err);
      toast.error('Failed');
    }
  };

  return (
    <div className='stage'>
      <Toaster />

      <div className='stage-cover'></div>

      <div className='stage-content'>
        <div>
          <h1>Space</h1>
          <p>Space Application</p>
        </div>

        <div>
          <form onSubmit={stage}>
            <div className='form-group'>
              <label>name</label>
              <input className="input" type="text" value={name} onChange={(e) => setName(e.target.value)} />
            </div>

            <div className='form-group'>
              <label>description</label>
              <input className='input' type="text" value={description} onChange={(e) => setDescription(e.target.value)} />
            </div>

            <div className='form-group'>
              <label>startdate</label>
              <input className='input' type="text" value={startdate} onChange={(e) => setStartdate(e.target.value)} />
            </div>

            <div className='form-group'>
              <label>enddate</label>
              <input className='input' type="text" value={enddate} onChange={(e) => setEnddate(e.target.value)} />
            </div>

            <button className='btn stage' type='submit'>
              Ajouter
            </button>

            
          </form>
        </div>
      </div>
    </div>
  );
};

export default Stage;