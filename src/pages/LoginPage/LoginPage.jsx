import React from "react";
import { useNavigate } from "react-router-dom";
import { auth, googleProvider } from "../../config/firebaseConfig";
import { signInWithPopup } from "firebase/auth";
import "../LoginPage/LoginPage.css";

const LoginPage = () => {
  const navigate = useNavigate();

  // Função para realizar o login com o Google
  const handleLogin = async () => {
    try {
      await signInWithPopup(auth, googleProvider);
      alert("Login bem-sucedido!");
      navigate("/"); // Redireciona para a página principal após o login
    } catch (error) {
      console.error("Erro ao fazer login:", error);
      alert("Erro ao fazer login. Tente novamente mais tarde.");
    }
  };

  return (
    <div className="login-page">
      <div className="login-container">
        <h2>Bem-vindo ao Games Galaxy</h2>
        <button
          className="btn-login btn-primary login-button"
          onClick={handleLogin}
        >
          Entrar com o Google
        </button>
      </div>
    </div>
  );
};

export default LoginPage;
