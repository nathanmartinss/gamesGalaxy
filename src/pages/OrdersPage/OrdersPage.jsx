import React, { useState, useEffect } from "react";
import { useUser } from "../../context/UserContext";
import { collection, query, where, getDocs } from "firebase/firestore";
import { db } from "../../config/firebaseConfig";
import "./OrdersPage.css";

const OrdersPage = () => {
  // Componente funcional que exibe os pedidos do usuário.

  const { user } = useUser(); // Obtém os dados do usuário logado através do contexto `UserContext`.
  const [orders, setOrders] = useState([]); // Define um estado para armazenar os pedidos do usuário.

  // Hook useEffect para buscar os pedidos do usuário assim que ele estiver logado.
  useEffect(() => {
    if (user) {
      // Verifica se o usuário está logado.
      const fetchOrders = async () => {
        // Função assíncrona para buscar pedidos.
        const ordersCollection = collection(db, "orders"); // Refere-se à coleção "orders" no Firestore.
        const q = query(
          // Cria uma consulta para buscar pedidos filtrados pelo email do comprador.
          ordersCollection,
          where("buyer.email", "==", user.email) // Filtra pedidos onde o email do comprador coincide com o do usuário logado.
        );
        const querySnapshot = await getDocs(q); // Executa a consulta e retorna os resultados.

        // Atualiza o estado `orders` com os dados dos pedidos.
        setOrders(
          querySnapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() })) // Mapeia os documentos retornados para objetos contendo o ID e os dados do pedido.
        );
      };
      fetchOrders(); // Chama a função para buscar os pedidos.
    }
  }, [user]); // Executa o efeito sempre que o estado `user` mudar.

  // Se o usuário não estiver logado, exibe uma mensagem.
  if (!user) {
    return <p>Você precisa estar logado para ver seus pedidos.</p>;
  }

  // Renderiza a página com os pedidos.
  return (
    <div className="container-orderspage">
      {" "}
      {/* Contêiner principal estilizado. */}
      <h2>Meus Pedidos</h2> {/* Título da página. */}
      {orders.length === 0 ? ( // Verifica se não há pedidos.
        <p>Nenhum pedido encontrado.</p> // Mensagem exibida quando não há pedidos.
      ) : (
        <ul>
          {orders.map((order) => (
            // Mapeia os pedidos para exibi-los como uma lista.
            <li key={order.id}>
              {/* Exibe o ID e o total do pedido. */}
              Pedido #{order.id} - Total: R$ {order.total.toFixed(2)}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default OrdersPage; // Exporta o componente para ser usado em outras partes do aplicativo.
