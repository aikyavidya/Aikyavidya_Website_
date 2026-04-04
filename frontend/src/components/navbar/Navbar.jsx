import { Link } from "react-router-dom";
import { NavLink } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import "./navbar.css";
import {
  FaEnvelope,
  FaPhoneAlt,
  FaInstagram,
  FaFacebookF,
  FaYoutube,
  FaTwitter,
} from "react-icons/fa";
import { useState } from "react";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState(null);
  const [openSubmenu, setOpenSubmenu] = useState(null);
  const navigate = useNavigate();

  const closeMobileMenu = () => {
    setMenuOpen(false);
    setOpenDropdown(null);
    setOpenSubmenu(null);
  };

  return (
    <header className="header" data-aos="fade-down" data-aos-duration="1000">

      {/* TOP BAR  */}
      <div className="topbar">
        <div className="container">

          <div className="top-left">
            An Initiative of Hare Krishna Movement
          </div>

          <div className="top-right">
            <Link href="mailto:connect@aikyavidya.org">
              <FaEnvelope /> connect@aikyavidya.org
            </Link>
            <Link href="tel:+917386898991">
              <FaPhoneAlt /> +91 73868 98991
            </Link>

            <div className="socials">
                   <a 
                    href="https://instagram.com/aikya_vidya?igshid=NGVhN2U2NjQ0Yg==" 
                    target="_blank" 
                    rel="noopener noreferrer"
                  >
                    <FaInstagram />
                  </a>

                  <a 
                    href="https://www.facebook.com/profile.php?id=100090151397761&mibextid=ZbWKwL" 
                    target="_blank" 
                    rel="noopener noreferrer"
                  >
                    <FaFacebookF />
                  </a>

                  <a 
                    href="https://youtube.com/@aikyavidya108?si=9XasfB3iSthH4P_2" 
                    target="_blank" 
                    rel="noopener noreferrer"
                  >
                    <FaYoutube />
                  </a>

                  <a 
                    href="https://twitter.com/AikyaVidya" 
                    target="_blank" 
                    rel="noopener noreferrer"
                  >
                    <FaTwitter />
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
      <img
        src="\images\logo-1.png"
        alt="logo"
      />
    </Link>
            </div>
          </div>

          

          {/* Menu */}
          <nav className={`menu ${menuOpen ? "active" : ""}`}>
              {/* 🔥 CLOSE BUTTON (ADD HERE) */}
  <div className="close-btn" onClick={() => setMenuOpen(false)}>
    ✕
  </div>
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
  <span
    className="nav-link"
    onClick={() =>
      setOpenDropdown(openDropdown === "about" ? null : "about")
    }
  >
    About Us <span className="arrow"></span>
  </span>

  <ul className={`dropdown-menu ${openDropdown === "about" ? "show" : ""}`}>

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
      <span className="dropdown-link" onClick={(e) => { e.stopPropagation(); setOpenSubmenu(openSubmenu === "governance" ? null : "governance"); }}>
        Governance ▸
      </span>

      <ul className={`submenu ${openSubmenu === "governance" ? "show" : ""}`}>
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
                 <span className="nav-link" onClick={() => setOpenDropdown(openDropdown === "initiatives" ? null : "initiatives")}>
                   Initiatives <span className="arrow"></span>
                 </span>
                 <ul className={`dropdown-menu ${openDropdown === "initiatives" ? "show" : ""}`}>
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
                <span className="nav-link" onClick={() => setOpenDropdown(openDropdown === "gallery" ? null : "gallery")}>
                  Gallery <span className="arrow"></span>
                </span>

                <ul className={`dropdown-menu ${openDropdown === "gallery" ? "show" : ""}`}>
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
  
  <span 
    className="nav-link" onClick={() => setOpenDropdown(openDropdown === "contact" ? null : "contact")}
  >
    Contact <span className="arrow"></span>
  </span>

  <ul className={`dropdown-menu ${openDropdown === "contact" ? "show" : ""}`}>
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

         <div
      className="donate-btn"
      onClick={() => navigate("/donation")}
      style={{ cursor: "pointer" }}
    >
      DONATE NOW <span>❤</span>
    </div>

        {/* MOBILE MENU */}
           <div
  className="hamburger"
  onClick={() => setMenuOpen(prev => !prev)}
  role="button"
  aria-label="Toggle menu"
>
  ☰
</div>

        </div>
      </div>

        {/* 🔥 ADD OVERLAY HERE */}
  {menuOpen && (
    <div 
      className="overlay" 
      onClick={() => setMenuOpen(false)}
    ></div>
  )}

    </header>
  );
}






