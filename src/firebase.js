import firebase from "firebase";
const firebaseConfig = {
  apiKey: "AIzaSyB-gendiaMkPiK9o9z8A12FnE-zPQLMp5o",
  authDomain: "discord-clone-df7ef.firebaseapp.com",
  projectId: "discord-clone-df7ef",
  storageBucket: "discord-clone-df7ef.appspot.com",
  messagingSenderId: "832038152101",
  appId: "1:832038152101:web:8f81da8804b217576faa4c",
  measurementId: "G-D9PJFGQLTF",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider };
export default db;
