import { faCalendarCheck } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { toast, ToastContainer } from 'react-toastify';
import { AppleIcon, FacebookIcon, GoogleIcon, LoginImage, RevealPasswordIcon } from '../../assets';
import { Divider, FormInput, ThirdPartyLogin } from '../../components/Shared';
import {
    ERR_MESSAGE,
    SUCCESS_MESSAGE,
    TOAST_PARAMS,
    TOAST_TYPE,
    VALID_EMAIL_REGEX,
} from '../../constants/Login';
import { signIn } from '../../utils/firebaseFunc';

// RECOIL
import 'react-toastify/dist/ReactToastify.css';
import { useRecoilState } from 'recoil';
import { atomLoginInput, atomUser } from '../../atoms/user';

const SignUp = () => {
    const navigate = useNavigate();

    const [user, setUser] = useRecoilState(atomUser);
    const [loginInput, setLoginInput] = useRecoilState(atomLoginInput);
    const [isShowPassword, setIsShowPassword] = React.useState(false);

    const handleIsShowPassword = () => {
        setIsShowPassword((prevIsShowPassowrd) => !prevIsShowPassowrd);
    };

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const type = e.target.name;
        const value = e.target.value;
        setLoginInput((prevLoginInput) => ({ ...prevLoginInput, [type]: value }));
    };

    const renderToast = (type: string, message: string) => {
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

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();

        if (loginInput.email.match(VALID_EMAIL_REGEX)) {
            signIn(loginInput.email, loginInput.password)
                .then((data) => {
                    setUser(data);
                    renderToast(TOAST_TYPE.SUCCESS, SUCCESS_MESSAGE.SUCCESS_LOGIN);
                    setTimeout(() => {
                        navigate('/dashboard');
                    }, 3000);
                })
                .catch((error) => renderToast(TOAST_TYPE.ERR, ERR_MESSAGE[error.code]));
        } else {
            renderToast(TOAST_TYPE.ERR, ERR_MESSAGE.INVALID_EMAIL_FORMAT);
        }
    };

    return (
        <div className="p-6 overflow-auto max-w-7xl w-full h-full m-auto flex flex-col md:flex-row justify-center">
            <div className="w-full">
                <div className="text-3xl pb-28">
                    <Link to="/">
                        <FontAwesomeIcon icon={faCalendarCheck} className="text-[#2596be]" />
                    </Link>
                </div>
                <div className="grid gap-4">
                    <div className="font-bold text-4xl">Login</div>
                    <div className="flex flex-col items-start justify-center mt-5 gap-3">
                        <ThirdPartyLogin icon={<GoogleIcon />} title="Continue with Google" />
                        <ThirdPartyLogin icon={<FacebookIcon />} title="Continue with Facebook" />
                        <ThirdPartyLogin icon={<AppleIcon />} title="Continue with Apple" />
                    </div>
                    <Divider />
                    <FormInput title="Email">
                        <input
                            type="email"
                            name="email"
                            className="w-full p-0 h-6 font-extralight outline-none"
                            placeholder="Enter your email..."
                            autoComplete="email"
                            onChange={handleInputChange}
                            value={loginInput.email}
                            required
                        />
                    </FormInput>
                    <FormInput title="Password">
                        <input
                            type={isShowPassword ? 'text' : 'password'}
                            name="password"
                            className="w-full p-0 h-6 font-extralight outline-none border-none"
                            placeholder="Enter your password..."
                            autoComplete="current-password"
                            onChange={handleInputChange}
                            value={loginInput.password}
                            required
                        />
                        <button
                            type="submit"
                            className="mx-0 my-1 rounded-[3px] cursor-pointer"
                            onClick={handleIsShowPassword}
                        >
                            <RevealPasswordIcon isShowPassword={isShowPassword} />
                        </button>
                    </FormInput>
                    <button
                        className="rounded-lg w-full bg-[#2596be] p-3 text-xl font-bold text-white"
                        onClick={handleSubmit}
                    >
                        Login
                    </button>
                    <div className="text-sm opacity-[0.88] font-normal">
                        <span className="underline cursor-pointer">Forgot your password?</span>
                    </div>
                    <Divider />
                    <div className="text-sm text-center opacity-[0.88] font-normal">
                        Don&apos;t have an account?&nbsp;
                        <span className="underline cursor-pointer">
                            <Link to="/auth/register">Sign up</Link>
                        </span>
                    </div>
                </div>
            </div>
            <div className="min-w-[30%] max-w-full pt-20 md:pt-28">
                <div className="hidden md:block md:w-full md:m-auto">
                    <img
                        src={LoginImage}
                        alt="login"
                        className="w-full m-auto block object-cover object-bottom"
                    />
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
        </div>
    );
};

export default SignUp;
