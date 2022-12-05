import React from 'react';
import Content from '../Content';
import Sidebar from '../Sidebar';

const Main = () => {
    return (
        <div className="flex flex-1">
            <Sidebar />
            <Content />
        </div>
    );
};

export default Main;
