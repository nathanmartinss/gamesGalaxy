import React from "react";
import NavBar from "./components/NavBar/NavBar.jsx";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer.jsx";
import ItemDetailContainer from "./components/ItemDetailContainer/ItemDetailContainer.jsx";
import { CartProvider } from "./context/CartContext.jsx";
import "bootstrap/dist/js/bootstrap.bundle.min";
import "./components/ItemListContainer/ItemListContainer.css";
import "../src/components/ItemDetailContainer/ItemDetail.css";

function App() {
  return (
    <CartProvider>
      <div className="App">
        <NavBar />
        <div className="itens-mais-vendidos">
          <ItemListContainer greeting="Mais vendidos" />

          <div className="itens-mais-vendidos">
            {" "}
            <ItemDetailContainer selectedItemId={1} />
          </div>
        </div>
      </div>
    </CartProvider>
  );
}

export default App;
