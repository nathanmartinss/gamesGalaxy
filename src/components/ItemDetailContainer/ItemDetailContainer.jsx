import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import ItemDetail from "./ItemDetail";
import { fetchItemById } from "../../utils/firestoreService"; // Centralize esta função no firestoreService.js
import "bootstrap/dist/css/bootstrap.min.css";

/**
 * Componente ItemDetailContainer
 * Responsável por buscar e exibir os detalhes de um item específico.
 */
const ItemDetailContainer = () => {
  const { id } = useParams(); // Obtém o ID do item a partir da URL
  const [item, setItem] = useState(null); // Estado para armazenar os dados do item
  const [loading, setLoading] = useState(true); // Estado de carregamento
  const [error, setError] = useState(null); // Estado de erro

  useEffect(() => {
    if (!id) {
      setError("ID inválido ou ausente.");
      setLoading(false);
      return;
    }

    const getItem = async () => {
      setLoading(true);
      try {
        const data = await fetchItemById(id); // Busca o item pelo ID
        setItem(data); // Atualiza o estado com os dados do item
      } catch (err) {
        setError("Erro ao carregar o item. Tente novamente mais tarde."); // Define uma mensagem de erro
      } finally {
        setLoading(false); // Finaliza o estado de carregamento
      }
    };

    getItem();
  }, [id]); // Reexecuta o efeito quando o ID muda

  return (
    <div className="container">
      {loading && <p>Carregando...</p>} {/* Exibe mensagem de carregamento */}
      {error && <p className="text-danger">{error}</p>}{" "}
      {/* Exibe mensagem de erro */}
      {item && <ItemDetail {...item} />}{" "}
      {/* Renderiza o componente de detalhes */}
    </div>
  );
};

export default ItemDetailContainer;
