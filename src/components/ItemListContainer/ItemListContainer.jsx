import React, { useState, useEffect } from "react";
import ItemList from "../Item/ItemList.jsx";
import { useParams } from "react-router-dom";
import { useCart } from "../../context/CartContext";
import "bootstrap/dist/css/bootstrap.min.css";

const ItemListContainer = ({ greeting }) => {
  const [items, setItems] = useState([]);
  const { addToCart } = useCart();
  const { id: categoryId } = useParams(); // Captura o parâmetro de categoria da URL

  useEffect(() => {
    const fetchItems = new Promise((resolve) => {
      setTimeout(() => {
        resolve([
          {
            id: 1,
            title: "PlayStation 5",
            category: "console",
            description: "O console de próxima geração da Sony.",
            price: 4999,
            pictureUrl:
              "https://gmedia.playstation.com/is/image/SIEPDC/ps5-product-thumbnail-01-en-14sep21?$facebook$",
            stock: 5,
          },
          {
            id: 2,
            title: "Xbox Series X",
            category: "console",
            description: "O console mais poderoso da Microsoft.",
            price: 4599,
            pictureUrl:
              "https://cms-assets.xboxservices.com/assets/68/a0/68a0e50d-0d13-42b1-8498-e55cef8a9133.png?n=642227_Hero-Gallery-0_A2_857x676.png",
            stock: 5,
          },
          {
            id: 3,
            title: "Nintendo Switch",
            category: "console",
            description: "A versatilidade de um console híbrido.",
            price: 2999,
            pictureUrl:
              "https://assets.nintendo.com/image/upload/f_auto/q_auto/c_fill,w_300/ncom/en_US/switch/system/three-modes-in-one",
            stock: 5,
          },
          {
            id: 4,
            title: "The Last Of Us 2",
            category: "jogo",
            description: "Aventura exclusiva para PlayStation.",
            price: 199,
            pictureUrl:
              "https://image.api.playstation.com/vulcan/ap/rnd/202312/0117/7f1d9478fabee95562ace660b90e89b0d87a620e1950874a.png",
            stock: 10,
          },
          {
            id: 5,
            title: "Super Mario Bros Wonder",
            category: "jogo",
            description: "Aventura clássica de Mario para o Nintendo Switch.",
            price: 249,
            pictureUrl:
              "https://assets.nintendo.com/image/upload/c_fill,w_1200/q_auto:best/f_auto/dpr_2.0/ncom/software/switch/70010000068688/1b2766c7a82e706d1465b6e138b1d96d4de7bd7cd7f52831ea149c9afb072250",
            stock: 8,
          },
          {
            id: 6,
            title: "Halo 5: Guardians",
            category: "jogo",
            description: "Jogo de tiro exclusivo para Xbox.",
            price: 179,
            pictureUrl:
              "https://assets-prd.ignimgs.com/2021/12/06/halo5-guardians-1638829716649.jpg?width=300&crop=1%3A1%2Csmart&auto=webp",
            stock: 7,
          },
        ]);
      }, 2000);
    });

    fetchItems.then((data) => {
      if (categoryId) {
        setItems(data.filter((item) => item.category === categoryId));
      } else {
        setItems(data);
      }
    });
  }, [categoryId]);

  const handleAddToCart = (item, quantity) => {
    addToCart(item, quantity);
  };

  return (
    <div className="container">
      <h2>{greeting}</h2>
      <ItemList items={items} onAdd={handleAddToCart} />
    </div>
  );
};

export default ItemListContainer;
