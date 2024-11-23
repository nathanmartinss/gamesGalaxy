import React, { createContext, useState, useContext } from "react";

// Criação do contexto do carrinho
const CartContext = createContext();

// Hook personalizado para acessar o contexto do carrinho
export const useCart = () => useContext(CartContext);

// Componente provedor do contexto do carrinho
export const CartProvider = ({ children }) => {
  // Estado para armazenar os itens do carrinho
  const [cart, setCart] = useState([]);

  /**
   * Adiciona um item ao carrinho.
   * Se o item já estiver presente, atualiza a quantidade.
   * Limita a quantidade máxima de 5 por item e verifica o estoque disponível.
   * @param {Object} item - Objeto representando o item (id, title, price, etc.).
   * @param {number} quantity - Quantidade a adicionar.
   */
  const addItem = (item, quantity) => {
    setCart((prevCart) => {
      // Verifica se o item já está no carrinho
      const existingItem = prevCart.find((cartItem) => cartItem.id === item.id);
      const currentQuantity = existingItem ? existingItem.quantity : 0;
      const totalQuantity = currentQuantity + quantity;

      // Validação de quantidade máxima
      if (totalQuantity > 5) {
        alert(`Você já atingiu o limite de 5 unidades de ${item.title}.`);
        return prevCart;
      }

      // Validação de estoque disponível
      if (totalQuantity > item.stock) {
        alert(`Quantidade em estoque insuficiente para ${item.title}.`);
        return prevCart;
      }

      // Atualiza o carrinho com a nova quantidade
      if (existingItem) {
        return prevCart.map((cartItem) =>
          cartItem.id === item.id
            ? { ...cartItem, quantity: totalQuantity }
            : cartItem
        );
      } else {
        // Adiciona um novo item ao carrinho
        return [...prevCart, { ...item, quantity }];
      }
    });
  };

  /**
   * Remove um item do carrinho com base no ID.
   * @param {string|number} itemId - ID do item a ser removido.
   */
  const removeItem = (itemId) => {
    setCart((prevCart) => prevCart.filter((item) => item.id !== itemId));
  };

  /**
   * Limpa todos os itens do carrinho.
   */
  const clear = () => {
    setCart([]);
  };

  /**
   * Verifica se um item está no carrinho com base no ID.
   * @param {string|number} id - ID do item.
   * @returns {boolean} - Retorna `true` se o item estiver no carrinho.
   */
  const isInCart = (id) => {
    return cart.some((item) => item.id === id);
  };

  /**
   * Retorna o número total de itens no carrinho.
   * Soma as quantidades de todos os itens.
   * @returns {number} - Total de itens no carrinho.
   */
  const getTotalItems = () => {
    return cart.reduce((total, item) => total + item.quantity, 0);
  };

  /**
   * Retorna o preço total de todos os itens no carrinho.
   * Multiplica o preço pela quantidade de cada item e soma os valores.
   * @returns {number} - Total do preço dos itens no carrinho.
   */
  const getTotalPrice = () => {
    return cart.reduce((total, item) => total + item.price * item.quantity, 0);
  };

  /**
   * Obtém a quantidade de um item específico no carrinho.
   * @param {string|number} id - ID do item.
   * @returns {number} - Quantidade do item no carrinho (ou 0 se não estiver presente).
   */
  const getItemQuantity = (id) => {
    const item = cart.find((cartItem) => cartItem.id === id);
    return item ? item.quantity : 0;
  };

  // Retorna o provedor do contexto com todas as funções e o estado do carrinho
  return (
    <CartContext.Provider
      value={{
        cart, // Lista de itens no carrinho
        addItem, // Função para adicionar itens
        removeItem, // Função para remover itens
        clear, // Função para limpar o carrinho
        isInCart, // Verifica se um item está no carrinho
        getTotalItems, // Retorna o total de itens no carrinho
        getTotalPrice, // Retorna o preço total do carrinho
        getItemQuantity, // Retorna a quantidade de um item específico no carrinho
      }}
    >
      {children}
    </CartContext.Provider>
  );
};
