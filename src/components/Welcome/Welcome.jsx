import React from 'react';

import {Link} from "react-router-dom"

import './Welcome.css';

const Welcome = () => {
  return (
    <header>
      <h2>bienvenido</h2>
      <Link to="blog">Todas Mis pruebas</Link>
    </header>
  );
};

export default Welcome;
