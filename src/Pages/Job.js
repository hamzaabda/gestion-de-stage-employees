import React, { useState } from 'react';
import toast, { Toaster } from 'react-hot-toast';
import UserService from '../Services/UserService';


const Job = () => {
  
  const [title, setTitle] = useState('');
  const [company, setCompany] = useState('');
  const [description, setDescription] = useState('');
  const [location, setLocation] = useState('');
  const [createdAt, setCreatedAt] = useState('');

  const job = async (e) => {
    e.preventDefault();
    console.log("form submitted");
    console.log("form data", title, company, description, location,createdAt);

    const data = {
      title: title,
      company: company,
      description: description,
      location: location,
      createdAt: createdAt
    };

    try {
      // Fetch the authentication token from wherever you store it (e.g., localStorage)
      const authToken = localStorage.getItem('token');

      if (!authToken) {
        // Handle the case where the token is missing or not valid
        toast.error('Authentication token missing or invalid');
        return;
      }

      const response = await UserService.job(data, authToken);
      console.log("response ===>", response);
      toast.success('Successfully created!');
      localStorage.setItem('user_data', JSON.stringify(response.data.user));
      localStorage.setItem('token', response.data.token);

      // Clear the input fields
      setTitle('');
      setCompany('');
      setDescription('');
      setLocation('');
      setCreatedAt('');

       

    } catch (err) {
      console.log(err);
      toast.error('Failed');
    }
  };

  return (
    <div className='job'>
      <Toaster />

      <div className='job-cover'></div>

      <div className='job-content'>
        <div>
          <h1>Space</h1>
          <p>Space Application</p>
        </div>

        <div>
          <form onSubmit={job}>
            <div className='form-group'>
              <label>title</label>
              <input className="input" type="text" value={title} onChange={(e) => setTitle(e.target.value)} />
            </div>

            <div className='form-group'>
              <label>company</label>
              <input className='input' type="text" value={company} onChange={(e) => setCompany(e.target.value)} />
            </div>

            <div className='form-group'>
              <label>description</label>
              <input className='input' type="text" value={description} onChange={(e) => setDescription(e.target.value)} />
            </div>

            <div className='form-group'>
              <label>location</label>
              <input className='input' type="text" value={location} onChange={(e) => setLocation(e.target.value)} />
            </div>


            <div className='form-group'>
              <label>createdAt</label>
              <input className='input' type="text" value={createdAt} onChange={(e) => setCreatedAt(e.target.value)} />
            </div>



            <button className='btn job' type='submit'>
              Ajouter
            </button>

            <button className='btn job' type='submit'>
              afficher
            </button>






          </form>
        </div>
      </div>
    </div>
  );
};

export default Job;
