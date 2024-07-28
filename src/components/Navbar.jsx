import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Logo from "../images/logo/logo.png";
 import { useNavigate } from 'react-router-dom';





function Navbar() {
  const [nav, setNav] = useState(false);
 
  const openNav = () => {
    setNav(!nav);
     console.log('hello');
  };
   const printOm = () => {
    console.log('hello'); 
    
     
   }
   

   

  return (
    <>
      <nav>
        {/* mobile */}
        <div className={`mobile-navbar ${nav ? "open-nav" : ""}`}>
          <div onClick={openNav} className="mobile-navbar__close">
            <i className="fa-solid fa-xmark"></i>
          </div>
          <ul className="mobile-navbar__links">
            <li>
              <Link onClick={openNav} to="/">
                Home
              </Link>
            </li>
            <li>
              <Link onClick={openNav} to="/about">
                About
              </Link>
            </li>
            <li>
              <Link onClick={openNav} to="/models">
                Models
              </Link>
            </li>
            <li>
             /
            </li>
            <li>
              {/* <Link onClick={openNav} to="/team">
                Our Team
              </Link> */}
            </li>
            <li>
              {/* <Link onClick={openNav} to="/contact">
                Contact
              </Link> */}
            </li>
          </ul>
        </div>

        {/* desktop */}

        <div className="navbar">
          <div className="navbar__img">
            <Link to="/" onClick={() => window.scrollTo(0, 0)}>
              <img src={Logo} alt="logo-img" />
            </Link>
          </div>
          <ul className="navbar__links">
            <li>
              <Link className="home-link" to="/">
                Home
              </Link>
            </li>
            <li>
              {" "}
              <Link className="about-link" to="/about">
                About
              </Link>
            </li>
            <li>
              {" "}
              <Link className="models-link" to="/models">
                Vehicle Models
              </Link>
            </li>
            <li>
              {" "}
              {/* <Link className="testi-link" to="/testimonials">
                Testimonials
              </Link> */}
            </li>
            <li>
              {" "}
              {/* <Link className="team-link" to="/team">
                Our Team
              </Link> */}
            </li>
            <li>
              {" "}
              {/* <Link className="contact-link" to="/contact">
                Contact
              </Link> */}
            </li>
          </ul>
          <div className="navbar__buttons">
          {/* <Link   onClick= {printOm} className="navbar__buttons__sign-in" to="/SignIn">
              Sign In
            </Link>
            <Link className="navbar__buttons__register" to="">
              Register

            </Link> */}
          </div>

          {/* mobile */}
          <div className="mobile-hamb" onClick={openNav}>
            <i className="fa-solid fa-bars"></i>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
