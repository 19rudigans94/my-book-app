import React from 'react';

function Header({ info }) {
    return (
        <header className="bg-gray-800 text-white p-4">
            <div className="container mx-auto flex justify-between items-center">
                <img src={info.logo} alt="Logo" className="h-8" />
                <nav>
                    <a href="#" className="mr-4 hover:underline">Home</a>
                    <a href="#" className="mr-4 hover:underline">About</a>
                    <a href="#" className="hover:underline">Contact</a>
                </nav>
                <div>
                    <p>{info.phone}</p>
                    <p>{info.email}</p>
                </div>
            </div>
        </header>
    );
}

export default Header;
