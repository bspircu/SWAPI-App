import React from 'react';
import { Link } from 'react-router-dom';

function Nav() {
  const linkStyle = {
    color: 'white',
  };
  return (
    <nav>
      <Link to="/">
        <img
          src="https://logos-download.com/wp-content/uploads/2016/09/Star_Wars_logo-1-700x300.png"
          alt=""
        />
      </Link>
      <ul className="nav-Items">
        <Link style={linkStyle} to="/Characters/">
          <li>Characters</li>
        </Link>
        <Link style={linkStyle} to="/Planets/">
          <li>Planets</li>
        </Link>
        <Link style={linkStyle} to="/Species/">
          <li>Species</li>
        </Link>
        <Link style={linkStyle} to="/Starships/">
          <li>Starships</li>
        </Link>
        <Link style={linkStyle} to="/Vehicles/">
          <li>Vehicles</li>
        </Link>
        <Link style={linkStyle} to="/Films/">
          <li>Films</li>
        </Link>
      </ul>
    </nav>
  );
}

export default Nav;
