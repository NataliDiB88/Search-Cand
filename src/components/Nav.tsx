import React from 'react';
import { Link } from 'react-router-dom';
import './Nav.css';

const Nav: React.FC = () => {
  return (
    <nav className="nav">
      <Link to="/">Home</Link>
      <Link to="/saved-candidates">Potential Candidates</Link>
    </nav>
  );
};

export default Nav;
