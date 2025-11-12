// src/components/Navbar.jsx
import React from "react";

// Fungsi untuk membuat ikon sederhana menggunakan SVG inline (alternatif)


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
