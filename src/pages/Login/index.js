import { faArrowRightToBracket } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";
import { redirect, useNavigate } from "react-router-dom";
import loginImg from "../../assets/login.png";
import { signIn } from "../../utils/firebaseFunc";
import "./index.css";

// RECOIL
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useRecoilState } from "recoil";
import { atomUser } from "../../atoms/user";

const Login = () => {
	// RECOIL STATE
	const [user, setUser] = useRecoilState(atomUser);
	// STATE
	const [data, setData] = useState({ email: "", password: "" });

	const navigate = useNavigate();

	const handleInput = (e) => {
		let type = e.target.name;
		let value = e.target.value;

		setData({ ...data, [type]: value });
	};

	const renderToast = (message) => {
		toast.error(message, {
			position: "top-center",
			autoClose: 5000,
			hideProgressBar: false,
			closeOnClick: false,
			pauseOnHover: false,
			draggable: false,
			progress: undefined,
			theme: "light",
		});
	};

	const handleSubmit = () => {
		signIn(data.email, data.password)
			.then((data) => {
				setUser(data);
				navigate("/dashboard");
			})
			.catch((error) => renderToast(error.code));
	};

	console.log(user);

	return (
		<div className="login-container">
			<div className="login-wrapper">
				<div className="login-image-wrapper">
					<img src={loginImg} width="300" className="login-image" alt="login" />
				</div>
				<div className="login-form-wrapper">
					<h2>To-Do</h2>
					<div className="login-form">
						<div className="input-form">
							<input
								placeholder="Email"
								name="email"
								onChange={handleInput}
								value={data.email}
							/>
						</div>
						<div className="input-form">
							<input
								type="password"
								placeholder="Password"
								name="password"
								onChange={handleInput}
								value={data.password}
							/>
						</div>
						<div>
							<button
								type="submit"
								className="login-form-button"
								onClick={handleSubmit}
							>
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
				</div>
			</div>
			<ToastContainer
				position="top-center"
				autoClose={5000}
				hideProgressBar={false}
				newestOnTop={false}
				closeOnClick={false}
				rtl={false}
				pauseOnFocusLoss={false}
				draggable={false}
				pauseOnHover={false}
				theme="light"
			/>
		</div>
	);
};

export default Login;
