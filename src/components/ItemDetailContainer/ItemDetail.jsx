import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import ItemCount from "../ItemCount/ItemCount";
import "bootstrap/dist/css/bootstrap.min.css";

const ItemDetail = ({ id, title, description, price, pictureUrl, stock }) => {
  const [addedQuantity, setAddedQuantity] = useState(0);
  const navigate = useNavigate();

  const handleAddToCart = (quantity) => {
    setAddedQuantity(quantity);
  };

  const handleFinalizePurchase = () => {
    navigate("/cart");
  };

  return (
    <div className="card" style={{ width: "18rem", margin: "20px auto" }}>
      <img src={pictureUrl} className="card-img-top" alt={title} />
      <div className="card-body">
        <h5 className="card-title">{title}</h5>
        <p className="card-text">{description}</p>
        <p className="card-text">Preço: R$ {price}</p>
        {addedQuantity === 0 ? (
          <ItemCount stock={stock} initial={1} onAdd={handleAddToCart} />
        ) : (
          <div>
            <p className="text-success">
              Adicionado: {addedQuantity} de {stock}
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
