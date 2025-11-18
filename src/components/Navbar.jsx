
import React from "react";

import logoUrl from '../assets/images/logo.png';





const Navbar = ({ links, title, logo }) => {
  return (
    <header className="navbar-container">
      <div className="navbar-branding">
      <div className="navbar-logo">
        <img 
        src={logoUrl} 
        alt="logo"
        className="logo-img"
        />
      </div>
      <h1 className="navbar-title">{title}</h1>
    </div>
      <nav className="navbar-links">
        {links.map((link) => (
          <a key={link.name} href={link.href} className="nav-item">
            {link.name}
          </a>
        ))}
      </nav>
      <div className="navbar-icons"></div>
      <button className="menu-toggle-btn" aria-label="Toggle menu">
        ☰
      </button>
    </header>
  );
};

export default Navbar;
