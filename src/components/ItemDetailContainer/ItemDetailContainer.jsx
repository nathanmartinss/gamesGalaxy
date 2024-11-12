import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import ItemDetail from "./ItemDetail";
import "bootstrap/dist/css/bootstrap.min.css";

const getItem = (id) => {
  const items = [
    {
      id: 1,
      title: "PlayStation 5",
      description: "O console de próxima geração da Sony.",
      price: 4999,
      pictureUrl:
        "https://gmedia.playstation.com/is/image/SIEPDC/ps5-product-thumbnail-01-en-14sep21?$facebook$",
      stock: 5,
    },
    {
      id: 2,
      title: "Xbox Series X",
      description: "O console mais poderoso da Microsoft.",
      price: 4599,
      pictureUrl:
        "https://cms-assets.xboxservices.com/assets/68/a0/68a0e50d-0d13-42b1-8498-e55cef8a9133.png?n=642227_Hero-Gallery-0_A2_857x676.png",
      stock: 5,
    },
    {
      id: 3,
      title: "Nintendo Switch",
      description: "A versatilidade de um console híbrido.",
      price: 2999,
      pictureUrl:
        "https://assets.nintendo.com/image/upload/f_auto/q_auto/c_fill,w_300/ncom/en_US/switch/system/three-modes-in-one",
      stock: 5,
    },
  ];

  return new Promise((resolve) => {
    setTimeout(() => {
      const item = items.find((item) => item.id === parseInt(id, 10));
      resolve(item);
    }, 2000);
  });
};

const ItemDetailContainer = () => {
  const { id } = useParams(); // Captura o id do item da URL
  const [item, setItem] = useState(null);

  useEffect(() => {
    getItem(id).then((data) => {
      setItem(data);
    });
  }, [id]);

  return (
    <div className="container">
      <h2>Saiba mais sobre os nossos produtos</h2>
      {item ? <ItemDetail {...item} /> : <p>Carregando...</p>}
    </div>
  );
};

export default ItemDetailContainer;
