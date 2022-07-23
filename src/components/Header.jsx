import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-solid-svg-icons';
import Navbar from './Navbar';
import './Header.css';

/* eslint-disable react/function-component-definition */
const Header = () => (
  <header className="headerStyle">
    <div className="headerLeft">
      <Navbar />
    </div>
    <div className="Oval">
      <FontAwesomeIcon icon={faUser} className="userIcon" />
    </div>
  </header>
);

export default Header;
