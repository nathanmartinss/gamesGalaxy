import React from "react";
import Item from "../Item/Item";
import { useCart } from "../../context/CartContext";
import "bootstrap/dist/css/bootstrap.min.css";

const ItemListContainer = ({ greeting }) => {
  const { addToCart } = useCart();
  const handleAddToCart = (item, quantity) => {
    addToCart(item, quantity);
    console.log(`Adicionado ${quantity} ${item.title} ao carrinho`);
  };
  return (
    <div className="container">
      <h2>{greeting}</h2>
      <div className="d-flex justify-content-around">
        <Item
          id={1}
          title="PlayStation 5"
          price={4999}
          pictureUrl="https://gmedia.playstation.com/is/image/SIEPDC/ps5-product-thumbnail-01-en-14sep21?$facebook$"
          stock={5}
          onAdd={handleAddToCart}
        />
        <Item
          id={2}
          title="Xbox Series X"
          price={4599}
          pictureUrl="https://cms-assets.xboxservices.com/assets/68/a0/68a0e50d-0d13-42b1-8498-e55cef8a9133.png?n=642227_Hero-Gallery-0_A2_857x676.png"
          stock={5}
          onAdd={handleAddToCart}
        />
        <Item
          id={3}
          title="Nintendo Switch"
          price={2999}
          pictureUrl="https://assets.nintendo.com/image/upload/f_auto/q_auto/c_fill,w_300/ncom/en_US/switch/system/three-modes-in-one"
          stock={5}
          onAdd={handleAddToCart}
        />
      </div>
    </div>
  );
};

export default ItemListContainer;
