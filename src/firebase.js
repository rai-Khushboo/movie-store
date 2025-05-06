import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyA7Sv_SFqztwouSs2jqc1AB6eYRTQdYDIc",
  authDomain: "disneyplus-clone-ffe87.firebaseapp.com",
  projectId: "disneyplus-clone-ffe87",
  storageBucket: "disneyplus-clone-ffe87.appspot.com", // fixed ".app" typo
  messagingSenderId: "919760352299",
  appId: "1:919760352299:web:9d233af0be195d1153e66e",
  measurementId: "G-NSXD08LHF8"
};

const app = initializeApp(firebaseConfig);

const db = getFirestore(app);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();
const storage = getStorage(app);

export { auth, provider, storage };
export default db;
