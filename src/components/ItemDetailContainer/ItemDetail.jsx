import React from "react";
import ItemCount from "../ItemCount/ItemCount";
import "bootstrap/dist/css/bootstrap.min.css";

const ItemDetail = ({ id, title, description, price, pictureUrl, stock }) => {
  const handleAddToCart = (quantity) => {
    console.log(`Adding ${quantity} of ${title} to the cart`);
  };

  return (
    <div className="card" style={{ width: "18rem" }}>
      <img src={pictureUrl} className="card-img-top" alt={title} />
      <div className="card-body">
        <h5 className="card-title">{title}</h5>
        <p className="card-text">{description}</p>
        <p className="card-text">Preço: R${price}</p>
        <ItemCount stock={stock} onAdd={handleAddToCart} />
      </div>
    </div>
  );
};

export default ItemDetail;
