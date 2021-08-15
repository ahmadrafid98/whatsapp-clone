import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyDtfVnO06I4skRpkPO7NpwKaCd5PKN6iEM",
  authDomain: "whatsapp-clone-2487c.firebaseapp.com",
  projectId: "whatsapp-clone-2487c",
  storageBucket: "whatsapp-clone-2487c.appspot.com",
  messagingSenderId: "893223769795",
  appId: "1:893223769795:web:0a724ec63f9c5ac645f476",
};

const app = !firebase.apps.length
  ? firebase.initializeApp(firebaseConfig)
  : firebase.app();

const db = app.firestore();
const authentication = app.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { db, authentication, provider };
