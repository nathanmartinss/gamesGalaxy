import React from "react";
import { FaShoppingCart } from "react-icons/fa";
import { useCart } from "./../../context/CartContext";
import "bootstrap/dist/css/bootstrap.min.css";
import "../CartWidget/CartWidget.css";

const CartWidget = () => {
  const { getTotalItems } = useCart();
  const totalItems = getTotalItems();

  return (
    <div className="cart-widget">
      <FaShoppingCart />
      {totalItems > 0 && (
        <span className="badge badge-pill badge-primary">{totalItems}</span>
      )}
    </div>
  );
};

export default CartWidget;
