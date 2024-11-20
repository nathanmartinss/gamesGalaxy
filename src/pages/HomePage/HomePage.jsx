import React from "react";
import ItemListContainer from "../../components/ItemListContainer/ItemListContainer.jsx";
import ItemPreview from "../../components/ItemPreview/ItemPreview.jsx";
import "./HomePage.css";

const HomePage = () => {
  return (
    <div className="container">
      <div className="itens-mais-vendidos">
        <div className="texto-homepage">
          <h2>Itens mais vendidos</h2>
        </div>
        <ItemListContainer />
      </div>
      <div className="saiba-mais">
        <div className="texto-homepage">
          <h2>Saiba mais sobre os nossos produtos</h2>
        </div>
        <div className="product-preview">
          <ItemPreview
            id="1"
            title="PlayStation 5"
            pictureUrl="https://gmedia.playstation.com/is/image/SIEPDC/ps5-product-thumbnail-01-en-14sep21?$facebook$"
          />
        </div>
      </div>
    </div>
  );
};

export default HomePage;
