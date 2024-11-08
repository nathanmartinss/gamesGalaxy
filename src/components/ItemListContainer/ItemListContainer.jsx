import React, { useState, useEffect } from "react";
import ItemList from "../Item/ItemList.jsx";
import "bootstrap/dist/css/bootstrap.min.css";

const ItemListContainer = ({ greeting }) => {
  const [items, setItems] = useState([]);

  useEffect(() => {
    const fetchItems = new Promise((resolve) => {
      setTimeout(() => {
        resolve([
          {
            id: 1,
            title: "PlayStation 5",
            description: "O console de próxima geração da Sony.",
            price: 4999,
            pictureUrl:
              "https://gmedia.playstation.com/is/image/SIEPDC/ps5-product-thumbnail-01-en-14sep21?$facebook$",
          },
          {
            id: 2,
            title: "Xbox Series X",
            description: "O console mais poderoso da Microsoft.",
            price: 4599,
            pictureUrl:
              "https://cms-assets.xboxservices.com/assets/68/a0/68a0e50d-0d13-42b1-8498-e55cef8a9133.png?n=642227_Hero-Gallery-0_A2_857x676.png",
          },
          {
            id: 3,
            title: "Nintendo Switch",
            description: "A versatilidade de um console híbrido.",
            price: 2999,
            pictureUrl:
              "https://assets.nintendo.com/image/upload/f_auto/q_auto/c_fill,w_300/ncom/en_US/switch/system/three-modes-in-one",
          },
        ]);
      }, 2000);
    });

    fetchItems.then((data) => {
      setItems(data);
    });
  }, []);

  return (
    <div className="container">
      <h2>{greeting}</h2>
      <ItemList items={items} />
    </div>
  );
};

export default ItemListContainer;
