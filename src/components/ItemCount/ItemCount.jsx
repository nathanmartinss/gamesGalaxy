import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../Item/Item.css";

const ItemCount = ({ stock, initial = 1, onAdd }) => {
  const [count, setCount] = useState(Math.min(initial, stock, 5));

  const handleIncrease = () => {
    if (count < stock && count < 5) {
      setCount(count + 1);
    }
  };

  const handleDecrease = () => {
    if (count > 1) {
      setCount(count - 1);
    }
  };

  return (
    <div className="item-count">
      <div className="d-flex justify-content-center align-items-center">
        <button
          className="btn btn-secondary"
          onClick={handleDecrease}
          disabled={count === 1}
        >
          -
        </button>
        <span className="mx-2">{count}</span>
        <button
          className="btn btn-secondary"
          onClick={handleIncrease}
          disabled={count === Math.min(stock, 5)}
        >
          +
        </button>
      </div>
      <button
        className="btn btn-primary add-to-cart-btn mt-2"
        onClick={() => onAdd(count)}
        disabled={stock === 0}
      >
        Adicionar ao Carrinho
      </button>
    </div>
  );
};

export default ItemCount;
