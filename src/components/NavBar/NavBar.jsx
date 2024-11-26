import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useUser } from "../../context/UserContext";
import "bootstrap/dist/css/bootstrap.min.css";
import "./NavBar.css";
import CartWidget from "../CartWidget/CartWidget";

const NavBar = () => {
  const { user, logout } = useUser(); // Obtém o usuário e a função de logout do contexto
  const [isMenuOpen, setIsMenuOpen] = useState(false); // Estado para controlar o menu do usuário
  const navigate = useNavigate(); // Cria uma instância de navigate

  const handleMenuToggle = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container">
        <Link className="navbar-brand" to="/">
          <img
            src={`${process.env.PUBLIC_URL}/favicon.ico`}
            alt="Games Galaxy Logo"
            className="navbar-logo"
          />
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

        <div className="d-flex align-items-center">
          <div className="cart-icon-container">
            <CartWidget />
          </div>

          {/* Se o usuário estiver logado, mostra o nome e o menu */}
          {user ? (
            <div className="user-menu-container" onClick={handleMenuToggle}>
              <span className="user-name">{user.name || "Usuário"}</span>
              {isMenuOpen && (
                <div className="user-dropdown-menu">
                  <ul>
                    <li
                      onClick={() => {
                        setIsMenuOpen(false);
                        navigate("/orders");
                      }}
                    >
                      Meus Pedidos
                    </li>
                    <li
                      onClick={() => {
                        logout();
                        setIsMenuOpen(false);
                      }}
                    >
                      Logout
                    </li>
                  </ul>
                </div>
              )}
            </div>
          ) : (
            // Se não estiver logado, mostra o botão de login
            <button
              className="btn login-btn"
              onClick={() => navigate("/login")}
            >
              Login
            </button>
          )}
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
