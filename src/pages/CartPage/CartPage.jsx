import React from "react";
import { useCart } from "../../context/CartContext";
import { useNavigate } from "react-router-dom";
import "./CartPage.css";

const CartPage = () => {
  const { cart, addToCart, removeFromCart, clearCart } = useCart();
  const navigate = useNavigate();

  const handleIncrease = (item) => {
    if (item.quantity < 5 && item.quantity < item.stock) {
      addToCart(item, 1);
    } else {
      alert("Limite de 5 unidades ou estoque atingido.");
    }
  };

  const handleDecrease = (item) => {
    if (item.quantity > 1) {
      addToCart(item, -1);
    } else {
      removeFromCart(item.id);
    }
  };

  const handleFinalizePurchase = () => {
    alert("Compra finalizada! Obrigado por comprar conosco.");
    clearCart();
    navigate("/");
  };

  return (
    <div className="cart-page">
      <h1>Seu Carrinho</h1>
      {cart.length === 0 ? (
        <p>O carrinho está vazio.</p>
      ) : (
        <>
          <table className="cart-table">
            <thead>
              <tr>
                <th>Produto</th>
                <th>Quantidade</th>
                <th>Preço</th>
                <th>Total</th>
                <th>Ações</th>
              </tr>
            </thead>
            <tbody>
              {cart.map((item) => (
                <tr key={item.id}>
                  <td>{item.title}</td>
                  <td>{item.quantity}</td>
                  <td>R$ {item.price}</td>
                  <td>R$ {item.price * item.quantity}</td>
                  <td>
                    <button onClick={() => handleIncrease(item)}>+</button>
                    <button onClick={() => handleDecrease(item)}>-</button>
                    <button onClick={() => removeFromCart(item.id)}>
                      Remover
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          <div className="finalize-container">
            <button
              className="btn btn-primary finalize-btn"
              onClick={handleFinalizePurchase}
            >
              Finalizar Compra
            </button>
          </div>
        </>
      )}
    </div>
  );
};

export default CartPage;
