import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useCart } from "../../context/CartContext";
import ItemCount from "../ItemCount/ItemCount";
import "bootstrap/dist/css/bootstrap.min.css";

/**
 * Componente para exibir os detalhes de um item.
 * @param {Object} props - Dados do item, incluindo id, title, description, price, pictureUrl e stock.
 */
const ItemDetail = ({ id, title, description, price, pictureUrl, stock }) => {
  const { addItem, getItemQuantity } = useCart(); // Contexto do carrinho
  const navigate = useNavigate();
  const [addedQuantity, setAddedQuantity] = useState(0);

  // Adiciona itens ao carrinho
  const handleAddToCart = (quantity) => {
    const item = { id, title, price, stock, pictureUrl };
    addItem(item, quantity);
    setAddedQuantity(quantity);
  };

  // Finaliza a compra
  const handleFinalizePurchase = () => {
    navigate("/cart"); // Redireciona para o carrinho
  };

  // Quantidade atual do item no carrinho
  const currentQuantityInCart = getItemQuantity(id);

  // Calcula o estoque disponível, considerando o que já está no carrinho
  const maxStockAvailable = stock - currentQuantityInCart;

  return (
    <div className="card" style={{ width: "18rem", margin: "20px auto" }}>
      <img src={pictureUrl} className="card-img-top" alt={title} />
      <div className="card-body">
        <h5 className="card-title">{title}</h5>
        <p className="card-text">{description}</p>
        <p className="card-text">Preço: R$ {price.toFixed(2)}</p>
        {addedQuantity === 0 ? (
          <ItemCount
            stock={maxStockAvailable}
            initial={1}
            onAdd={handleAddToCart}
          />
        ) : (
          <div>
            <p className="text-success">
              {addedQuantity} unidade(s) adicionada(s) ao carrinho!
            </p>
            <button
              className="btn btn-success w-100"
              onClick={handleFinalizePurchase}
            >
              Finalizar Compra
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default ItemDetail;
