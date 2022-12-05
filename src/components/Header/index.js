import { faBars, faHouse, faPlus } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';

const Header = () => {
    let initial = 'J';

    return (
        <header className="bg-[#2596be] text-[#f0f8ff] flex py-2.5 px-5 justify-between">
            <div className="flex">
                <button className="h-6 w-6 rounded bg-transparent text-base mr-1 hover:cursor-pointer hover:bg-[#ffffff33]">
                    <FontAwesomeIcon icon={faBars} />
                </button>
                <button className="h-6 w-6 rounded bg-transparent text-base mr-1 hover:cursor-pointer hover:bg-[#ffffff33]">
                    <FontAwesomeIcon icon={faHouse} />
                </button>
                <div className="ml-1">
                    <p>Good Morning, Joshua</p>
                </div>
            </div>
            <div className="header-right">
                <button className="h-6 w-6 rounded bg-transparent text-base mr-1 hover:cursor-pointer hover:bg-[#ffffff33]">
                    <FontAwesomeIcon icon={faPlus} />
                </button>
                <button className="h-6 w-6 rounded-full text-[#2596be] bg-[#f0f8ff] hover:cursor-pointer">
                    <p>{initial}</p>
                </button>
            </div>
        </header>
    );
};

export default Header;
