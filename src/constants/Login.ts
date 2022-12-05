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
