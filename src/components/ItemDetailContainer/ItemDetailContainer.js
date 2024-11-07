import React, { useState, useEffect } from "react";
import ItemDetail from "./ItemDetail.js";
import "bootstrap/dist/css/bootstrap.min.css";

const getItem = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({
        id: 1,
        title: "PlayStation 5",
        description: "O console de próxima geração da Sony.",
        price: 4999,
        pictureUrl:
          "https://gmedia.playstation.com/is/image/SIEPDC/ps5-product-thumbnail-01-en-14sep21?$facebook$",
      });
    }, 2000);
  });
};

const ItemDetailContainer = () => {
  const [item, setItem] = useState(null);

  useEffect(() => {
    getItem().then((data) => {
      setItem(data);
    });
  }, []);

  return (
    <div className="container">
      <h2>Detalhe do Produto</h2>
      {item ? <ItemDetail {...item} /> : <p>Carregando...</p>}
    </div>
  );
};

export default ItemDetailContainer;
