import React, { createContext, useState, useEffect, useContext } from "react";
import { auth, googleProvider } from "../config/firebaseConfig";
import { signInWithPopup, signOut, onAuthStateChanged } from "firebase/auth";

const UserContext = createContext();
// Cria um contexto para gerenciar e compartilhar o estado do usuário autenticado.

export const useUser = () => useContext(UserContext);
// Hook personalizado para acessar o contexto do usuário em qualquer componente.

export const UserProvider = ({ children }) => {
  // Componente que envolve a aplicação e fornece o contexto de usuário para seus filhos.

  const [user, setUser] = useState(null);
  // Define o estado inicial do usuário como `null`, indicando que não há nenhum usuário autenticado.

  useEffect(() => {
    // Hook para monitorar mudanças no estado de autenticação do Firebase.

    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      // Adiciona um listener para observar mudanças no estado de autenticação.

      if (currentUser) {
        // Se o usuário está autenticado, define o estado `user` com as informações do usuário.
        setUser({
          uid: currentUser.uid, // ID único do usuário.
          name: currentUser.displayName, // Nome exibido do usuário.
          email: currentUser.email, // Email do usuário.
        });
      } else {
        // Se o usuário não está autenticado, define o estado `user` como `null`.
        setUser(null);
      }
    });

    return () => unsubscribe();
    // Retorna a função de limpeza para remover o listener ao desmontar o componente.
  }, []);
  // O efeito é executado apenas uma vez, ao montar o componente.

  const login = async () => {
    // Função para realizar login com o Google.
    try {
      await signInWithPopup(auth, googleProvider);
      // Abre o popup de autenticação do Google e autentica o usuário.
    } catch (error) {
      // Captura e exibe erros ocorridos durante o login.
      console.error("Erro ao fazer login:", error);
    }
  };

  const logout = async () => {
    // Função para realizar logout.
    try {
      await signOut(auth);
      // Faz logout do Firebase.
      setUser(null);
      // Define o estado `user` como `null` após o logout.
    } catch (error) {
      // Captura e exibe erros ocorridos durante o logout.
      console.error("Erro ao fazer logout:", error);
    }
  };

  return (
    <UserContext.Provider value={{ user, login, logout }}>
      {/* Define os valores do contexto que serão compartilhados. */}
      {children}
      {/* Renderiza os componentes filhos que terão acesso ao contexto. */}
    </UserContext.Provider>
  );
};

// Exporta o `UserProvider` como padrão para ser usado na aplicação.
export default UserProvider;
