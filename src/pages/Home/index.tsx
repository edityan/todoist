import React from 'react';
import { Header, Main } from '../../components/Home';

const Home = () => {
    return (
        <div style={{ height: '100vh', display: 'flex', flexDirection: 'column' }}>
            <Header />
            <Main />
        </div>
    );
};

export default Home;
