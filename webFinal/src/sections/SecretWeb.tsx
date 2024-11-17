import React, {useState} from 'react';
import backgroundImage from '../assets/img.png'; // Asegúrate de que la ruta sea correcta

const Login = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const handleLogin = (e: React.FormEvent) => {
        e.preventDefault();
        // Lógica de inicio de sesión
        console.log('Username:', username);
        console.log('Password:', password);
    };

    return (
        <div
            className="flex flex-col items-center justify-center h-screen text-white"
        >
            <img
                src={backgroundImage}
                alt="Background"
                className="absolute object-cover w-full h-full -z-10"/>


            <h1 className="text-4xl font-bold mb-8 text-red-500">Organs Now</h1>
            <form onSubmit={handleLogin} className="bg-gray-800 p-8 rounded shadow-md w-80 bg-opacity-75">
                <div className="mb-4">
                    <label className="block text-red-500 text-sm font-bold mb-2" htmlFor="username">
                        Username
                    </label>
                    <input
                        type="text"
                        id="username"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                        className="w-full p-2 rounded bg-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-red-500"
                    />
                </div>
                <div className="mb-6">
                    <label className="block text-red-500 text-sm font-bold mb-2" htmlFor="password">
                        Password
                    </label>
                    <input
                        type="password"
                        id="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        className="w-full p-2 rounded bg-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-red-500"
                    />
                </div>
                <div className="flex items-center justify-between">
                    <button
                        type="submit"
                        className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                    >
                        Log In
                    </button>
                </div>
            </form>
        </div>
    );
};

export default Login;