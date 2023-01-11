import React from "react";
import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <header className="header">
      <nav>
        <ul>
          <NavLink
            className={(nav) => (nav.isActive ? "nav-active" : "")}
            to={"/"}
          >
            Accueil
          </NavLink>

          <NavLink
            className={(nav) => (nav.isActive ? "nav-active" : "")}
            to={"/CDC"}
          >
            Coups de coeur
          </NavLink>
        </ul>
      </nav>
      <h1>React Movies</h1>
    </header>
  );
};

export default Header;
