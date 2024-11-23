import React, { useState, useEffect } from "react"; // Importa React, useState e useEffect
import { useParams } from "react-router-dom"; // Importa useParams para capturar parâmetros da URL
import ItemList from "../Item/ItemList.jsx"; // Importa o componente ItemList
import { useCart } from "../../context/CartContext"; // Importa o contexto do carrinho
import { fetchItems } from "../../utils/firestoreService.jsx"; // Importa a função fetchItems para buscar itens do Firebase
import "bootstrap/dist/css/bootstrap.min.css"; // Importa os estilos do Bootstrap

// Componente que renderiza uma lista de itens com base na categoria
const ItemListContainer = ({ greeting }) => {
  // Estado para armazenar os itens a serem exibidos
  const [items, setItems] = useState([]);
  // Captura o ID da categoria a partir dos parâmetros da URL
  const { id: categoryId } = useParams();
  // Obtém a função addItem do contexto do carrinho
  const { addItem } = useCart();

  // useEffect que executa a busca dos itens no Firebase quando a categoria muda
  useEffect(() => {
    const getItems = async () => {
      try {
        // Busca itens do Firestore, filtrando pela categoria se necessário
        const itemsFromFirestore = await fetchItems(categoryId);
        setItems(itemsFromFirestore); // Atualiza o estado com os itens recebidos
      } catch (error) {
        console.error("Erro ao carregar itens:", error); // Exibe erros no console
      }
    };

    getItems(); // Chama a função para buscar itens
  }, [categoryId]); // Dependência: será executado novamente quando categoryId mudar

  // Função para adicionar itens ao carrinho
  const handleAddToCart = (item, quantity) => {
    addItem(item, quantity); // Usa o contexto do carrinho para adicionar o item
  };

  // Renderiza o conteúdo do componente
  return (
    <div className="container">
      {/* Verifica se há itens para exibir */}
      {items.length > 0 ? (
        // Renderiza a lista de itens, passando a função handleAddToCart
        <ItemList items={items} onAdd={handleAddToCart} />
      ) : (
        // Exibe uma mensagem enquanto os itens estão sendo carregados
        <p>Carregando itens...</p>
      )}
    </div>
  );
};

export default ItemListContainer; // Exporta o componente para uso em outros arquivos
