import { initializeApp } from "firebase/app"; // Importa a função para inicializar o Firebase
import { getFirestore } from "firebase/firestore"; // Importa a função para configurar o Firestore

// Configurações do Firebase para o projeto atual
const firebaseConfig = {
  apiKey: "AIzaSyARW6S1nlP8Ay57EosXUf0JgbnkTZqKX7s", // Chave de API para autenticar solicitações ao Firebase
  authDomain: "games-galaxy-a6813.firebaseapp.com", // Domínio de autenticação do Firebase
  projectId: "games-galaxy-a6813", // ID do projeto no Firebase
  storageBucket: "games-galaxy-a6813.firebasestorage.app", // Bucket de armazenamento para arquivos
  messagingSenderId: "577080096204", // ID do remetente para mensagens do Firebase
  appId: "1:577080096204:web:1e904c95e6f563dff4d969", // ID exclusivo do aplicativo
};

// Inicializa o aplicativo Firebase com as configurações fornecidas
const app = initializeApp(firebaseConfig);

// Configura o Firestore como banco de dados do projeto
const db = getFirestore(app);

// Exporta a instância do Firestore para ser usada em outras partes do projeto
export default db;
