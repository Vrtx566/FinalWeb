import React, { useState } from 'react';
import NavBar2 from '../components/NavBar2';

const DashBoard = () => {
    const [activeSection, setActiveSection] = useState('DashBoard');

    const renderContent = () => {
        switch (activeSection) {
            case 'DashBoard':
                return <div className="text-white">Contenido del DashBoard</div>;
            case 'Shop':
                return <div className="text-white">Contenido de la tienda</div>;
            case 'Providers':
                return <div className="text-white">Contenido de los proveedores</div>;
            case 'Cart':
                return <div className="text-white">Contenido del carrito</div>;
            default:
                return null;
        }
    };

    return (
        <div className="h-screen flex flex-col">
            <NavBar2 activeSection={activeSection} setActiveSection={setActiveSection} />
            <div className="flex-grow p-4">
                <h2 className="text-xl font-bold mb-4">Estás en: {activeSection}</h2>
                {renderContent()}
            </div>
        </div>
    );
};

export default DashBoard;