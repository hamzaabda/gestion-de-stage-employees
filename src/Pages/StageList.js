import React, { useState, useEffect } from 'react';
import axios from 'axios';

import './StageList.css';

const AssignStage = () => {
  const [studentId, setStudentId] = useState('');
  const [stageInfo, setStageInfo] = useState({
    name: '',
    description: '',
    startDate: '',
    endDate: '',
  });
  const [error, setError] = useState('');
  const [successMessage, setSuccessMessage] = useState('');
  const [assignedStage, setAssignedStage] = useState(null);
  const [selectedStage, setSelectedStage] = useState(null);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setStageInfo({ ...stageInfo, [name]: value });
  };

  const assignStage = async () => {
    try {
      const response = await axios.post(
        `http://localhost:3300/api/users/assignStage/${studentId}/stage`,
        stageInfo
      );
      console.log('Server Response:', response);
      if (response.data.error) {
        setError(response.data.error);
        setSuccessMessage('');
      } else {
        setSuccessMessage('Étudiant affecté au stage avec succès !');
        setError('');
        setAssignedStage(stageInfo); // Mettez à jour les informations du stage affecté
      }
    } catch (error) {
      console.error('Error assigning stage:', error);
      setError('Erreur lors de l\'affectation du stage à l\'étudiant');
      setSuccessMessage('');
    }
  };

  const checkSelectedStage = () => {
    // Comparez le stage sélectionné par l'étudiant avec le stage actuellement affecté
    if (
      selectedStage &&
      assignedStage &&
      selectedStage.name === assignedStage.name &&
      selectedStage.description === assignedStage.description &&
      selectedStage.startDate === assignedStage.startDate &&
      selectedStage.endDate === assignedStage.endDate
    ) {
      alert('Le choix de l\'étudiant correspond à l\'affectation réelle.');
    } else {
      alert('Le choix de l\'étudiant ne correspond pas à l\'affectation réelle.');
    }
  };

  return (
    <div>
      <h2>Affecter un étudiant à un stage</h2>
      <div>
        <label>ID de l'étudiant:</label>
        <input
          type="text"
          name="studentId"
          value={studentId}
          onChange={(e) => setStudentId(e.target.value)}
        />
      </div>
      <div>
        <label>Nom du stage:</label>
        <input
          type="text"
          name="name"
          value={stageInfo.name}
          onChange={handleInputChange}
        />
      </div>
      <div>
        <label>Description:</label>
        <textarea
          name="description"
          value={stageInfo.description}
          onChange={handleInputChange}
        />
      </div>
      <div>
        <label>Date de début:</label>
        <input
          type="date"
          name="startDate"
          value={stageInfo.startDate}
          onChange={handleInputChange}
        />
      </div>
      <div>
        <label>Date de fin:</label>
        <input
          type="date"
          name="endDate"
          value={stageInfo.endDate}
          onChange={handleInputChange}
        />
      </div>
      <button onClick={assignStage}>Affecter au stage</button>
      {error && <p style={{ color: 'red' }}>{error}</p>}
      {successMessage && <p style={{ color: 'green' }}>{successMessage}</p>}

      <div>
        <h3>Choix de l'étudiant pour le stage:</h3>
        <label>Nom du stage:</label>
        <input
          type="text"
          value={selectedStage ? selectedStage.name : ''}
          onChange={(e) =>
            setSelectedStage({
              ...selectedStage,
              name: e.target.value,
            })
          }
        />
        <label>Description:</label>
        <textarea
          value={selectedStage ? selectedStage.description : ''}
          onChange={(e) =>
            setSelectedStage({
              ...selectedStage,
              description: e.target.value,
            })
          }
        />
        <label>Date de début:</label>
        <input
          type="date"
          value={selectedStage ? selectedStage.startDate : ''}
          onChange={(e) =>
            setSelectedStage({
              ...selectedStage,
              startDate: e.target.value,
            })
          }
        />
        <label>Date de fin:</label>
        <input
          type="date"
          value={selectedStage ? selectedStage.endDate : ''}
          onChange={(e) =>
            setSelectedStage({
              ...selectedStage,
              endDate: e.target.value,
            })
          }
        />
        <button onClick={checkSelectedStage}>Vérifier le choix</button>
      </div>
    </div>
  );
};

export default AssignStage;
