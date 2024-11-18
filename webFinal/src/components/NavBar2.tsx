import { FaTachometerAlt, FaShoppingCart, FaStore, FaTruck } from 'react-icons/fa';
import React from "react";


interface NavBar2Props {
    activeSection: string;
    setActiveSection: (section: string) => void;
}

const NavBar2: React.FC<NavBar2Props> = ({ activeSection, setActiveSection }) => {
    return (
        <nav className="bg-white shadow-md p-4 flex items-center justify-between">
            <div className="flex items-center space-x-2">
                <svg width="40" height="40" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
                    <rect x="40" y="10" width="20" height="80" fill="black"/>
                    <rect x="10" y="40" width="80" height="20" fill="black"/>
                </svg>
                <h1 className="text-black text-2xl font-bold">BlackCross</h1>
            </div>
            <div className="flex space-x-4">
                {['DashBoard', 'Shop', 'Providers', 'Cart'].map((section) => (
                    <button
                        key={section}
                        className={`flex flex-col items-center space-x-2 text-gray-700 hover:text-black ${activeSection === section ? 'border-b-2 border-black' : ''}`}
                        onClick={() => setActiveSection(section)}
                    >
                        {section === 'DashBoard' && <FaTachometerAlt />}
                        {section === 'Shop' && <FaStore />}
                        {section === 'Providers' && <FaTruck />}
                        {section === 'Cart' && <FaShoppingCart />}
                        <span>{section}</span>
                    </button>
                ))}
            </div>
        </nav>
    );
};

export default NavBar2;