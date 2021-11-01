import React from 'react';
import "./Menu.css"
import {Link} from "react-router-dom"

const Menu = () => {
  const Auth = false;
  return (
    <nav className="Nav">
      <Link to="/">Manuel Antunez</Link>

      {Auth ? (
        <button variant="outlined">Sign Out</button>
      ) : (
        <button variant="outlined">Sign In </button>
      )}
    </nav>
  );
};

export default Menu;
