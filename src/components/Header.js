import React from "react";

const Header = () => {
  let isclicked = true;
  return (
    <header className="header">
      <nav>
        <ul>
          <a className={isclicked ? "nav-active" : ""} href={"/"}>
            Accueil
          </a>
          <a
            onClick={(isclicked = false)}
            className={isclicked ? "" : "nav-active"}
            href={"/CDC"}
          >
            Coups de coeur
          </a>
        </ul>
      </nav>
      <h1>React Movies</h1>
    </header>
  );
};

export default Header;
