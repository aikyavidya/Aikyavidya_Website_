import { Link } from "react-router-dom";
import { NavLink } from "react-router-dom";
import "./navbar.css";
import {
  FaEnvelope,
  FaPhoneAlt,
  FaInstagram,
  FaFacebookF,
  FaYoutube,
} from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { useRef, useState } from "react";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState(null);
  const [openSubmenu, setOpenSubmenu] = useState(null);
  const menuButtonRef = useRef(null);

  const closeMobileMenu = () => {
    const shouldRestoreFocus = menuOpen;
    setMenuOpen(false);
    setOpenDropdown(null);
    setOpenSubmenu(null);
    if (shouldRestoreFocus) menuButtonRef.current?.focus();
  };

  return (
    <header className="header" data-aos="fade-down" data-aos-duration="1000">
      <a className="skip-link" href="#main-content">Skip to content</a>

      {/* TOP BAR */}
      <div className="topbar">
        <div className="container topbar-container">
          <div className="topbar-links" role="group" aria-label="Contact and social links">
            <div className="top-contact-links">
              <a href="https://mail.google.com/mail/?view=cm&fs=1&to=connect%40aikyavidya.org" className="top-contact-link" target="_blank" rel="noopener noreferrer" aria-label="Email connect@aikyavidya.org" title="Email">
                <FaEnvelope />
                <span>connect@aikyavidya.org</span>
              </a>

              <a href="tel:+917386898991" className="top-contact-link" aria-label="Call +91 73868 98991" title="Call">
                <FaPhoneAlt />
                <span>+91 73868 98991</span>
              </a>
            </div>

            <div className="top-social-links">
              <a href="https://instagram.com/aikya_vidya?igshid=NGVhN2U2NjQ0Yg==" className="top-action" target="_blank" rel="noopener noreferrer" aria-label="Instagram" title="Instagram">
                <FaInstagram />
              </a>

              <a href="https://www.facebook.com/profile.php?id=100090151397761&mibextid=ZbWKwL" className="top-action" target="_blank" rel="noopener noreferrer" aria-label="Facebook" title="Facebook">
                <FaFacebookF />
              </a>

              <a href="https://youtube.com/@aikyavidya108?si=9XasfB3iSthH4P_2" className="top-action" target="_blank" rel="noopener noreferrer" aria-label="YouTube" title="YouTube">
                <FaYoutube />
              </a>

              <a href="https://x.com/AikyaVidya" className="top-action" target="_blank" rel="noopener noreferrer" aria-label="X" title="X">
                <FaXTwitter />
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Navbar */}
      <div className="navbar">
        <div className="container">

          {/* Logo */}
          <div className="logo">
            <div className="logo-box">
              <Link to="/">
                <img src="/images/logo-1.png" alt="Aikya Vidya" />
              </Link>
            </div>
          </div>



          {/* Menu */}
          <nav
            id="main-navigation"
            className={`menu ${menuOpen ? "active" : ""}`}
            aria-label="Main navigation"
            onKeyDown={(event) => {
              if (menuOpen && event.key === "Escape") closeMobileMenu();
            }}
          >
            <button className="close-btn" type="button" onClick={closeMobileMenu} aria-label="Close menu">
              ✕
            </button>
            <ul>
              <li>
                <NavLink
                  to="/"
                  end
                  className={({ isActive }) => isActive ? "nav-link active" : "nav-link"}
                  onClick={closeMobileMenu}
                >
                  Home
                </NavLink>
              </li>


              <li className="dropdown">
                <button
                  type="button"
                  className="nav-link dropdown-toggle"
                  aria-expanded={openDropdown === "about"}
                  aria-controls="about-menu"
                  onClick={() =>
                    setOpenDropdown(openDropdown === "about" ? null : "about")
                  }
                >
                  About Us <span className="arrow"></span>
                </button>

                <ul id="about-menu" className={`dropdown-menu ${openDropdown === "about" ? "show" : ""}`}>

                  <NavLink to="/ourInspiration" className={({ isActive }) => isActive ? "dropdown-link active" : "dropdown-link"} onClick={closeMobileMenu}>
                    Our Inspiration
                  </NavLink>

                  <NavLink to="/ourTrust" className={({ isActive }) => isActive ? "dropdown-link active" : "dropdown-link"} onClick={closeMobileMenu}>
                    Our Trust
                  </NavLink>

                  <NavLink to="/associatedTrusts" className={({ isActive }) => isActive ? "dropdown-link active" : "dropdown-link"} onClick={closeMobileMenu}>
                    Associated Trusts
                  </NavLink>

                  {/* 🔥 NESTED DROPDOWN */}
                  <li
                    className="submenu-dropdown"
                  >
                    <button type="button" className="dropdown-link dropdown-toggle" aria-expanded={openSubmenu === "governance"} aria-controls="governance-menu" onClick={(e) => { e.stopPropagation(); setOpenSubmenu(openSubmenu === "governance" ? null : "governance"); }}>
                      Governance ▸
                    </button>

                    <ul id="governance-menu" className={`submenu ${openSubmenu === "governance" ? "show" : ""}`}>
                      <NavLink to="/board" className="dropdown-link" onClick={closeMobileMenu}>Board of Trustees</NavLink>
                      <NavLink to="/leadership" className="dropdown-link" onClick={closeMobileMenu}>Leadership Team</NavLink>
                      <NavLink to="/management" className="dropdown-link" onClick={closeMobileMenu}>Management Team</NavLink>
                    </ul>
                  </li>

                  <NavLink to="/csr-page" className={({ isActive }) => isActive ? "dropdown-link active" : "dropdown-link"} onClick={closeMobileMenu}>
                    CSR Applicability
                  </NavLink>

                  <NavLink to="/csr" className={({ isActive }) => isActive ? "dropdown-link active" : "dropdown-link"} onClick={closeMobileMenu}>
                    CSR Partners
                  </NavLink>

                </ul>
              </li>

              <li className="dropdown">
                <button type="button" className="nav-link dropdown-toggle" aria-expanded={openDropdown === "initiatives"} aria-controls="initiatives-menu" onClick={() => setOpenDropdown(openDropdown === "initiatives" ? null : "initiatives")}>
                  Initiatives <span className="arrow"></span>
                </button>
                <ul id="initiatives-menu" className={`dropdown-menu ${openDropdown === "initiatives" ? "show" : ""}`}>
                  <li>
                    <NavLink to="/initiatives" className={({ isActive }) => isActive ? "dropdown-link active" : "dropdown-link"} onClick={closeMobileMenu}> Our Initiatives</NavLink>
                  </li>
                  <li>
                    <NavLink to="/food" className={({ isActive }) => isActive ? "dropdown-link active" : "dropdown-link"} onClick={closeMobileMenu}> Food</NavLink>
                  </li>
                  <li>
                    <NavLink to="/education" className={({ isActive }) => isActive ? "dropdown-link active" : "dropdown-link"} onClick={closeMobileMenu}> Education</NavLink>
                  </li>
                  <li>
                    <NavLink to="/values" className={({ isActive }) => isActive ? "dropdown-link active" : "dropdown-link"} onClick={closeMobileMenu}> Values</NavLink>
                  </li>
                </ul>
              </li>

              <li>
                <NavLink
                  to="/impact"
                  className={({ isActive }) => isActive ? "nav-link active" : "nav-link"}
                  onClick={closeMobileMenu}
                >
                  Our Impact
                </NavLink>
              </li>

              <li>
                <NavLink
                  to="/media"
                  className={({ isActive }) => isActive ? "nav-link active" : "nav-link"}
                  onClick={closeMobileMenu}
                >
                  Media
                </NavLink>
              </li>

              <li>
                <NavLink
                  to="/volunteer"
                  className={({ isActive }) => isActive ? "nav-link active" : "nav-link"}
                  onClick={closeMobileMenu}
                >
                  Become a Volunteer
                </NavLink>
              </li>


              <li className="dropdown">
                <button type="button" className="nav-link dropdown-toggle" aria-expanded={openDropdown === "gallery"} aria-controls="gallery-menu" onClick={() => setOpenDropdown(openDropdown === "gallery" ? null : "gallery")}>
                  Gallery <span className="arrow"></span>
                </button>

                <ul id="gallery-menu" className={`dropdown-menu ${openDropdown === "gallery" ? "show" : ""}`}>
                  <li>
                    <NavLink
                      to="/photos"
                      className={({ isActive }) => isActive ? "dropdown-link active" : "dropdown-link"}
                      onClick={closeMobileMenu}
                    >
                      Photo Gallery
                    </NavLink>
                  </li>

                  <li>
                    <NavLink
                      to="/videos"
                      className={({ isActive }) => isActive ? "dropdown-link active" : "dropdown-link"}
                      onClick={closeMobileMenu}
                    >
                      Video Gallery
                    </NavLink>
                  </li>
                </ul>
              </li>



              <li className="dropdown">

                <button type="button" className="nav-link dropdown-toggle" aria-expanded={openDropdown === "contact"} aria-controls="contact-menu" onClick={() => setOpenDropdown(openDropdown === "contact" ? null : "contact")}>
                  Contact <span className="arrow"></span>
                </button>

                <ul id="contact-menu" className={`dropdown-menu ${openDropdown === "contact" ? "show" : ""}`}>
                  <li>
                    <NavLink
                      to="/contact"
                      className="dropdown-link"
                      onClick={closeMobileMenu}
                    >
                      Contact Us
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      to="/documents"
                      className="dropdown-link"
                      onClick={closeMobileMenu}
                    >
                      Documents & Downloads
                    </NavLink>
                  </li>
                </ul>

              </li>
            </ul>
          </nav>

          <Link
            to="/donation"
            className="donate-btn"
          >
            DONATE NOW
          </Link>

          {/* MOBILE MENU */}
          <button
            ref={menuButtonRef}
            type="button"
            className="hamburger"
            onClick={() => setMenuOpen(prev => !prev)}
            aria-label={menuOpen ? "Close navigation menu" : "Open navigation menu"}
            aria-expanded={menuOpen}
            aria-controls="main-navigation"
          >
            ☰
          </button>

        </div>
      </div>

      {/* 🔥 ADD OVERLAY HERE */}
      {menuOpen && (
        <div
          className="overlay"
          onClick={closeMobileMenu}
        ></div>
      )}

    </header>
  );
}
