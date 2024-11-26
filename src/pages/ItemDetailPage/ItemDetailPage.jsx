import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { useCart } from "../../context/CartContext";
import ItemCount from "../../components/ItemCount/ItemCount";
import { doc, getDoc } from "firebase/firestore";
import { db } from "../../config/firebaseConfig";

// Função assíncrona para buscar um item no Firestore pelo ID
const fetchItemById = async (id) => {
  try {
    const itemDoc = doc(db, "itens", id); // Cria a referência ao documento do item
    const itemSnapshot = await getDoc(itemDoc); // Busca o documento no Firestore

    if (itemSnapshot.exists()) {
      // Se o documento existir, retorna os dados do item com o ID
      return { id: itemSnapshot.id, ...itemSnapshot.data() };
    } else {
      // Lança um erro caso o item não seja encontrado
      throw new Error("Item não encontrado");
    }
  } catch (error) {
    console.error("Erro ao buscar item por ID:", error); // Loga o erro no console
    throw error; // Repassa o erro para ser tratado pelo chamador
  }
};

// Componente para exibir a página de detalhes de um item
const ItemDetailPage = () => {
  const { id } = useParams(); // Obtém o ID do item a partir da URL
  const { addItem, getItemQuantity } = useCart(); // Funções do contexto do carrinho
  const [item, setItem] = useState(null); // Estado para armazenar os dados do item
  const [loading, setLoading] = useState(true); // Estado de carregamento
  const [error, setError] = useState(null); // Estado de erro

  // Efeito para buscar os dados do item ao carregar o componente ou mudar o ID
  useEffect(() => {
    const getItem = async () => {
      setLoading(true); // Define estado de carregamento como verdadeiro
      try {
        const fetchedItem = await fetchItemById(id); // Busca o item pelo ID
        setItem(fetchedItem); // Define os dados do item no estado
      } catch (err) {
        setError("Erro ao carregar o item. Tente novamente mais tarde."); // Define a mensagem de erro
      } finally {
        setLoading(false); // Define estado de carregamento como falso
      }
    };

    getItem();
  }, [id]); // Dependência: executa o efeito novamente se o ID mudar

  // Exibe uma mensagem de carregamento enquanto os dados estão sendo buscados
  if (loading) return <p>Carregando...</p>;

  // Exibe uma mensagem de erro, se houver
  if (error) return <p className="text-danger">{error}</p>;

  // Exibe uma mensagem caso o item não seja encontrado
  if (!item) return <p>Item não encontrado.</p>;

  // Obtém a quantidade atual do item no carrinho
  const currentQuantity = getItemQuantity(item.id);

  // Calcula o estoque disponível com base no estoque total e na quantidade no carrinho
  const availableStock = item.stock - currentQuantity;

  // Função para adicionar itens ao carrinho
  const handleAddToCart = (quantity) => {
    addItem(item, quantity); // Adiciona o item ao carrinho
    alert(
      `Você adicionou ${quantity} unidade(s) de "${item.title}" ao carrinho.`
    ); // Alerta ao usuário
  };

  // Retorna o layout da página de detalhes do item
  return (
    <div
      className="container"
      style={{ display: "flex", justifyContent: "center", marginTop: "20px" }}
    >
      <div className="card" style={{ width: "30rem" }}>
        {/* Imagem do item */}
        <img src={item.pictureUrl} className="card-img-top" alt={item.title} />

        {/* Detalhes do item */}
        <div className="card-body">
          <h5 className="card-title">{item.title}</h5>
          <p className="card-text">{item.description}</p>
          <p className="card-text">Preço: R$ {item.price}</p>

          {/* Componente ItemCount para selecionar quantidade */}
          <ItemCount
            stock={availableStock} // Estoque disponível
            initial={1} // Quantidade inicial
            onAdd={handleAddToCart} // Função para adicionar ao carrinho
          />
        </div>
      </div>
    </div>
  );
};

export default ItemDetailPage;
