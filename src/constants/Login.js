/** FORM */
export const VALID_EMAIL_REGEX = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g;
export const SUCCESS_LOGIN = "SUCCESS_LOGIN";
export const SUCCESS_MESSAGE = {
	SUCCESS_LOGIN: "Login success!",
};
export const ERR_MESSAGE = {
	INVALID_EMAIL_FORMAT: "Invalid email format!",
	"auth/wrong-password": "Wrong password!",
	"auth/user-not-found": "User not found!",
};

/** TOAST */
export const TOAST_PARAMS = {
	position: "top-center",
	autoClose: 5000,
	hideProgressBar: false,
	closeOnClick: false,
	pauseOnHover: false,
	draggable: false,
	progress: undefined,
	theme: "light",
};

export const TOAST_TYPE = {
	ERR: "error",
	SUCCESS: "success",
};
