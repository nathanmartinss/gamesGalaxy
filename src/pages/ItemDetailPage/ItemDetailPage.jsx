import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { useCart } from "../../context/CartContext";
import ItemCount from "../../components/ItemCount/ItemCount";

const itemData = {
  1: {
    title: "PlayStation 5",
    description:
      "O console de próxima geração da Sony, com gráficos de última geração e carregamento ultrarrápido.",
    price: 4999,
    pictureUrl:
      "https://gmedia.playstation.com/is/image/SIEPDC/ps5-product-thumbnail-01-en-14sep21?$facebook$",
    stock: 5,
  },
};

const ItemDetailPage = () => {
  const { id } = useParams();
  const item = itemData[id];
  const { addToCart } = useCart();

  const handleAddToCart = (quantity) => {
    addToCart(item, quantity);
    alert(`Adicionado ${quantity} unidades de ${item.title} ao carrinho!`);
  };

  return (
    <div
      className="container"
      style={{ display: "flex", justifyContent: "center", marginTop: "20px" }}
    >
      <div className="card" style={{ width: "30rem" }}>
        <img src={item.pictureUrl} className="card-img-top" alt={item.title} />
        <div className="card-body">
          <h5 className="card-title">{item.title}</h5>
          <p className="card-text">{item.description}</p>
          <p className="card-text">Preço: R$ {item.price}</p>
          <ItemCount
            stock={item.stock}
            initial={1}
            onAdd={handleAddToCart}
          />{" "}
        </div>
      </div>
    </div>
  );
};

export default ItemDetailPage;
