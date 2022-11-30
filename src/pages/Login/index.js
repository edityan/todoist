import { faArrowRightToBracket } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { redirect, useNavigate } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import loginImg from "../../assets/login.png";
import {
	ERR_MESSAGE,
	SUCCESS_MESSAGE,
	TOAST_PARAMS,
	TOAST_TYPE,
	VALID_EMAIL_REGEX,
} from "../../constants/Login";
import { signIn } from "../../utils/firebaseFunc";
import "./index.css";

// RECOIL
import "react-toastify/dist/ReactToastify.css";
import { useRecoilState, useRecoilValue } from "recoil";
import { atomLoginInput, atomUser, emailInput } from "../../atoms/user";

const Login = () => {
	// RECOIL STATE
	const [user, setUser] = useRecoilState(atomUser);
	const [loginInput, setLoginInput] = useRecoilState(atomLoginInput);

	const navigate = useNavigate();

	const handleInput = (e) => {
		let type = e.target.name;
		let value = e.target.value;
		setLoginInput({ ...loginInput, [type]: value });
	};

	const renderToast = (type, message) => {
		switch (type) {
			case TOAST_TYPE.ERR:
				toast.error(message, TOAST_PARAMS);
				break;
			case TOAST_TYPE.SUCCESS:
				toast.success(message, TOAST_PARAMS);
				break;
			default:
				break;
		}
	};

	const handleSubmit = (e) => {
		e.preventDefault();

		if (loginInput.email.match(VALID_EMAIL_REGEX)) {
			signIn(loginInput.email, loginInput.password)
				.then((data) => {
					setUser(data);
					renderToast(TOAST_TYPE.SUCCESS, SUCCESS_MESSAGE.SUCCESS_LOGIN);
					setTimeout(() => {
						navigate("/dashboard");
					}, 3000);
				})
				.catch((error) => renderToast(TOAST_TYPE.ERR, ERR_MESSAGE[error.code]));
		} else {
			renderToast(TOAST_TYPE.ERR, ERR_MESSAGE.INVALID_EMAIL_FORMAT);
		}
	};

	return (
		<>
			<div className="login-container">
				<div className="login-wrapper">
					<div className="login-image-wrapper">
						<img
							src={loginImg}
							width="300"
							className="login-image"
							alt="login"
						/>
					</div>
					<div className="login-form-wrapper">
						<h2>To-Do</h2>
						<form onSubmit={handleSubmit}>
							<div className="login-form">
								<div className="input-form">
									<input
										type="email"
										placeholder="Email"
										name="email"
										onChange={handleInput}
										value={loginInput.email}
										required
									/>
								</div>
								<div className="input-form">
									<input
										type="password"
										placeholder="Password"
										name="password"
										onChange={handleInput}
										value={loginInput.password}
										required
									/>
								</div>
								<div>
									<button type="submit" className="login-form-button">
										<div className="mx-3 flex flex-row gap-4 justify-between items-center">
											<div>Login</div>
											<FontAwesomeIcon
												icon={faArrowRightToBracket}
												className="text-white text-lg"
											/>
										</div>
									</button>
								</div>
							</div>
						</form>
					</div>
				</div>
			</div>
			<ToastContainer
				position="top-center"
				autoClose={2000}
				hideProgressBar={false}
				newestOnTop={false}
				closeOnClick={false}
				rtl={false}
				pauseOnFocusLoss={false}
				draggable={false}
				pauseOnHover={false}
				theme="light"
			/>
		</>
	);
};

export default Login;
