import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const SecretEntrance = () => {
    const [input, setInput] = useState('');
    const correctPassword = '1234';
    const navigate = useNavigate();

    const handleButtonClick = (value: string) => {
        setInput(input + value);
    };

    const handleClearClick = () => {
        setInput('');
    };

    const handleEnterClick = () => {
        if (input === correctPassword) {
            navigate('/secret-web');
        } else {
            alert('Contraseña incorrecta');
        }
        setInput('');
    };

    return (
        <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
            <div className="bg-white p-4 rounded shadow-md mb-4 w-3/4 text-center text-2xl">
                {input}
            </div>
            <div className="grid grid-cols-3 gap-4 w-3/4">
                {[1, 2, 3, 4, 5, 6, 7, 8, 9].map((num) => (
                    <button
                        key={num}
                        onClick={() => handleButtonClick(num.toString())}
                        className="bg-blue-500 text-white p-8 rounded text-4xl"
                    >
                        {num}
                    </button>
                ))}
                <div className="col-span-3 flex justify-center space-x-4">
                    <button
                        onClick={() => handleButtonClick('0')}
                        className="bg-blue-500 text-white p-8 rounded text-4xl w-1/3"
                    >
                        0
                    </button>
                    <button
                        onClick={handleClearClick}
                        className="bg-red-500 text-white p-8 rounded text-4xl w-1/3"
                    >
                        Borrar
                    </button>
                    <button
                        onClick={handleEnterClick}
                        className="bg-green-500 text-white p-8 rounded text-4xl w-1/3"
                    >
                        Ingresar
                    </button>
                </div>
            </div>
        </div>
    );
};

export default SecretEntrance;