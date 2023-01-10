import React, { useState } from "react";

const Header = () => {
  const [show, setShow] = useState(true);

  return (
    <header className="header">
      <nav>
        <ul>
          <a
            className={show ? "nav-active" : ""}
            onClick={() => setShow(true)}
            href={"/"}
          >
            Accueil
          </a>
          <a
            className={show ? "" : "nav-active"}
            onClick={() => setShow(false)}
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
