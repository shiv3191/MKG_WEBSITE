import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { AiOutlineMenu } from "react-icons/ai";
import { RxCross1 } from "react-icons/rx";
import "./navbar.css";

const Navbar = () => {
  const [sticky, setSticky] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  useEffect(() => {
    const handleScroll = () => {
      window.scrollY > 50 ? setSticky(true) : setSticky(false);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`navbar ${sticky ? 'navbar--sticky' : ''}`}>
      <div className="navbar__brand">
        <img src="./image.png" alt="Professor Manish Kumar Goyal" className="navbar__logo" />
        <p className="navbar__title">Prof. Manish Kumar Goyal</p>
      </div>

      <ul className={`navbar__links ${mobileMenuOpen ? 'navbar__links--open' : ''}`}>
        <li className="navbar__item">
          <Link to="/" className="navbar__link">Home</Link>
        </li>
        <li className="navbar__item">
          <Link to="/distinctions" className="navbar__link">Distinctions</Link>
        </li>
        <li className="navbar__item">
          <Link to="/student" className="navbar__link">Student Supervision</Link>
        </li>
        <li className="navbar__item">
          <Link to="/publication" className="navbar__link">Publications</Link>
        </li>
        <li className="navbar__item">
          <Link to="/research" className="navbar__link">Research</Link>
        </li>
        <li className="navbar__item">
          <Link to="/teaching" className="navbar__link">Teaching</Link>
        </li>
        <li className="navbar__item">
          <Link to="/activities" className="navbar__link">Other Activities</Link>
        </li>
        <li className="navbar__item">
          <Link to="/positions" className="navbar__link">Position Available</Link>
        </li>
      </ul>

      <button className="navbar__toggle" onClick={toggleMenu}>
        {mobileMenuOpen ? 
          <RxCross1 size={24} aria-label="Close menu" /> : 
          <AiOutlineMenu size={24} aria-label="Open menu" />
        }
      </button>
    </nav>
  );
};

export default Navbar;
