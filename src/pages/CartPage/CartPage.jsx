import React from "react";
import { useCart } from "../../context/CartContext";
import { useNavigate } from "react-router-dom";
import { useUser } from "../../context/UserContext";
import { createOrder } from "../../utils/firestoreService";
import "./CartPage.css";

const CartPage = () => {
  // Componente funcional que exibe e gerencia o carrinho de compras.

  const { cart, addItem, removeItem, clear, getTotalPrice } = useCart(); // Obtém as funções e estado do carrinho do contexto.
  const { user } = useUser(); // Obtém o usuário logado do contexto.
  const navigate = useNavigate(); // Inicializa o hook para redirecionamento.

  // Função para aumentar a quantidade de um item no carrinho.
  const handleIncrease = (item) => {
    if (item.quantity < 5 && item.quantity < item.stock) {
      // Verifica se a quantidade não excede o limite de 5 unidades ou o estoque disponível.
      addItem(item, 1); // Adiciona mais uma unidade do item.
    } else {
      alert("Limite de 5 unidades ou estoque atingido."); // Alerta caso o limite seja atingido.
    }
  };

  // Função para diminuir a quantidade de um item no carrinho.
  const handleDecrease = (item) => {
    if (item.quantity > 1) {
      // Verifica se a quantidade é maior que 1.
      addItem(item, -1); // Remove uma unidade do item.
    } else {
      removeItem(item.id); // Remove o item do carrinho se a quantidade for 1.
    }
  };

  // Função para finalizar a compra.
  const handleFinalizePurchase = async () => {
    if (!user) {
      // Verifica se o usuário está logado.
      alert("Você precisa estar logado para finalizar a compra."); // Alerta se não estiver logado.
      return navigate("/login"); // Redireciona para a página de login.
    }

    // Dados do comprador.
    const buyer = {
      name: user.name, // Nome do usuário logado.
      phone: "123456789", // Número de telefone fictício (pode ser coletado via formulário).
      email: user.email, // Email do usuário logado.
    };

    // Estrutura da ordem de compra.
    const order = {
      buyer, // Informações do comprador.
      items: cart.map((item) => ({
        id: item.id, // ID do produto.
        title: item.title, // Título do produto.
        price: item.price, // Preço unitário.
        quantity: item.quantity, // Quantidade no carrinho.
      })),
      total: getTotalPrice(), // Total da compra calculado pelo contexto.
    };

    try {
      const orderId = await createOrder(order); // Cria a ordem no Firestore e retorna o ID da ordem.
      alert(`Pedido realizado com sucesso! ID da ordem: ${orderId}`); // Alerta com o ID da ordem criada.
      clear(); // Limpa o carrinho após a finalização da compra.
      navigate("/orders"); // Redireciona para a página de "Meus Pedidos".
    } catch (error) {
      console.error("Erro ao finalizar compra:", error); // Loga o erro no console.
      alert("Erro ao finalizar a compra. Tente novamente."); // Alerta caso ocorra algum erro.
    }
  };

  return (
    <div className="cart-page">
      {" "}
      {/* Contêiner principal da página do carrinho. */}
      <h1>Seu Carrinho</h1> {/* Título da página. */}
      {cart.length === 0 ? ( // Verifica se o carrinho está vazio.
        <div className="empty-cart">
          {" "}
          {/* Exibe mensagem e botão para carrinho vazio. */}
          <p>Seu carrinho está vazio. 😞</p>
          <button className="btn btn-secondary" onClick={() => navigate("/")}>
            Continuar Comprando
          </button>
        </div>
      ) : (
        <>
          {" "}
          {/* Renderiza a tabela e o resumo do carrinho se houver itens. */}
          <table className="cart-table">
            {" "}
            {/* Tabela com os itens do carrinho. */}
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
                // Mapeia os itens do carrinho para criar linhas na tabela.
                <tr key={item.id}>
                  <td>{item.title}</td> {/* Título do produto. */}
                  <td>{item.quantity}</td>{" "}
                  {/* Quantidade do produto no carrinho. */}
                  <td>R$ {item.price.toFixed(2)}</td>{" "}
                  {/* Preço unitário formatado. */}
                  <td>R$ {(item.price * item.quantity).toFixed(2)}</td>{" "}
                  {/* Total do item formatado. */}
                  <td>
                    {/* Botão para aumentar a quantidade. */}
                    <button
                      className="btn btn-success btn-sm me-2"
                      onClick={() => handleIncrease(item)}
                    >
                      +
                    </button>
                    {/* Botão para diminuir a quantidade. */}
                    <button
                      className="btn btn-warning btn-sm me-2"
                      onClick={() => handleDecrease(item)}
                    >
                      -
                    </button>
                    {/* Botão para remover o item do carrinho. */}
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
            {" "}
            {/* Resumo do carrinho. */}
            <h3>Total Geral: R$ {getTotalPrice().toFixed(2)}</h3>{" "}
            {/* Exibe o total geral. */}
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

export default CartPage; // Exporta o componente para ser usado em outras partes do aplicativo.
