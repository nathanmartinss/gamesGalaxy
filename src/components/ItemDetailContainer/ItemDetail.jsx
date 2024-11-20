import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useCart } from "../../context/CartContext";
import ItemCount from "../ItemCount/ItemCount";
import "bootstrap/dist/css/bootstrap.min.css";

const ItemDetail = ({ id, title, description, price, pictureUrl, stock }) => {
  const { addItem, getItemQuantity } = useCart();
  const navigate = useNavigate();
  const [addedQuantity, setAddedQuantity] = useState(0);

  const handleAddToCart = (quantity) => {
    const item = { id, title, price, stock, pictureUrl };
    addItem(item, quantity);
    setAddedQuantity(quantity);
  };

  const handleFinalizePurchase = () => {
    navigate("/cart");
  };

  const currentQuantityInCart = getItemQuantity(id);
  const maxStockAvailable = stock - currentQuantityInCart;

  return (
    <div className="card" style={{ width: "18rem", margin: "20px auto" }}>
      <img src={pictureUrl} className="card-img-top" alt={title} />
      <div className="card-body">
        <h5 className="card-title">{title}</h5>
        <p className="card-text">{description}</p>
        <p className="card-text">Preço: R$ {price}</p>
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
