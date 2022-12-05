import React from 'react';
import { Background, Navbar } from '../../components/Landing';

export default function Landing() {
    return (
        <div className="p-4 flex justify-center w-full h-screen">
            <Navbar />
            <Background />
        </div>
    );
}
