import React from "react";
import { FaShoppingCart } from "react-icons/fa";
import { useCart } from "../../context/CartContext";
import { useNavigate } from "react-router-dom";
import "./CartWidget.css";

const CartWidget = () => {
  const { getTotalItems } = useCart();
  const navigate = useNavigate();
  const totalItems = getTotalItems();

  return (
    <div
      className="cart-widget"
      onClick={() => navigate("/cart")}
      style={{ cursor: "pointer" }}
    >
      <FaShoppingCart />
      {totalItems > 0 && (
        <span className="badge badge-pill badge-primary">{totalItems}</span>
      )}
    </div>
  );
};

export default CartWidget;
