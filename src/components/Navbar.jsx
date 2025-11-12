
import React from "react";




const Navbar = ({ links, logo }) => {
  return (
    <header className="navbar-container">
      
      <h1 className="navbar-logo">{logo}</h1>
      <nav className="navbar-links">
        {links.map((link) => (
          // Navigasi ke ID Section (smooth scroll)
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
