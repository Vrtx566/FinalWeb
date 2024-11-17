import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const NavBar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const navigate = useNavigate();

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    const handleDonateClick = () => {
        navigate('/secret-entrance');
    };

    return (
        <header className="flex justify-between items-center p-4 bg-[#00aeef] text-white w-full">
            <div className="text-2xl font-bold">UNICEF</div>

            <nav className="hidden md:flex space-x-4 items-center">
                <a href="#about" className="hover:text-gray-300">About</a>
                <a href="#projects" className="hover:text-gray-300">Projects</a>
                <a href="#news" className="hover:text-gray-300">News</a>
                <a href="#contact" className="hover:text-gray-300">Contact</a>
                <button onClick={handleDonateClick} className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded ml-4">
                    Donar Ahora
                </button>
            </nav>
            <button className="md:hidden" onClick={toggleMenu}>
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path>
                </svg>
            </button>
            {isMenuOpen && (
                <div className="md:hidden absolute top-16 left-0 w-full bg-blue-700 text-white flex flex-col items-center space-y-4 py-4">
                    <a href="#about" className="hover:text-gray-300">About</a>
                    <a href="#projects" className="hover:text-gray-300">Projects</a>
                    <a href="#news" className="hover:text-gray-300">News</a>
                    <a href="#contact" className="hover:text-gray-300">Contact</a>
                    <button onClick={handleDonateClick} className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded">
                        Donar Ahora
                    </button>
                </div>
            )}
        </header>
    );
};

export default NavBar;