import { ToastOptions } from "react-toastify";

/** FORM */
type SuccessMessage = {
	[key: string]: string;
};
type ErrorMessage = {
	[key: string]: string;
};

export const VALID_EMAIL_REGEX = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g;
export const SUCCESS_LOGIN = "SUCCESS_LOGIN";
export const SUCCESS_MESSAGE: SuccessMessage = {
	SUCCESS_LOGIN: "Login success, redirecting...",
};
export const ERR_MESSAGE: ErrorMessage = {
	INVALID_EMAIL_FORMAT: "Invalid email format!",
	"auth/wrong-password": "Wrong password!",
	"auth/user-not-found": "User not found!",
};

/** TOAST */
interface ToastType {
	[key: string]: string;
}

export const TOAST_PARAMS: ToastOptions = {
	position: "top-center",
	autoClose: 5000,
	hideProgressBar: false,
	closeOnClick: false,
	pauseOnHover: false,
	draggable: false,
	progress: undefined,
	theme: "light",
};

export const TOAST_TYPE: ToastType = {
	ERR: "error",
	SUCCESS: "success",
};

export const FORM = {
	EMAIL: "Email",
	PASSWORD: "Password",
};

export const EMAIL = "email";
export const PASSWORD = "password";
export const TEXT = "text";
export const SUBMIT = "submit";
export const PLACEHOLDER = {
	EMAIL: "Enter your email...",
	PASSWORD: "Enter your password...",
};
export const AUTOCOMPLETE = {
	EMAIL: "email",
	PASSWORD: "current-password",
};
export const LOGIN = "Login";
export const SIGN_UP = "Sign up";
export const CONTINUE_WITH_GOOGLE = "Continue with Google";
export const FORGOT_YOUR_PASSWORD = "Forgot your password?";
export const DONT_HAVE_AN_ACCOUNT = "Don't have an account?";
export const REDIRECT = {
	SUCCESS_TIME_OUT: 3000,
};
export const SIGN_UP_WITH_EMAIL = "Sign up with email";
export const ALREADY_SIGNED_UP = "Already signed up?";
export const GO_TO_LOGIN = "Go to login";