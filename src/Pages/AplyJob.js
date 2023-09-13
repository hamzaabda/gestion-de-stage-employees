// ApplyJob.js
import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import toast, { Toaster } from 'react-hot-toast';
import axios from 'axios';

const ApplyJob = () => {
  const { jobId } = useParams();
  const [candidateName, setCandidateName] = useState('');
  const [candidateEmail, setCandidateEmail] = useState('');
  const [resume, setResume] = useState('');
  const [coverLetter, setCoverLetter] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post(
        `http://localhost:3300/api/users/apply/${jobId}`,
        // Remarquez que j'ai modifié l'URL ici pour correspondre à celle que vous avez fournie.
        {
          candidateName,
          candidateEmail,
          resume,
          coverLetter,
        }
      );

      if (response.status === 201) {
        toast.success('Candidature soumise avec succès');
        // Redirigez l'utilisateur vers une page de confirmation ou une autre page après la soumission réussie.
        // Vous pouvez utiliser react-router-dom pour gérer la navigation.
        // Par exemple, pour rediriger vers la page d'accueil :
        // history.push('/');
      } else {
        toast.error('Erreur lors de la soumission de la candidature');
      }
    } catch (error) {
      console.error(error);
      toast.error('Erreur lors de la soumission de la candidature');
    }
  };

  return (
    <div className="apply-job">
      <Toaster />
      <h1>Postuler à l'offre d'emploi</h1>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Nom du candidat</label>
          <input
            type="text"
            value={candidateName}
            onChange={(e) => setCandidateName(e.target.value)}
            required
          />
        </div>

        <div className="form-group">
          <label>Email du candidat</label>
          <input
            type="email"
            value={candidateEmail}
            onChange={(e) => setCandidateEmail(e.target.value)}
            required
          />
        </div>

        <div className="form-group">
          <label>CV (lien vers un fichier)</label>
          <input
            type="text"
            value={resume}
            onChange={(e) => setResume(e.target.value)}
            required
          />
        </div>

        <div className="form-group">
          <label>Lettre de motivation (optionnelle)</label>
          <textarea
            value={coverLetter}
            onChange={(e) => setCoverLetter(e.target.value)}
          />
        </div>

        <button type="submit">Postuler</button>
      </form>
    </div>
  );
};

export default ApplyJob;
