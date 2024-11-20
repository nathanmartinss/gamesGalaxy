import React from "react";
import { Link } from "react-router-dom";

const ItemPreview = ({ id, title, pictureUrl }) => {
  return (
    <div className="card m-3" style={{ width: "18rem", margin: "10px" }}>
      <img src={pictureUrl} className="card-img-top" alt={title} />
      <div className="card-body">
        <h5 className="card-title">{title}</h5>
        <Link to={`/details/${id}`} className="btn btn-primary">
          Saiba mais
        </Link>
      </div>
    </div>
  );
};

export default ItemPreview;
