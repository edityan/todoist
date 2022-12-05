import React from 'react';
import Menu from '../Menu';
import Project from '../Project';

const Sidebar = () => {
    return (
        <div className="p-5 w-72 group/sidebar">
            <Menu />
            <Project />
        </div>
    );
};

export default Sidebar;
