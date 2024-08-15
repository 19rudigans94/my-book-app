import React from 'react';

function MainSection({ books }) {
    return (
        <main className="flex-1 bg-gray-100 p-4">
            <div className="container mx-auto">
                <h1 className="text-2xl font-bold mb-4">Добро пожаловать в наш книжный магазин</h1>
                <p className="mb-4">Всего книг: {books.length}</p>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    {books.map((book) => (
                        <div key={book.id} className="bg-white p-4 rounded shadow">
                            <img src={book.image} alt={book.title} className="w-full h-48 object-cover mb-4" />
                            <h2 className="text-xl font-bold">{book.title}</h2>
                            <p className="mb-2">{book.description}</p>
                            <button className="mt-2 bg-blue-500 text-white px-4 py-2 rounded">Read</button>
                        </div>
                    ))}
                </div>
            </div>
        </main>
    );
}

export default MainSection;
