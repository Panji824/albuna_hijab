// src/components/Navbar.jsx
import React from "react";

// Fungsi untuk membuat ikon sederhana menggunakan SVG inline (alternatif)
const SearchIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="11" cy="11" r="8"></circle>
    <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
  </svg>
);

const CartIcon = ({ itemCount }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="9" cy="21" r="1"></circle>
    <circle cx="20" cy="21" r="1"></circle>
    <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"></path>
  </svg>
);

const Navbar = ({ links, logo }) => {
  // State dummy untuk jumlah item keranjang
  const [cartCount] = React.useState(3);

  return (
    <header className="navbar-container">
      {/* Logo Brand */}
      <h1 className="navbar-logo">{logo}</h1>

      {/* Navigasi Utama (Hanya terlihat di Desktop) */}
      <nav className="navbar-links">
        {links.map((link) => (
          // Navigasi ke ID Section (smooth scroll)
          <a key={link.name} href={link.href} className="nav-item">
            {link.name}
          </a>
        ))}
      </nav>

      {/* Ikon Aksi */}
      <div className="navbar-icons"></div>

      {/* Tombol menu untuk mobile (akan diimplementasikan nanti) */}
      <button className="menu-toggle-btn" aria-label="Toggle menu">
        ☰
      </button>
    </header>
  );
};

export default Navbar;
