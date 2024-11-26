import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth, GoogleAuthProvider } from "firebase/auth";

// Configurações do Firebase para o projeto atual
const firebaseConfig = {
  apiKey: "AIzaSyARW6S1nlP8Ay57EosXUf0JgbnkTZqKX7s", // Chave de API para autenticar solicitações ao Firebase
  authDomain: "games-galaxy-a6813.firebaseapp.com", // Domínio de autenticação do Firebase
  projectId: "games-galaxy-a6813", // ID do projeto no Firebase
  storageBucket: "games-galaxy-a6813.appspot.com", // O storage bucket correto deve terminar com `appspot.com`
  messagingSenderId: "577080096204", // ID do remetente para mensagens do Firebase
  appId: "1:577080096204:web:1e904c95e6f563dff4d969", // ID exclusivo do aplicativo
};

// Inicializa o Firebase
const app = initializeApp(firebaseConfig);

// Inicializa o Firestore e a Autenticação
const db = getFirestore(app);
const auth = getAuth(app);
const googleProvider = new GoogleAuthProvider();

export { db, auth, googleProvider };
