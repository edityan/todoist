import { auth } from "../configs/firebase";
import { signInWithEmailAndPassword } from "firebase/auth";

export const signIn = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password)
}