import React from "react"; // Importa o React
import { FaShoppingCart } from "react-icons/fa"; // Importa o ícone de carrinho de compras da biblioteca React Icons
import { useCart } from "../../context/CartContext"; // Importa o contexto do carrinho para acessar suas funções
import { useNavigate } from "react-router-dom"; // Importa o hook useNavigate para navegação entre páginas
import "./CartWidget.css"; // Importa o arquivo CSS para estilizar o componente

/**
 * Componente CartWidget
 * Exibe o ícone do carrinho de compras e o número total de itens no carrinho.
 * Permite navegar para a página do carrinho ao clicar.
 */
const CartWidget = () => {
  // Obtém a função getTotalItems do contexto do carrinho
  const { getTotalItems } = useCart();
  // Hook para realizar navegação programática
  const navigate = useNavigate();
  // Obtém o total de itens no carrinho
  const totalItems = getTotalItems();

  return (
    <div
      className="cart-widget" // Classe CSS para estilização do componente
      onClick={() => navigate("/cart")} // Navega para a página do carrinho ao clicar no componente
      style={{ cursor: "pointer" }} // Define o cursor como pointer para indicar que é clicável
    >
      {/* Ícone do carrinho de compras */}
      <FaShoppingCart />
      {/* Exibe o número de itens no carrinho se houver pelo menos 1 item */}
      {totalItems > 0 && (
        <span className="badge badge-pill badge-primary">{totalItems}</span>
      )}
    </div>
  );
};

export default CartWidget; // Exporta o componente para uso em outros arquivos
