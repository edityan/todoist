import {
    faArrowRightToBracket,
    faBars,
    faCalendarCheck,
    faClose,
    faPenToSquare,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    const [isOpen, setIsOpen] = React.useState(false);

    return (
        <header className="md:mx-auto header bg-white shadow fixed top-0 right-0 left-0 z-[1030] flex items-center transition duration-400">
            <div className="w-full mx-auto">
                <nav className="max-h-screen top-0 left-0 relative bg-transparent z-[9999]">
                    <div className="justify-between px-4 mx-auto lg:max-w-7xl md:items-center md:flex md:px-4 gap-4">
                        <div className="flex items-center justify-between py-3 md:py-5 md:block">
                            <div className="flex flex-row gap-2 items-center text-3xl rounded-full font-black cursor-pointer">
                                <FontAwesomeIcon
                                    icon={faCalendarCheck}
                                    className="text-[#2596be]"
                                />
                            </div>
                            <div className="md:hidden">
                                <button
                                    className="p-2 text-gray-700 rounded-md outline-none focus:border-gray-400 focus:border"
                                    onClick={() => setIsOpen(!isOpen)}
                                >
                                    {isOpen ? (
                                        <FontAwesomeIcon
                                            icon={faClose}
                                            className="text-[#2596be] text-3xl"
                                        />
                                    ) : (
                                        <FontAwesomeIcon
                                            icon={faBars}
                                            className="text-[#2596be] text-3xl"
                                        />
                                    )}
                                </button>
                            </div>
                        </div>
                        <div
                            className={`relative flex justify-center items-center p-8 md:p-0 md:block md:pb-0 md:mt-0 ${
                                isOpen ? 'block' : 'hidden'
                            }`}
                        >
                            <ul className="flex flex-col md:flex-row gap-2 w-full">
                                <li className="text-slate-500 w-full">
                                    <Link to="/auth/login">
                                        <button className="px-4 py-2 bg-[#2596be] w-full text-white rounded-md">
                                            <div className="flex flex-row gap-4 justify-center items-center">
                                                <FontAwesomeIcon
                                                    icon={faArrowRightToBracket}
                                                    className="text-white text-lg"
                                                />
                                                <div>Login</div>
                                            </div>
                                        </button>
                                    </Link>
                                </li>
                                <li className="text-slate-500 w-full">
                                    <Link to="/auth/register">
                                        <button className="px-4 py-2 bg-[#2596be] w-full text-white rounded-md">
                                            <div className="flex flex-row gap-4 justify-center items-center">
                                                <FontAwesomeIcon
                                                    icon={faPenToSquare}
                                                    className="text-white text-lg"
                                                />
                                                <div>Register</div>
                                            </div>
                                        </button>
                                    </Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                </nav>
            </div>
        </header>
    );
};

export default Navbar;
