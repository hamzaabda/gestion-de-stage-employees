import React from 'react';
import './style.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSquarePlus } from '@fortawesome/free-regular-svg-icons';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import { faFacebook, faTwitter, faInstagram } from '@fortawesome/free-brands-svg-icons'; // Ajout des icônes de médias sociaux

import { library } from '@fortawesome/fontawesome-svg-core';
import { faBell } from '@fortawesome/free-regular-svg-icons';

library.add(faFacebook, faTwitter, faInstagram);

const Navbar = () => {
  return (
    <>
      <div className="navbar">
        <div className="navbar_left">
          <b>Work Space</b>
        </div>

        <div className="navbar_right">
          <div className="navbar_profile_search">
            <FontAwesomeIcon icon={faMagnifyingGlass} className="small gray" />
            <input type="text" placeholder="Search.." />
          </div>

          <button className="navbar_profile_button">
            <FontAwesomeIcon icon={faSquarePlus} /> Create
          </button>

          {/* Boutons de médias sociaux */}
          <div className="navbar_social_icons">
            <a href="lien_vers_votre_page_facebook" target="_blank" rel="noopener noreferrer">
              <FontAwesomeIcon icon={faFacebook} className="social-icon" />
            </a>
            <a href="lien_vers_votre_page_twitter" target="_blank" rel="noopener noreferrer">
              <FontAwesomeIcon icon={faTwitter} className="social-icon" />
            </a>
            <a href="lien_vers_votre_page_instagram" target="_blank" rel="noopener noreferrer">
              <FontAwesomeIcon icon={faInstagram} className="social-icon" />
            </a>
          </div>

          <div className="navbar_profil_image">
            <img src="" alt="Profil" />
          </div>

          {/* Icône de notification animée */}
          <div className="notification-icon">
            <FontAwesomeIcon icon={faBell} className="notification-bell" />
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
