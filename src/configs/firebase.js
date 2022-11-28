import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDDhjdL4wm6vSPLV9uk-yFF0ONyiw9rHEI",
  authDomain: "todoist-70f80.firebaseapp.com",
  projectId: "todoist-70f80",
  storageBucket: "todoist-70f80.appspot.com",
  messagingSenderId: "781489703085",
  appId: "1:781489703085:web:b7750a4ca01b3818349e24"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app)

export {auth}