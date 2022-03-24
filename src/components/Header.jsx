import React from "react";
import "./Header.css";

const Header = ({ black }) => {
  return (
    <header className={black ? "black" : ""}>
      <div className="header--menu">
        <div className="header--logo">
          <a href="/">
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg"
              alt=""
            />
          </a>
        </div>
        <main className="header-itensMenu">
          <p>Início</p>
          <p>Séries</p>
          <p>Filmes</p>
          <p>Bombando</p>
          <p>Minha lista</p>
        </main>
      </div>
      <div className="header--user">
        <a href="/"></a>
      </div>
    </header>
  );
};

export default Header;
