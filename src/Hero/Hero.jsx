import library from "../assets/library.jpg";

export default function Hero() {
    return (
        <main className="flex-1">

            <section className="relative w-full h-[600px]">


                <img
                    src={library}
                    alt="library"
                    className="w-full h-full object-cover"
                />


                <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black/70"></div>


                <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4">

                    <h1 className="text-white text-4xl md:text-6xl font-bold leading-tight">
                        Find Your Next Favorite Book
                    </h1>

                    <p className="mt-4 text-gray-200 text-sm md:text-lg max-w-xl">
                        Discover thousands of books across different genres and start your reading journey today.
                    </p>


                    <div className="mt-8 w-full max-w-4xl bg-white/95 backdrop-blur-md rounded-2xl shadow-xl p-4 flex flex-col md:flex-row gap-3">

                        <input
                            type="text"
                            placeholder="Search books by title, author, or genre..."
                            className="flex-1 px-4 py-3 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-black"
                        />

                        <input
                            type="date"
                            className="px-4 py-3 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-black"
                        />

                        <button className="px-6 py-3 bg-black text-white rounded-lg font-medium hover:bg-gray-800 transition">
                            Search
                        </button>

                    </div>

                </div>
            </section>


            <section className="py-20 px-6 bg-slate-900">

                <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-8">

                    <div className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 text-center">
                        <h2 className="text-xl text-red-500 text-5xl font-bold underline">Wide Book Collection</h2>
                        <p className="text-black-500 font-bold mt-3">
                            Explore thousands of books across fiction, science, history, and more.
                        </p>
                    </div>

                    <div className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 text-center">
                        <h2 className="text-xl text-red-500 text-5xl font-bold underline">Wide Book Collection</h2>
                        <p className="text-black-500 font-bold mt-3">
                            Borrow and return books easily with a simple and fast system.
                        </p>
                    </div>

                    <div className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 text-center">
                        <h2 className="text-xl text-red-500 text-5xl font-bold underline">Wide Book Collection</h2>
                        <p className="text-black-500 font-bold mt-3">
                            Track issued books, due dates, and manage users efficiently.
                        </p>
                    </div>

                </div>

            </section>

        </main>
    );
}