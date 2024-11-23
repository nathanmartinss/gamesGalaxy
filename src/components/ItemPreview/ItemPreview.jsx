import React from "react";
import { Link } from "react-router-dom";

const ItemPreview = ({ id, title }) => {
  return (
    <div>
      <h3>{title}</h3>
      <Link to={`/item/${id}`}>Saiba Mais</Link>
    </div>
  );
};

export default ItemPreview;
