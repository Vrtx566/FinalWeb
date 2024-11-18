import { useState, useEffect } from 'react';
import NavBar2 from '../components/NavBar2';
import { OrganoResponse, ProveedorResponse } from "../interfaces/Responses.ts";

const DashBoard = () => {
    const [activeSection, setActiveSection] = useState('DashBoard');
    const [shopData, setShopData] = useState<OrganoResponse[]>([]);
    const [providersData, setProvidersData] = useState<ProveedorResponse[]>([]);
    const [providerOrgans, setProviderOrgans] = useState<OrganoResponse[]>([]);

    const fetchShopData = async () => {
        try {
            const response = await fetch('https://aguapanelo-9yl3tfcv.b4a.run/organos');
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            const data = await response.json();
            setShopData(data);
        } catch (error) {
            console.error('Error fetching shop data:', error);
        }
    };

    const fetchProvidersData = async () => {
        try {
            const response = await fetch('https://aguapanelo-9yl3tfcv.b4a.run/proveedores');
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            const data = await response.json();
            setProvidersData(data);
        } catch (error) {
            console.error('Error fetching providers data:', error);
        }
    };

    const fetchProviderOrgans = async (providerId: string) => {
        try {
            const response = await fetch(`https://aguapanelo-9yl3tfcv.b4a.run/proveedores/organos/${providerId}`);
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            const data = await response.json();
            const organos = data.organos;
            setProviderOrgans(organos);
            setActiveSection('ProviderOrgans');
        } catch (error) {
            console.error('Error fetching provider organs:', error);
        }
    };

    useEffect(() => {
        if (activeSection === 'Shop') {
            fetchShopData();
        } else if (activeSection === 'Providers') {
            fetchProvidersData();
        }
    }, [activeSection]);

    const renderContent = () => {
        switch (activeSection) {
            case 'DashBoard':
                return <div className="text-white">Contenido del DashBoard</div>;
            case 'Shop':
                return (
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                        {shopData.map((item) => (
                            <div key={item.id} className="bg-white p-4 rounded shadow-md">
                                <h3 className="text-lg font-bold">{item.tipo}</h3>
                                <p className="text-gray-700">Precio: {item.precio}</p>
                                <p className="text-gray-700">Disponibilidad: {item.disponibilidad ? 'Disponible' : 'No disponible'}</p>
                            </div>
                        ))}
                    </div>
                );
            case 'Providers':
                return (
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                        {providersData.map((provider) => (
                            <div key={provider.id} className="bg-white p-4 rounded shadow-md">
                                <h3 className="text-lg font-bold">{provider.nombre}</h3>
                                <p className="text-gray-700">Contacto: {provider.contacto}</p>
                                <p className="text-gray-700">Ubicación: {provider.ubicacion}</p>
                                <button
                                    onClick={() => fetchProviderOrgans(provider.id)}
                                    className="mt-2 bg-red-500 text-white py-1 px-2 rounded"
                                >
                                    Ver Órganos
                                </button>
                            </div>
                        ))}
                    </div>
                );
            case 'ProviderOrgans':
                return (
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                        {providerOrgans.map((organ) => (
                            <div key={organ.id} className="bg-white p-4 rounded shadow-md">
                                <h3 className="text-lg font-bold">{organ.tipo}</h3>
                                <p className="text-gray-700">Precio: {organ.precio}</p>
                                <p className="text-gray-700">Disponibilidad: {organ.disponibilidad ? 'Disponible' : 'No disponible'}</p>
                            </div>
                        ))}
                    </div>
                );
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