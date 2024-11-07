import React from "react";

const ItemDetail = ({ id, title, description, price, pictureUrl }) => {
  return (
    <div className="card" style={{ width: "18rem" }}>
      <img src={pictureUrl} className="card-img-top" alt={title} />
      <div className="card-body">
        <h5 className="card-title">{title}</h5>
        <p className="card-text">{description}</p>
        <p className="card-text">Preço: R${price}</p>
      </div>
    </div>
  );
};

export default ItemDetail;
