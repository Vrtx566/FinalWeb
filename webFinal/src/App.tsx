import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './sections/Home';
import SecretEntrance from './sections/SecretEntrance';
import SecretWeb from './sections/SecretWeb';
import './index.css';

function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/secret-entrance" element={<SecretEntrance />} />
                <Route path="/secret-web" element={<SecretWeb />} />
            </Routes>
        </Router>
    );
}

export default App;