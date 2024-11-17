import React from 'react';
import NavBar from '../components/NavBar';

const Home = () => {
    return (
        <div className="font-sans text-gray-900 w-full bg-white min-h-screen">
            <NavBar />
            <section className="bg-cover bg-center text-white text-center py-16 w-full" style={{ backgroundImage: "url('path-to-hero-image.jpg')" }}>
                <div className="max-w-xl mx-auto">
                    <h1 className="text-4xl font-bold mb-4">Welcome to UNICEF</h1>
                    <p className="text-lg">We work for children's rights, survival, development, and protection.</p>
                </div>
            </section>
            <section className="p-8 w-full">
                <div className="mb-8" id="about">
                    <h2 className="text-2xl font-bold mb-2">About Us</h2>
                    <p>Information about UNICEF's mission and work.</p>
                </div>
                <div className="mb-8" id="projects">
                    <h2 className="text-2xl font-bold mb-2">Our Projects</h2>
                    <p>Details about ongoing projects and initiatives.</p>
                </div>
                <div className="mb-8" id="news">
                    <h2 className="text-2xl font-bold mb-2">Latest News</h2>
                    <p>Updates and news articles.</p>
                </div>
                <div className="mb-8" id="contact">
                    <h2 className="text-2xl font-bold mb-2">Contact Us</h2>
                    <p>How to get in touch with us.</p>
                </div>
            </section>
            <footer className="text-center p-4 bg-[#00aeef] text-white w-full">
                <p>&copy; 2023 UNICEF. All rights reserved.</p>
            </footer>
        </div>
    );
};

export default Home;