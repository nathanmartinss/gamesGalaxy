import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NavBar from "./components/NavBar/NavBar.jsx";
import HomePage from "./pages/HomePage/HomePage.jsx";
import ItemDetailPage from "./pages/ItemDetailPage/ItemDetailPage.jsx";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer.jsx";
import NotFoundPage from "./pages/NotFoundPage/NotFoundPage.jsx";
import { CartProvider } from "./context/CartContext.jsx";
import "bootstrap/dist/js/bootstrap.bundle.min";

function App() {
  return (
    <CartProvider>
      <Router>
        <div className="App">
          <NavBar />
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/category/:id" element={<ItemListContainer />} />
            <Route path="/details/:id" element={<ItemDetailPage />} />
            <Route path="*" element={<NotFoundPage />} />
          </Routes>
        </div>
      </Router>
    </CartProvider>
  );
}

export default App;
