import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import ItemCount from "./../ItemCount/ItemCount";
import "./Item.css";

const Item = ({ id, title, price, pictureUrl, stock, onAdd }) => {
  return (
    <div className="card m-3" style={{ width: "18rem" }}>
      <img src={pictureUrl} className="card-img-top" alt={title} />
      <div className="card-body">
        <h5 className="card-title">{title}</h5>
        <p className="card-text">Preço: R$ {price}</p>
        <ItemCount stock={stock} initial={1} onAdd={onAdd} />{" "}
        {}
      </div>
    </div>
  );
};

export default Item;
