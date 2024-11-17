import React, { useState } from 'react';

const Donate = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [amount, setAmount] = useState('');
    const [paymentMethod, setPaymentMethod] = useState('credit-card');
    const [buttons, setButtons] = useState({ D1: false, a: false, e: false, D2: false });
    const [showPassword, setShowPassword] = useState(false);
    const [password, setPassword] = useState('');

    const handleButtonClick = (button: string) => {
        setButtons(prevState => {
            const newState = { ...prevState, [button]: !prevState[button] };
            if (Object.values(newState).every(value => value)) {
                setShowPassword(true);
            }
            return newState;
        });
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        // Lógica para manejar la donación
        console.log('Name:', name);
        console.log('Email:', email);
        console.log('Amount:', amount);
        console.log('Payment Method:', paymentMethod);
        console.log('Password:', password);
        alert('Thank you for your donation!');
    };

    return (
        <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
            <h1 className="text-2xl font-bold mb-8 text-white bg-red-500 ">
                <button
                    onClick={() => handleButtonClick('D1')}
                    className={`w-5 h-8 text-2xl font-bold ${buttons.D1 ? 'bg-white text-red-500' : 'bg-red-500 text-white'} cursor-default`}
                >
                    D
                </button>
                on
                <button
                    onClick={() => handleButtonClick('a')}
                    className={`w-4 h-8 text-2xl font-bold ${buttons.a ? 'bg-white text-red-500' : 'bg-red-500 text-white'} cursor-default`}
                >
                    a
                </button>
                te

                R
                <button
                    onClick={() => handleButtonClick('e')}
                    className={`w-5 h-8 text-2xl font-bold ${buttons.e ? 'bg-white text-red-500' : 'bg-red-500 text-white'} cursor-default`}
                >
                    e
                </button>
                <button
                    onClick={() => handleButtonClick('D2')}
                    className={`mr-2 w-4 h-8 text-2xl font-bold ${buttons.D2 ? 'bg-white text-red-500' : 'bg-red-500 text-white'} cursor-default`}
                >
                    d
                </button>

                Cross
            </h1>
            <form onSubmit={handleSubmit} className="bg-white p-8 rounded shadow-md w-80">
                <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="name">
                        Name
                    </label>
                    <input
                        type="text"
                        id="name"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        className="w-full p-2 rounded bg-gray-200 text-gray-700 focus:outline-none focus:ring-2 focus:ring-red-500"
                        required
                    />
                </div>
                <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
                        Email
                    </label>
                    <input
                        type="email"
                        id="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="w-full p-2 rounded bg-gray-200 text-gray-700 focus:outline-none focus:ring-2 focus:ring-red-500"
                        required
                    />
                </div>
                <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="amount">
                        Donation Amount
                    </label>
                    <input
                        type="number"
                        id="amount"
                        value={amount}
                        onChange={(e) => setAmount(e.target.value)}
                        className="w-full p-2 rounded bg-gray-200 text-gray-700 focus:outline-none focus:ring-2 focus:ring-red-500"
                        required
                    />
                </div>
                <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="payment-method">
                        Payment Method
                    </label>
                    <select
                        id="payment-method"
                        value={paymentMethod}
                        onChange={(e) => setPaymentMethod(e.target.value)}
                        className="w-full p-2 rounded bg-gray-200 text-gray-700 focus:outline-none focus:ring-2 focus:ring-red-500"
                        required
                    >
                        <option value="credit-card">Credit Card</option>
                        <option value="paypal">PayPal</option>
                        <option value="bank-transfer">Bank Transfer</option>
                    </select>
                </div>
                {showPassword && (
                    <div className="mb-4">
                        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">
                            Password
                        </label>
                        <input
                            type="password"
                            id="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            className="w-full p-2 rounded bg-gray-200 text-gray-700 focus:outline-none focus:ring-2 focus:ring-red-500"
                            required
                        />
                    </div>
                )}
                <div className="flex items-center justify-between">
                    <button
                        type="submit"
                        className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                    >
                        Donate
                    </button>
                </div>
            </form>
        </div>
    );
};

export default Donate;