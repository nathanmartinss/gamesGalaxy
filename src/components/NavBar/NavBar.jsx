import React from "react";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./NavBar.css";
import CartWidget from "../CartWidget/CartWidget";

const NavBar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container">
        <Link className="navbar-brand" to="/">
          Games Galaxy
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div
          className="collapse navbar-collapse justify-content-center"
          id="navbarNav"
        >
          <ul className="navbar-nav">
            <li className="nav-item">
              <Link className="nav-link" to="/">
                Início
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/category/console">
                Consoles
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/category/jogo">
                Jogos
              </Link>
            </li>
          </ul>
        </div>
        <div className="cart-icon-container">
          <CartWidget />
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
