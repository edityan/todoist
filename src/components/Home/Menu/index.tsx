import { faCalendarDays, faInbox } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useState } from 'react';

const Menu = () => {
    const menus = [
        {
            label: 'Inbox',
            icon: faInbox,
            color: '#77DD77',
            count: 2,
        },
        {
            label: 'Upcoming',
            icon: faCalendarDays,
            color: '#FAC898',
            count: 5,
        },
    ];

    const [selected, setSelected] = useState(0);

    const handleClick = (index: number) => {
        setSelected(index);
    };

    return (
        <>
            {menus.map((data, index) => {
                const { label, icon, color, count } = data;
                let active = selected === index;

                return (
                    <div
                        key={index}
                        className={
                            !active
                                ? 'flex items-center justify-between py-2.5 px-5 rounded-sm transition-colors duration-300 hover:cursor-pointer hover:bg-[#a8a8a833] hover:transition-colors hover:duration-300'
                                : 'py-2.5 px-5 rounded-sm bg-[#a8a8a833] flex items-center justify-between cursor-pointer'
                        }
                        onClick={() => handleClick(index)}
                    >
                        <div className="flex items-center">
                            <FontAwesomeIcon
                                icon={icon}
                                style={{ color: `${color}`, marginRight: '10px' }}
                            />
                            <p className="text-xs">{label}</p>
                        </div>
                        <p className="text-xs">{count}</p>
                    </div>
                );
            })}
        </>
    );
};

export default Menu;
