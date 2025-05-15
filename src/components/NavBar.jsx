import React from 'react';
import { NavLink } from 'react-router-dom';
import '../assets/styles/NavBar.css';

  const Navbar = () => (
    <nav className="horizontal-nav">
      <ul>
        <li>
          <NavLink to="/" className={({ isActive }) => isActive ? "active" : "nav-item"}>
            <img src="../photos/logoo.png" alt="logo" width="80" id="home-link" />
          </NavLink>
        </li>
        <li>
          <NavLink to="/news" className={({ isActive }) => isActive ? "active" : "nav-item"}>
            Actualités
          </NavLink>
        </li>
        <li>
          <NavLink to="/gallery" className={({ isActive }) => isActive ? "active" : "nav-item"}>
            Galerie
          </NavLink>
        </li>
        <li>
          <NavLink to="/about" className={({ isActive }) => isActive ? "active" : "nav-item"}>
            À propos
          </NavLink>
        </li>
        <li>
          <NavLink to="/shop" className={({ isActive }) => isActive ? "active" : "nav-item"}>
            Boutique
          </NavLink>
        </li>
        <li>
          <NavLink to="/contact" className={({ isActive }) => isActive ? "active" : "nav-item"}>
            Contact
          </NavLink>
        </li>
        <li>
          <a href="https://www.fsb.univh2c.ma/" className="nav-item">
            <img src="../photos/logolafac.png" alt="logo" width="80" />
          </a>
        </li>
      </ul>
    </nav>
  );

  export default Navbar;