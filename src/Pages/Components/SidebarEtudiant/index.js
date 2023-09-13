import React, { useEffect, useState } from "react";
import './style.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHome, faPhotoFilm, faUsers, faSignOutAlt } from "@fortawesome/free-solid-svg-icons";
import Chart from 'chart.js/auto';

const Sidebar = () => {
  // Gérer la déconnexion lorsque l'utilisateur clique sur le bouton de déconnexion
  const handleSignOut = () => {
    // Vous pouvez ici implémenter la logique de déconnexion, par exemple, en supprimant les données de l'utilisateur de localStorage
    // et en redirigeant l'utilisateur vers la page de connexion
    localStorage.removeItem("user_data");
    window.location.href = "/login"; // Redirection vers la page de connexion
  };

  useEffect(() => {
    // Données du graphique (exemple)
    const data = {
      labels: ['Jan', 'Fév', 'Mar', 'Avr', 'Mai'],
      datasets: [
        {
          label: 'Ventes mensuelles',
          data: [12, 19, 3, 5, 2],
          backgroundColor: 'rgba(75, 192, 192, 0.2)',
          borderColor: 'rgba(75, 192, 192, 1)',
          borderWidth: 1,
        },
      ],
    };

    // Configuration du graphique (exemple)
    const options = {
      scales: {
        y: {
          beginAtZero: true,
        },
      },
    };

    const chartCanvas = document.getElementById('myChart');

    if (chartCanvas) {
      // Vérifiez si un graphique existe déjà sur cet élément canvas et détruisez-le si nécessaire
      const existingChart = Chart.getChart(chartCanvas);
      if (existingChart) {
        existingChart.destroy();
      }

      const ctx = chartCanvas.getContext('2d');
      new Chart(ctx, {
        type: 'bar', // Type de graphique (bar pour un graphique à barres)
        data: data,
        options: options,
      });
    }
  }, []);

  return (
    <div className="dashboard-container">
      <div className="sidebar">
        <div className="sidebar_menu">
          <a href="/" className="active-link">
            <FontAwesomeIcon icon={faHome} className="me-3" /> <b>Home</b>
          </a>
          <a href="/stagelist" className="custom-link">
            <FontAwesomeIcon icon={faUsers} className="me-3" /><b>stagelist</b>
          </a>
          <a href="/joblist" className="custom-link">
            <FontAwesomeIcon icon={faPhotoFilm} className="me-3" /><b>JobList</b>
          </a>
        
          <button onClick={handleSignOut}>
            <FontAwesomeIcon icon={faSignOutAlt} className="me-3" /><b>Déconnexion</b>
          </button>
        </div>
      </div>
      <div className="dashboard-content">
        <canvas id="myChart"></canvas>
        {/* Vous pouvez ajouter d'autres éléments de tableau de bord ici */}
      </div>
    </div>
  );
};

export default Sidebar;
