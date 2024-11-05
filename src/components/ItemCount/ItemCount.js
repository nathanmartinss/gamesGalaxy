import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../Item/Item.css";

const ItemCount = ({ stock, initial, onAdd }) => {
  const [count, setCount] = useState(initial);
  const handleIncrease = () => {
    if (count < stock) {
      setCount(count + 1);
    } else {
      alert("Quantidade máxima atingida!");
    }
  };
  const handleDecrease = () => {
    if (count > 1) {
      setCount(count - 1);
    }
  };
  return (
    <div className="item-count">
      {" "}
      <div className="d-flex justify-content-center align-items-center">
        {" "}
        <button className="btn btn-secondary" onClick={handleDecrease}>
          -
        </button>{" "}
        <span className="mx-2">{count}</span>{" "}
        <button className="btn btn-secondary" onClick={handleIncrease}>
          +
        </button>{" "}
      </div>{" "}
      <button
        className="btn btn-primary add-to-cart-btn mt-2"
        onClick={() => onAdd(count)}
      >
        Adicionar ao Carrinho
      </button>{" "}
    </div>
  );
};

export default ItemCount;
