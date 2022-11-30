import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../configs/firebase";

export const signIn = (email, password) => {
	return signInWithEmailAndPassword(auth, email, password);
};
