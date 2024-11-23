import React from "react";
import ItemListContainer from "../../components/ItemListContainer/ItemListContainer.jsx";
import { Link } from "react-router-dom";
import "./HomePage.css";

const HomePage = () => {
  return (
    <div className="container">
      {/* Carrossel de produtos com informações e botão para navegar para os detalhes */}
      <div
        id="carouselSaibaMais"
        className="carousel slide mb-5"
        data-bs-ride="carousel"
      >
        <div className="carousel-inner">
          {/* Slide para PlayStation 5 */}
          <div className="carousel-item active">
            {/* Imagem e informações do PlayStation 5 */}
            <div className="d-flex justify-content-center align-items-center">
              <img
                src="https://gmedia.playstation.com/is/image/SIEPDC/ps5-product-thumbnail-01-en-14sep21?$facebook$"
                className="d-block w-50"
                alt="PlayStation 5"
              />
            </div>
            <div className="carousel-caption">
              <h5>PlayStation 5</h5>
              <p>O console de próxima geração da Sony.</p>
              {/* Link para a página de detalhes do PlayStation 5 */}
              <Link
                to="/details/MXQ3ydiMmtrepJaG0n60"
                className="btn btn-primary"
              >
                Saiba Mais
              </Link>
            </div>
          </div>

          {/* Slide para Xbox Series X */}
          <div className="carousel-item">
            {/* Imagem e informações do Xbox Series X */}
            <div className="d-flex justify-content-center align-items-center">
              <img
                src="https://cms-assets.xboxservices.com/assets/68/a0/68a0e50d-0d13-42b1-8498-e55cef8a9133.png?n=642227_Hero-Gallery-0_A2_857x676.png"
                className="d-block w-50"
                alt="Xbox Series X"
              />
            </div>
            <div className="carousel-caption">
              <h5>Xbox Series X</h5>
              <p>O console mais poderoso da Microsoft.</p>
              {/* Link para a página de detalhes do Xbox Series X */}
              <Link
                to="/details/l1331MqfLJ5ZTCooAk0n"
                className="btn btn-primary"
              >
                Saiba Mais
              </Link>
            </div>
          </div>

          {/* Slide para Nintendo Switch */}
          <div className="carousel-item">
            {/* Imagem e informações do Nintendo Switch */}
            <div className="d-flex justify-content-center align-items-center">
              <img
                src="https://assets.nintendo.com/image/upload/f_auto/q_auto/c_fill,w_300/ncom/en_US/switch/system/three-modes-in-one"
                className="d-block w-50"
                alt="Nintendo Switch"
              />
            </div>
            <div className="carousel-caption">
              <h5>Nintendo Switch</h5>
              <p>A versatilidade de um console híbrido.</p>
              {/* Link para a página de detalhes do Nintendo Switch */}
              <Link
                to="/details/TWeD2dwKwOZtRxyto1pi"
                className="btn btn-primary"
              >
                Saiba Mais
              </Link>
            </div>
          </div>
        </div>

        {/* Botões de controle do carrossel */}
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselSaibaMais"
          data-bs-slide="prev"
        >
          <span
            className="carousel-control-prev-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Anterior</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselSaibaMais"
          data-bs-slide="next"
        >
          <span
            className="carousel-control-next-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Próximo</span>
        </button>
      </div>

      {/* Sessão de itens mais vendidos */}
      <div className="itens-mais-vendidos">
        <div className="texto-homepage">
          <h2>Itens mais vendidos</h2>
        </div>
        {/* Lista de itens mais vendidos */}
        <ItemListContainer />
      </div>
    </div>
  );
};

export default HomePage;
