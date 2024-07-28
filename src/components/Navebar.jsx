import React from 'react';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom
import Logo from '../path/to/your/logo'; // Assuming Logo is your logo image

const Navbar = () => {
  return (
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
          <Link className="about-link" to="/about">
            About
          </Link>
        </li>
        <li>
          <Link className="models-link" to="/models">
            Vehicle Models
          </Link>
        </li>
        {/* Uncomment these lines once you have defined routes for them */}
        {/* <li>
          <Link className="testi-link" to="/testimonials">
            Testimonials
          </Link>
        </li>
        <li>
          <Link className="team-link" to="/team">
            Our Team
          </Link>
        </li>
        <li>
          <Link className="contact-link" to="/contact">
            Contact
          </Link>
        </li> */}
      </ul>
    </div>
  );
};

export default Navbar;
