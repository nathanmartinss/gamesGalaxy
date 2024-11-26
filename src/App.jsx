import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NavBar from "./components/NavBar/NavBar.jsx";
import HomePage from "./pages/HomePage/HomePage.jsx";
import ItemDetailContainer from "./components/ItemDetailContainer/ItemDetailContainer.jsx";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer.jsx";
import CartPage from "./pages/CartPage/CartPage.jsx";
import NotFoundPage from "./pages/NotFoundPage/NotFoundPage.jsx";
import { CartProvider } from "./context/CartContext.jsx";
import ItemDetailPage from "./pages/ItemDetailPage/ItemDetailPage.jsx";
import LoginPage from "./pages/LoginPage/LoginPage.jsx";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <CartProvider>
      <Router>
        {/* Navbar fica fixa em todas as rotas */}
        <NavBar />

        <Routes>
          {/* Página inicial */}
          <Route path="/" element={<HomePage />} />

          {/* Lista de itens filtrados por categoria */}
          <Route path="/category/:id" element={<ItemListContainer />} />

          {/* Página de detalhes de um item específico com busca por ID */}
          <Route path="/item/:id" element={<ItemDetailContainer />} />

          {/* Página de detalhes de um item específico com busca por ID */}
          <Route path="/details/:id" element={<ItemDetailPage />} />

          {/* Página do carrinho */}
          <Route path="/cart" element={<CartPage />} />

          {/* Página de Login */}
          <Route path="/login" element={<LoginPage />} />

          {/* Página 404 para rotas inexistentes */}
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </Router>
    </CartProvider>
  );
}

export default App;
