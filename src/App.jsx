import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import NavBar from "./components/NavBar/NavBar.jsx";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer.jsx";
import ItemDetailPage from "./components/ItemDetailPage/ItemDetailPage";
import ItemPreview from "./components/ItemPreview/ItemPreview.jsx";
import { CartProvider } from "./context/CartContext.jsx";
import "bootstrap/dist/js/bootstrap.bundle.min";
import "./components/ItemListContainer/ItemListContainer.css";

function App() {
  return (
    <CartProvider>
      <Router>
        <div className="App">
          <NavBar />
          <Routes>
            <Route
              path="/"
              element={
                <div className="itens-mais-vendidos">
                  <ItemListContainer greeting="Mais vendidos" />

                  <h2>Saiba mais sobre os nossos produtos</h2>
                  <ItemPreview
                    id="1"
                    title="PlayStation 5"
                    pictureUrl="https://gmedia.playstation.com/is/image/SIEPDC/ps5-product-thumbnail-01-en-14sep21?$facebook$"
                  />
                </div>
              }
            />
            <Route path="/details/:id" element={<ItemDetailPage />} />{" "}
          </Routes>
        </div>
      </Router>
    </CartProvider>
  );
}

export default App;
