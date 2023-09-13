// JobList.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

const JobList = () => {
  const [jobs, setJobs] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchJobs() {
      try {
        const authToken = localStorage.getItem('token');

        if (!authToken) {
          console.error('Jeté d\'authentification manquant');
          setLoading(false);
          return;
        }

        const response = await axios.get('http://localhost:3300/api/users/getManyjob', {
          headers: {
            Authorization: `Bearer ${authToken}`
          }
        });

        setJobs(response.data);
        setLoading(false);
      } catch (error) {
        console.error('Erreur lors de la récupération des jobs :', error);
        setLoading(false);
      }
    }

    fetchJobs();
  }, []);

  if (loading) {
    return <p>Chargement en cours...</p>;
  }

  return (
    <div className='job-list'>
      <h1>Liste des Jobs</h1>
      <ul>
        {jobs.map((job) => (
          <li key={job._id}>
            <h3>{job.title}</h3>
            <p>{job.description}</p>
            {/* Ajoutez un bouton pour postuler au job */}
            <Link to={`/aplyjob/`}>
              <button>Postuler à ce job</button>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default JobList;
