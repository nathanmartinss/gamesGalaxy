import React from "react";
import ItemListContainer from "../../components/ItemListContainer/ItemListContainer.jsx";
import ItemPreview from "../../components/ItemPreview/ItemPreview.jsx";

const HomePage = () => {
  return (
    <div className="container">
      <div className="itens-mais-vendidos">
        <ItemListContainer greeting="Mais vendidos" />
      </div>
      <h2>Saiba mais sobre os nossos produtos</h2>
      <div className="product-preview">
        <ItemPreview
          id="1"
          title="PlayStation 5"
          pictureUrl="https://gmedia.playstation.com/is/image/SIEPDC/ps5-product-thumbnail-01-en-14sep21?$facebook$"
        />
      </div>
    </div>
  );
};

export default HomePage;
