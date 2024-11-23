import {
  collection,
  getDocs,
  query,
  where,
  doc,
  getDoc,
} from "firebase/firestore"; // Importa funções do Firestore
import db from "../config/firebaseConfig"; // Configuração do Firebase

/**
 * Função para buscar itens do Firestore com suporte a filtragem por categoria.
 * @param {string} [category] - Categoria para filtrar os itens (opcional).
 * @returns {Promise<Array>} - Lista de itens no formato { id, ...dados }.
 */
export const fetchItems = async (category) => {
  try {
    // Referência à coleção "itens" no Firestore
    const itemsCollection = collection(db, "itens");

    // Configura a consulta
    let firestoreQuery = itemsCollection;
    if (category && typeof category === "string") {
      // Adiciona filtro de categoria se fornecido
      firestoreQuery = query(
        itemsCollection,
        where("category", "==", category)
      );
    }

    // Executa a consulta e obtém os documentos correspondentes
    const itemsSnapshot = await getDocs(firestoreQuery);

    // Mapeia os documentos retornados para um formato utilizável
    const items = itemsSnapshot.docs.map((doc) => ({
      id: doc.id, // ID único do documento
      ...doc.data(), // Dados do documento
    }));

    // Retorna a lista de itens
    return items;
  } catch (error) {
    // Loga e propaga o erro se algo der errado
    console.error("Erro ao buscar itens do Firestore:", error);
    throw new Error("Erro ao buscar itens. Tente novamente mais tarde.");
  }
};

/**
 * Função para buscar um único item pelo ID no Firestore.
 * @param {string} id - ID do item no Firestore.
 * @returns {Promise<Object>} - Dados do item no formato { id, ...dados }.
 */
export const fetchItemById = async (id) => {
  try {
    // Referência ao documento específico na coleção "itens"
    const itemDoc = doc(db, "itens", id);

    // Busca o documento pelo ID
    const itemSnapshot = await getDoc(itemDoc);

    // Verifica se o documento existe
    if (itemSnapshot.exists()) {
      return { id: itemSnapshot.id, ...itemSnapshot.data() };
    } else {
      throw new Error("Item não encontrado");
    }
  } catch (error) {
    // Loga e propaga o erro se algo der errado
    console.error("Erro ao buscar item por ID:", error);
    throw new Error("Erro ao buscar item. Tente novamente mais tarde.");
  }
};
