import React from "react";
import Item from "../Item/Item";

const ItemList = ({ items, onAdd }) => {
  return (
    <div className="d-flex justify-content-around flex-wrap">
      {items.map((item) => (
        <Item
          key={item.id}
          id={item.id}
          title={item.title}
          description={item.description}
          price={item.price}
          pictureUrl={item.pictureUrl}
          stock={item.stock}
          onAdd={(quantity) => onAdd(item, quantity)}
        />
      ))}
    </div>
  );
};

export default ItemList;
