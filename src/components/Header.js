import React from "react";

const Header = () => {
  return (
    <header className="header">
      <nav>
        <ul>
          <a href={"/Home"}>Accueil</a>
          <a href={"/CoupDeC"}>Coups de coeur</a>
        </ul>
      </nav>
      <h1>React Movies</h1>
    </header>
  );
};

export default Header;
