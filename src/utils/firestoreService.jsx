import { collection, getDocs, query, where } from "firebase/firestore"; // Importa funções necessárias do Firestore
import db from "../config/firebaseConfig"; // Importa a configuração do Firebase

/**
 * Função para buscar itens do Firestore, com ou sem filtro de categoria.
 * @param {string} category - Categoria para filtrar os itens (opcional).
 * @returns {Array} - Lista de itens formatados com seus dados.
 */
export const fetchItems = async (category) => {
  try {
    // Obtém a referência à coleção "itens" no Firestore
    const itemsCollection = collection(db, "itens");

    // Define a consulta. Se uma categoria for especificada, adiciona um filtro.
    let q = itemsCollection;
    if (category) {
      // Filtra os itens onde o campo "category" seja igual ao parâmetro fornecido
      q = query(itemsCollection, where("category", "==", category));
    }

    // Executa a consulta no Firestore
    const itemsSnapshot = await getDocs(q);

    // Mapeia os documentos retornados para um formato legível
    return itemsSnapshot.docs.map((doc) => ({
      id: doc.id, // Adiciona o ID do documento
      ...doc.data(), // Adiciona os dados do documento
    }));
  } catch (error) {
    // Loga o erro no console se algo der errado
    console.error("Erro ao buscar itens do Firestore:", error);
    throw error; // Repassa o erro para ser tratado pelo chamador
  }
};
