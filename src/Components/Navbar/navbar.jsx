import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom'; // Use react-router-dom Link for routing
import { AiOutlineMenu } from "react-icons/ai";
import { RxCross1 } from "react-icons/rx";
import "./navbar.css";

const Navbar = () => {
  const [sticky, setSticky] = useState(false);
  const [stick, setStick] = useState(false);

  const togglemenu = () => {
    setStick(!stick);
  };

  useEffect(() => {
    window.addEventListener('scroll', () => {
      window.scrollY > 50 ? setSticky(true) : setSticky(false);
    });
  }, []);

  return (
    <nav className={`container ${sticky ? 'dark-nav' : ''}`}>
      <div className="head">
        <img src="./mkg1.jpg" alt="" />
        <p>Prof. Manish Kumar Goyal</p>
      </div>

      <ul className={stick ? '' : "hide-menu-icon"}>
        <li>
          <Link to="/" smooth={true} offset={0} duration={500}>Home</Link>
        </li>
        
        {/* Link to Distinctions page */}
        <li>
          <Link to="/distinctions">Distinctions</Link>
        </li>

        <li><Link to='/student' smooth={true} offset={-150} duration={500}>Student Supervision</Link></li>
        <li><Link to='/publication' smooth={true} offset={-260} duration={500}>Publications</Link></li>
        <li><Link to='research' smooth={true} offset={-260} duration={500}>Research</Link></li>
        <li><Link to='teaching' smooth={true} offset={-260} duration={500}>Teaching</Link></li>
        <li><Link to='/otherActivities' smooth={true} offset={-260} duration={500}>Other Activities</Link></li>
        <li><Link to='positionsAvailable' smooth={true} offset={-260} duration={500}>Position Available</Link></li>
      </ul>

      {stick ? 
        <RxCross1 className='menu-icon' size={30} onClick={togglemenu}/> :
        <AiOutlineMenu className='menu-icon' size={30} onClick={togglemenu}/>
      }
    </nav>
  );
};

export default Navbar;
