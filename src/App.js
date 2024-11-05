import React from "react";
import NavBar from "./components/NavBar/NavBar.js";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer.js";
import { CartProvider } from "./context/CartContext";
import "bootstrap/dist/js/bootstrap.bundle.min";
import "./components/ItemListContainer/ItemListContainer.css";

function App() {
  return (
    <CartProvider>
      <div className="App">
        <NavBar />
        <div className="itens-mais-vendidos">
          <ItemListContainer greeting="MAIS VENDIDOS!" />
        </div>
      </div>
    </CartProvider>
  );
}

export default App;
