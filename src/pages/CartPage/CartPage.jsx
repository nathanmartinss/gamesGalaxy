import React from "react";
import { useCart } from "../../context/CartContext";
import { useNavigate } from "react-router-dom";
import { useUser } from "../../context/UserContext"; // Importar UserContext
import { createOrder } from "../../utils/firestoreService";
import "./CartPage.css";

const CartPage = () => {
  const { cart, addItem, removeItem, clear, getTotalPrice } = useCart();
  const { user } = useUser(); // Verificar se o usuário está logado
  const navigate = useNavigate();

  // Função para aumentar a quantidade de um item no carrinho
  const handleIncrease = (item) => {
    if (item.quantity < 5 && item.quantity < item.stock) {
      addItem(item, 1);
    } else {
      alert("Limite de 5 unidades ou estoque atingido.");
    }
  };

  // Função para diminuir a quantidade de um item no carrinho
  const handleDecrease = (item) => {
    if (item.quantity > 1) {
      addItem(item, -1);
    } else {
      removeItem(item.id);
    }
  };

  // Função para finalizar a compra
  const handleFinalizePurchase = async () => {
    if (!user) {
      alert("Você precisa estar logado para finalizar a compra.");
      return navigate("/login");
    }

    const buyer = {
      name: user.name,
      phone: "123456789", // Estes dados poderiam ser capturados através de um formulário mais detalhado
      email: user.email,
    };

    const order = {
      buyer,
      items: cart.map((item) => ({
        id: item.id,
        title: item.title,
        price: item.price,
        quantity: item.quantity,
      })),
      total: getTotalPrice(),
    };

    try {
      const orderId = await createOrder(order);
      alert(`Pedido realizado com sucesso! ID da ordem: ${orderId}`);
      clear();
      navigate("/orders"); // Redireciona para a página "Meus Pedidos" após a compra
    } catch (error) {
      console.error("Erro ao finalizar compra:", error);
      alert("Erro ao finalizar a compra. Tente novamente.");
    }
  };

  return (
    <div className="cart-page">
      <h1>Seu Carrinho</h1>
      {cart.length === 0 ? (
        <div className="empty-cart">
          <p>Seu carrinho está vazio. 😞</p>
          <button className="btn btn-secondary" onClick={() => navigate("/")}>
            Continuar Comprando
          </button>
        </div>
      ) : (
        <>
          <table className="cart-table">
            <thead>
              <tr>
                <th>Produto</th>
                <th>Quantidade</th>
                <th>Preço Unitário</th>
                <th>Total</th>
                <th>Ações</th>
              </tr>
            </thead>
            <tbody>
              {cart.map((item) => (
                <tr key={item.id}>
                  <td>{item.title}</td>
                  <td>{item.quantity}</td>
                  <td>R$ {item.price.toFixed(2)}</td>
                  <td>R$ {(item.price * item.quantity).toFixed(2)}</td>
                  <td>
                    <button
                      className="btn btn-success btn-sm me-2"
                      onClick={() => handleIncrease(item)}
                    >
                      +
                    </button>
                    <button
                      className="btn btn-warning btn-sm me-2"
                      onClick={() => handleDecrease(item)}
                    >
                      -
                    </button>
                    <button
                      className="btn btn-danger btn-sm"
                      onClick={() => removeItem(item.id)}
                    >
                      Remover
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          <div className="cart-summary">
            <h3>Total Geral: R$ {getTotalPrice().toFixed(2)}</h3>
            <button
              className="btn btn-primary finalize-btn"
              onClick={handleFinalizePurchase}
            >
              Finalizar Compra
            </button>
            <button className="btn btn-danger clear-btn" onClick={clear}>
              Limpar Carrinho
            </button>
          </div>
        </>
      )}
    </div>
  );
};

export default CartPage;
