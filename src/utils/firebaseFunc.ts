import type { UserCredential } from "firebase/auth";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../configs/firebase";

export const signIn = (
	email: string,
	password: string
): Promise<UserCredential> => {
	return signInWithEmailAndPassword(auth, email, password);
};
