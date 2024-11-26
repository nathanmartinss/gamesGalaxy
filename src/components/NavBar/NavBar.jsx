import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./NavBar.css";
import CartWidget from "../CartWidget/CartWidget";
import { auth } from "../../config/firebaseConfig";
import {
  signInWithPopup,
  GoogleAuthProvider,
  signOut,
  onAuthStateChanged,
} from "firebase/auth";

const NavBar = () => {
  const [user, setUser] = useState(null); // Estado para armazenar as informações do usuário
  const navigate = useNavigate();

  useEffect(() => {
    // Observa o estado de autenticação do usuário
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser); // Atualiza o estado com as informações do usuário logado
    });
    return () => unsubscribe(); // Limpa o observador ao desmontar o componente
  }, []);

  const handleLogin = async () => {
    // Função para realizar o login com o Google
    try {
      const provider = new GoogleAuthProvider();
      await signInWithPopup(auth, provider);
    } catch (error) {
      console.error("Erro ao fazer login:", error);
    }
  };

  const handleLogout = async () => {
    // Função para realizar o logout
    try {
      await signOut(auth);
      alert("Logout realizado com sucesso!");
      navigate("/login"); // Redireciona para a página de login após o logout
    } catch (error) {
      console.error("Erro ao fazer logout:", error);
    }
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container">
        {/* Link para a página inicial */}
        <Link className="navbar-brand" to="/">
          Games Galaxy
        </Link>

        {/* Botão para abrir/fechar a barra de navegação no modo mobile */}
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

        {/* Links da barra de navegação */}
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

        {/* Botão de login/logout */}
        <div className="auth-button-container ms-3">
          {user ? (
            <button className="btn btn-danger" onClick={handleLogout}>
              Logout
            </button>
          ) : (
            <button className="btn-login btn-primary" onClick={handleLogin}>
              Login
            </button>
          )}
        </div>

        {/* Ícone do carrinho de compras */}
        <div className="cart-icon-container">
          <CartWidget />
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
