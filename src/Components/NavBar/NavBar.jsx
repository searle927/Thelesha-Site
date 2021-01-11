import React, { useState } from "react";
import { Link } from "react-router-dom";
import './NavBar.css'

function Navigation(props) {
  const [menuStatus, setMenuStatus] = useState(false);
  const [showMenu, setShowMenu] = useState(false);

  const handleMenuToggle = (e) => {
    if (menuStatus === false && showMenu === false) {
      setMenuStatus(true);
      setShowMenu(true);
    } else {
      setMenuStatus(false);
      setShowMenu(false);
    }
  };

  return (
    <header>
      <div className="header">
        <ul className="nav">
        <Link to="/" id="home" className="nav">
            <li className="nav-items" id="nav-zero" onClick={handleMenuToggle}>
              Home
            </li>
          </Link>
          <Link to="/aboutUs" id="aboutUs" className="nav">
            <li className="nav-items" id="nav-one" onClick={handleMenuToggle}>
            About Us
            </li>
          </Link>

          <Link to="/services" id="services" className="nav">
            <li className="nav-items" id="nav-two" onClick={handleMenuToggle}>
              Services
            </li>
          </Link>

          <Link to="/aq" id="aq" className="nav">
            <li className="nav-items" id="nav-two" onClick={handleMenuToggle}>
              AQ
            </li>
          </Link>

          <Link to="/wq" id="wq" className="nav">
            <li className="nav-items" id="nav-two" onClick={handleMenuToggle}>
              WQ
            </li>
          </Link>
          <Link to="/bulk" id="bulk" className="nav">
            <li className="nav-items" id="nav-two" onClick={handleMenuToggle}>
              Bulk
            </li>
          </Link>
          <Link to="/sa" id="sa" className="nav">
            <li className="nav-items" id="nav-two" onClick={handleMenuToggle}>
              SA
            </li>
          </Link>

          <Link to="/residential" id="residential" className="nav">
            <li className="nav-items" id="nav-three" onClick={handleMenuToggle}>
              Residential
            </li>
          </Link>
          <Link to="/projects" id="projects" className="nav">
            <li className="nav-items" id="nav-four" onClick={handleMenuToggle}>
              Projects
            </li>
          </Link>
          <Link to="/contacts" id="contacts" className="nav">
            <li className="nav-items" id="nav-five" onClick={handleMenuToggle}>
              Contact
            </li>
          </Link>
          <Link to="/blog" id="blog" className="nav">
            <li className="nav-items" id="nav-six" onClick={handleMenuToggle}>
              Blog
            </li>
          </Link>

        </ul>

        <div
          className={`hamburger-btn ${menuStatus ? "open" : ""}`}
          onClick={handleMenuToggle}>
          <div className="hamburger-patty"></div>
        </div>
      </div>

      <div className={`dropdown-menu ${showMenu ? "show" : ""}`}>
        <Link to="/" id="home" className="header-item">
          <h1 className="nav-link" id="nav-one" onClick={handleMenuToggle}>
            Home
          </h1>
        </Link>
        <Link to="/aboutUs" id="aboutUs" className="header-item">
          <h1 className="nav-link" id="nav-one" onClick={handleMenuToggle}>
            About Us
          </h1>
        </Link>

        <Link to="/services" id="services" className="header-item">
          <h1 className="nav-link" id="nav-two" onClick={handleMenuToggle}>
            Services
          </h1>
        </Link>
        <Link to="/aq" id="aq" className="header-item">
          <h1 className="nav-link" id="nav-two" onClick={handleMenuToggle}>
            AQ
          </h1>
        </Link>
        <Link to="/wq" id="wq" className="header-item">
          <h1 className="nav-link" id="nav-two" onClick={handleMenuToggle}>
            Water Quality
          </h1>
        </Link>
        <Link to="/bulk" id="bulk" className="header-item">
          <h1 className="nav-link" id="nav-two" onClick={handleMenuToggle}>
            Bulk
          </h1>
        </Link>
        <Link to="/sa" id="sa" className="header-item">
          <h1 className="nav-link" id="nav-two" onClick={handleMenuToggle}>
            Special Apps
          </h1>
        </Link>
        <Link to="/residential" id="residential" className="header-item">
          <h1 className="nav-link" id="nav-two" onClick={handleMenuToggle}>
            Residential
          </h1>
        </Link>
        <Link to="/projects" id="projects" className="header-item">
          <h1 className="nav-link" id="nav-two" onClick={handleMenuToggle}>
            Projects
          </h1>
        </Link>
        <Link to="/contacts" id="contacts" className="header-item">
          <h1 className="nav-link" id="nav-two" onClick={handleMenuToggle}>
            Contact
          </h1>
        </Link>
        <Link to="/blog" id="blog" className="header-item">
          <h1 className="nav-link" id="nav-two" onClick={handleMenuToggle}>
            Blog
          </h1>
        </Link>
      </div>
    </header>
  );
}

export default Navigation;