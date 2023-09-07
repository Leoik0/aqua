import React, { useState, useEffect } from "react";
import "./Navbar.css";
import Logo from "../assets/aqua.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";

const Navbar = () => {
  const [isNavbarHidden, setIsNavbarHidden] = useState(false);
  const [prevScrollPos, setPrevScrollPos] = useState(0);
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.scrollY;
      const isHidden = prevScrollPos < currentScrollPos;

      setIsNavbarHidden(isHidden);
      setPrevScrollPos(currentScrollPos);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [prevScrollPos]);

  return (
    <div className={`navbar ${menuOpen ? "open" : ""}`}>
      <div className="navbar-logo">
        <div className="menu-icon" onClick={toggleMenu}>
          <FontAwesomeIcon icon={faBars} />
        </div>
        <img className="logo" src={Logo} alt="Logo" />
        <p className="nav-p">(51) 99351-8729 |</p>
        <span className="nav-span">08:00 ás 17:30 e Sáb 08:00 ás 12:00</span>
      </div>

      <div className={`navbar-links ${menuOpen ? "open" : ""}`}>
        <a href="#" className="navbar-link">
          Home
        </a>
        <a href="#service" className="navbar-link">
          Serviços
        </a>
        <a href="#gallery" className="navbar-link">
          Galeria
        </a>
        <a
          href="https://api.whatsapp.com/send?phone=555193518729"
          className="navbar-link"
        >
          Contato
        </a>
      </div>
    </div>
  );
};

export default Navbar;
