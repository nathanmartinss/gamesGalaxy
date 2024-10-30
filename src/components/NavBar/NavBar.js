import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./NavBar.css";

const NavBar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <a className="navbar-brand" href="/">
        Jogos Martins
      </a>
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarNav"
        aria-controls="navbarNav"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>

      <ul className="navbar-nav mx-auto">
        <li className="nav-item">
          <a className="nav-link" href="/">
            Início
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="/new-games">
            Jogos Novos
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="/used-games">
            Jogos Usados
          </a>
        </li>
      </ul>
      <ul className="navbar-nav ml-auto nav-item-login">
        <li className="nav-item">
          <a className="nav-link" href="/login">
            Login
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;
