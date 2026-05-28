import React, { useState } from "react";
import { useParams } from "react-router-dom";

const books = [
    {
        id: 1,
        title: "Atomic Habits",
        author: "James Clear",
        image: "https://covers.openlibrary.org/b/id/10521270-L.jpg",
        description:
            "A guide to building good habits and breaking bad ones using small changes.",
    },
    {
        id: 2,
        title: "Jane Eyre",
        author: "Charlotte Brontë",
        image: "https://covers.openlibrary.org/b/id/8228691-L.jpg",
        description:
            "A classic novel about love, independence, and personal growth.",
    },
    {
        id: 3,
        title: "The Great Gatsby",
        author: "F. Scott Fitzgerald",
        image: "https://covers.openlibrary.org/b/id/7222246-L.jpg",
        description:
            "A story of wealth, love, and the American dream in the 1920s.",
    },
];

const BookDetails = () => {
    const { id } = useParams();

    const book = books.find((b) => b.id === parseInt(id));

    const [isBorrowed, setIsBorrowed] = useState(false);
    const [isReturned, setIsReturned] = useState(false);

    const handleBorrow = () => {
        setIsBorrowed(true);
        setIsReturned(false);
    };

    const handleReturn = () => {
        setIsBorrowed(false);
        setIsReturned(true);

        setTimeout(() => {
            setIsReturned(false);
        }, 3000);
    };

    if (!book) {
        return (
            <div className="min-h-screen flex items-center justify-center text-xl">
                Book not found
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-[#f7f1ea] flex items-center justify-center p-10">
            <div className="bg-white p-8 rounded-3xl shadow-2xl max-w-4xl w-full grid md:grid-cols-2 gap-10">

                <img
                    src={book.image}
                    alt={book.title}
                    className="w-full h-[500px] object-cover rounded-3xl"
                />

                <div className="flex flex-col justify-center">
                    <h1 className="text-5xl font-bold text-[#3e2723]">
                        {book.title}
                    </h1>

                    <p className="text-xl text-gray-500 mt-4">
                        by {book.author}
                    </p>

                    <p className="mt-8 text-lg text-gray-700 leading-8">
                        {book.description}
                    </p>

                    {/* Borrow message */}
                    {isBorrowed && (
                        <div className="mt-6 p-4 bg-green-100 text-green-800 rounded-xl">
                            ✔ You have borrowed this book
                        </div>
                    )}

                    {/* Return message */}
                    {isReturned && (
                        <div className="mt-6 p-4 bg-blue-100 text-blue-800 rounded-xl">
                            ✔ You have returned this book
                        </div>
                    )}

                    {/* Buttons */}
                    {!isBorrowed ? (
                        <button
                            onClick={handleBorrow}
                            className="mt-10 bg-[#6f4e37] text-white px-6 py-4 rounded-2xl hover:bg-[#5a3d2b] transition duration-300 w-fit"
                        >
                            Borrow Book
                        </button>
                    ) : (
                        <button
                            onClick={handleReturn}
                            className="mt-10 bg-red-600 text-white px-6 py-4 rounded-2xl hover:bg-red-700 transition duration-300 w-fit"
                        >
                            Return Book
                        </button>
                    )}
                </div>
            </div>
        </div>
    );
};

export default BookDetails;