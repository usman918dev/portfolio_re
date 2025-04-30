import React, { useState } from 'react';
import { Link } from 'react-scroll';
import { FaBars, FaTimes } from 'react-icons/fa';
import './Navbar.css';

const navLinks = [
  { to: 'home', label: 'Home' },
  { to: 'about', label: 'About' },
  { to: 'projects', label: 'Projects' },
  { to: 'experience', label: 'Experience' },
  { to: 'contact', label: 'Contact' },
];

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleMenuToggle = () => setMenuOpen(!menuOpen);
  const handleLinkClick = () => setMenuOpen(false);

  return (
    <nav className="navbar">
      <div className="logo">
        <Link to="home" smooth={true} duration={500} className="logo-link" spy={true} offset={-70} onClick={handleLinkClick}>
          <span className='m'>M</span>.USMAN
        </Link>
      </div>
      {/* Hamburger/Cross Icon */}
      <button type='button' className="menu-icon" onClick={handleMenuToggle} aria-label="Toggle menu">
        {menuOpen ? <FaTimes size={28} /> : <FaBars size={28} />}
      </button>
      {/* Overlay for sidebar */}
      {menuOpen && <div className="sidebar-overlay" onClick={handleMenuToggle}></div>}
      {/* Sidebar for small screens, navbar for large */}
      <ul className={`nav-links${menuOpen ? ' active' : ''}`}>
        {navLinks.map(link => (
          <li key={link.to}>
            <Link
              to={link.to}
              smooth={true}
              duration={500}
              spy={true}
              offset={-70}
              activeClass="active"
              onClick={handleLinkClick}
            >
              {link.label}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;

