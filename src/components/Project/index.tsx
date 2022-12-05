import { faChevronLeft, faPlus } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useState } from 'react';
import ProjectList from '../ProjectList';

const Project = () => {
    const projects = [
        {
            label: 'Inbox',
            count: 2,
        },
        {
            label: 'Upcoming',
            count: 5,
        },
        {
            label: 'Upcomings',
            count: 5,
        },
        ...Array(10)
            .fill(0)
            .map((_) => ({
                label: 'test',
                count: 10,
            })),
    ];

    const [showMenuList, setShowMenuList] = useState(false);
    const [initState, setInitState] = useState(true);

    const handleMenuList = () => {
        setShowMenuList(!showMenuList);
    };

    return (
        <>
            <div className="mt-8 flex justify-between py-2.5 px-3.5 rounded-sm transition-colors duration-300 hover:cursor-pointer hover:bg-[#a8a8a833] hover:transition-colors hover:duration-300">
                <p className="font-bold text-sm text-[#00000080]">Projects</p>
                <div className="-translate-z-20 opacity-0 transition-all duration-300 delay-500 group-hover/sidebar:opacity-100 group-hover/sidebar:translate-z-0 group-hover/sidebar:duration-300">
                    <FontAwesomeIcon
                        icon={faPlus}
                        className="ml-2 text-[#00000080] hover:text-[#000000cc]"
                    />
                    <FontAwesomeIcon
                        icon={faChevronLeft}
                        className={
                            showMenuList
                                ? 'ml-2 text-[#00000080] -rotate-90 transition-all duration-500'
                                : 'ml-2 text-[#00000080] duration-500'
                        }
                        onClick={handleMenuList}
                    />
                </div>
            </div>
            {
                <div
                    className={
                        showMenuList
                            ? 'scale-y-1 duration-300 transition-all show-project-list ease-out origin-top'
                            : 'scale-y-0 duration-300 transition-all show-project-list ease-in origin-top'
                    }
                >
                    {projects.map((data, index) => {
                        return <ProjectList key={index} data={data} />;
                    })}
                </div>
            }
        </>
    );
};

export default Project;
