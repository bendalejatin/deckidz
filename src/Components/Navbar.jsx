import { useState } from 'react';
import { Link } from 'react-router-dom';
import './Styles/Navbar.css';
import logo from './Images/Deckidz.avif';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="navbar">
      <div className="container">
        <div className="logo">
            <img src={logo} alt="Deckidz Logo" className="logo" />
          <Link to="/">Deckidz ®</Link>
        </div>
        <div
          className={`hamburger ${isOpen ? 'active' : ''}`}
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? '✕' : '☰'}
        </div>
        <ul className={`nav-links ${isOpen ? 'open' : ''}`}>
          <li>
            <Link to="/" onClick={() => setIsOpen(false)}>Home</Link>
          </li>
          {/* <li>
            <Link to="/Products" onClick={() => setIsOpen(false)}>Products</Link>
          </li> */}
          <li>
            <Link to="/AboutUs" onClick={() => setIsOpen(false)}>About Us</Link>
          </li>
          <li>
            <Link to="/ContactUs" onClick={() => setIsOpen(false)}>Contact Us</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
