import React from 'react';
import { Link } from 'react-router-dom';

const Background = () => {
    return (
        <div className="flex flex-col justify-center items-center gap-5">
            <div className="text-4xl font-bold text-center">
                Organize your <span className="block md:inline">work and life, </span>
                finally.
            </div>
            <div className="text-center text-xl">
                Become focused, organized,
                <span className="block md:inline">and calm with Todoist.</span>
            </div>
            <button className="bg-[#2596be] py-2 px-4 rounded-md text-white">
                <Link to="/auth/register">Start for free</Link>
            </button>
        </div>
    );
};

export default Background;
