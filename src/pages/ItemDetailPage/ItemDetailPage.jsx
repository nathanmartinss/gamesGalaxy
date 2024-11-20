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
  2: {
    title: "Xbox Series X",
    description:
      "O console mais poderoso da Microsoft, com gráficos incríveis e desempenho ultrarrápido.",
    price: 4599,
    pictureUrl:
      "https://cms-assets.xboxservices.com/assets/68/a0/68a0e50d-0d13-42b1-8498-e55cef8a9133.png?n=642227_Hero-Gallery-0_A2_857x676.png",
    stock: 5,
  },
  3: {
    title: "Nintendo Switch",
    description:
      "A versatilidade de um console híbrido: jogue na TV ou em qualquer lugar.",
    price: 2999,
    pictureUrl:
      "https://assets.nintendo.com/image/upload/f_auto/q_auto/c_fill,w_300/ncom/en_US/switch/system/three-modes-in-one",
    stock: 5,
  },
};

const ItemDetailPage = () => {
  const { id } = useParams();
  const item = itemData[id];
  const { addItem } = useCart();

  const handleAddToCart = (quantity) => {
    addItem(item, quantity);
    alert(`Adicionado ${quantity} unidades de ${item.title} ao carrinho!`);
  };

  if (!item) {
    return (
      <div
        style={{
          textAlign: "center",
          marginTop: "50px",
        }}
      >
        <h2>Produto não encontrado</h2>
      </div>
    );
  }

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
          <ItemCount stock={item.stock} initial={1} onAdd={handleAddToCart} />
        </div>
      </div>
    </div>
  );
};

export default ItemDetailPage;
