import React from "react";
import { Link, NavLink } from "react-router-dom";

function Navbar() {
  return (
    <>
      <NavLink>
        <Link to="/" className="links">
          Home
        </Link>
        <Link to="/about" className="links">
          About
        </Link>
        <Link to="/contact" className="links">
          Contact
        </Link>
      </NavLink>{" "}
      <hr />
    </>
  );
}

export default Navbar;
