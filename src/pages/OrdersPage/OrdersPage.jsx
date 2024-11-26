import React, { useState, useEffect } from "react";
import { useUser } from "../../context/UserContext";
import { collection, query, where, getDocs } from "firebase/firestore";
import { db } from "../../config/firebaseConfig";
import "./OrdersPage.css";

const OrdersPage = () => {
  const { user } = useUser();
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    if (user) {
      const fetchOrders = async () => {
        const ordersCollection = collection(db, "orders");
        const q = query(
          ordersCollection,
          where("buyer.email", "==", user.email)
        );
        const querySnapshot = await getDocs(q);

        setOrders(
          querySnapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }))
        );
      };
      fetchOrders();
    }
  }, [user]);

  if (!user) {
    return <p>Você precisa estar logado para ver seus pedidos.</p>;
  }

  return (
    <div className="container-orderspage">
      <h2>Meus Pedidos</h2>
      {orders.length === 0 ? (
        <p>Nenhum pedido encontrado.</p>
      ) : (
        <ul>
          {orders.map((order) => (
            <li key={order.id}>
              Pedido #{order.id} - Total: R$ {order.total.toFixed(2)}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default OrdersPage;
