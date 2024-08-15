import React from 'react';

function Footer({ info }) {
    return (
        <footer className="bg-gray-800 text-white p-4">
            <div className="container mx-auto flex justify-between items-center">
                <img src={info.logo} alt="Logo" className="h-8" />
                <div className="flex space-x-4">
                    {info.socialLinks.map((link, index) => (
                        <a key={index} href={link.url} className="hover:underline">
                            {link.name}
                        </a>
                    ))}
                </div>
            </div>
        </footer>
    );
}

export default Footer;
