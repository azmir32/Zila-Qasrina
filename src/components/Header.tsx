
import React from 'react';
import { Link } from 'react-router-dom';

const Header: React.FC = () => {
  return (
    <header className="w-full py-6 px-4">
      <div className="glass-panel flex justify-between items-center">
        <div className="font-bold text-4xl text-portfolio-dark">Zila Qasrina</div>
        <nav className="flex space-x-2">
          <Link to="/" className="nav-link active" aria-current="page">Home</Link>
          <Link to="/project" className="nav-link">Testimony</Link>
          <Link to="/contact" className="nav-link">Contact</Link>
        </nav>
      </div>
    </header>
  );
};

export default Header;
