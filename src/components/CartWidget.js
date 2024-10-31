import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { FaShoppingCart } from "react-icons/fa";

const CartWidget = () => {
  return (
    <div className="cart-widget">
      <FaShoppingCart />
    </div>
  );
};

export default CartWidget;
