import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './sections/Home';
import Donate from './sections/Donate.tsx';
import SecretWeb from './sections/DashBoard.tsx';
import './index.css';

function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/donate" element={<Donate />} />
                <Route path="/blackcross" element={<SecretWeb />} />
            </Routes>
        </Router>
    );
}

export default App;