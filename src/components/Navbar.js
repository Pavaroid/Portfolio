import React from "react";
import { Link } from "react-router-dom";
import { FaHome, FaProjectDiagram } from "react-icons/fa";

const Navbar = () => {
  return (
    <header>
      <h1>DingCoding</h1>
      <nav>
        <ul>
          <li>
            <Link to="/">
              <FaHome />
              Home
            </Link>
          </li>
          <li>
            <Link to="/projects">
              <FaProjectDiagram />
              Projects
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;
