import { useState } from "react";
import { Link } from "react-router-dom";
import {
  BookOpen,
  Users,
  Clock3,
  AlertTriangle,
  TrendingUp,
} from "lucide-react";

const stats = [
  {
    title: "Total Books",
    value: "1,280",
    icon: <BookOpen size={28} />,
    color: "from-orange-200 to-orange-100",
  },
  {
    title: "Members",
    value: "540",
    icon: <Users size={28} />,
    color: "from-blue-200 to-blue-100",
  },
  {
    title: "Borrowed",
    value: "214",
    icon: <Clock3 size={28} />,
    color: "from-green-200 to-green-100",
  },
  {
    title: "Overdue",
    value: "18",
    icon: <AlertTriangle size={28} />,
    color: "from-red-200 to-red-100",
  },
];

const popularBooks = [
  {
    id: 1,
    title: "Atomic Habits",
    author: "James Clear",
    image: "https://covers.openlibrary.org/b/id/10521270-L.jpg",
  },
  {
    id: 2,
    title: "Jane Eyre",
    author: "Charlotte Brontë",
    image: "https://covers.openlibrary.org/b/id/8228691-L.jpg",
  },
  {
    id: 3,
    title: "The Great Gatsby",
    author: "F. Scott Fitzgerald",
    image: "https://covers.openlibrary.org/b/id/7222246-L.jpg",
  },
];

const Dashboard = () => {
  const [search, setSearch] = useState("");

  const filteredBooks = popularBooks.filter(
    (book) =>
      book.title.toLowerCase().includes(search.toLowerCase()) ||
      book.author.toLowerCase().includes(search.toLowerCase()),
  );

  return (
    <div className="min-h-screen bg-linear-to-br from-[#6b3c0c] via-[#fffaf5] to-[#e8d5c4] p-6">
      {/* HEADER */}
      <div className="flex flex-col md:flex-row justify-between items-center mb-10">
        <div>
          <h1 className="text-4xl font-bold text-[#4b2e2e]">
            Library Dashboard
          </h1>
          <p className="font-semibold text-black mt-2">
            Welcome back, Librarian 👋
          </p>
        </div>

        <input
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          placeholder="Search books..."
          className="px-5 py-3 rounded-2xl border shadow-md w-70 focus:ring-2 focus:ring-orange-300 outline-none"
        />
      </div>

      {/* STATS */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-10">
        {stats.map((item, index) => (
          <div
            key={index}
            className={`bg-linear-to-r ${item.color} p-6 rounded-3xl shadow-lg hover:scale-105 transition`}
          >
            <div className="flex justify-between items-center">
              <div>
                <h2 className="text-gray-700 font-semibold">{item.title}</h2>
                <p className="text-3xl font-bold text-[#4b2e2e] mt-2">
                  {item.value}
                </p>
              </div>
              <div className="bg-white p-3 rounded-xl shadow">{item.icon}</div>
            </div>
          </div>
        ))}
      </div>

      {/* MAIN SECTION (LIKE YOUR IMAGE) */}
      <div className="grid lg:grid-cols-3 gap-8">
        {/* LEFT - RECENT ACTIVITY */}
        <div className="lg:col-span-2 bg-white/80 backdrop-blur-md rounded-3xl shadow-xl p-6">
          <div className="flex items-center gap-2 mb-6">
            <TrendingUp className="text-orange-500" />
            <h2 className="text-2xl font-bold text-[#4b2e2e]">
              Recent Activity
            </h2>
          </div>

          <div className="space-y-4">
            <div className="bg-[#f9f4ef] p-5 rounded-2xl flex justify-between">
              <div>
                <h3 className="font-semibold">Atomic Habits</h3>
                <p className="text-gray-500 text-sm">Borrowed by Rabi</p>
              </div>
              <span className="text-orange-500 font-semibold">Today</span>
            </div>

            <div className="bg-[#f9f4ef] p-5 rounded-2xl flex justify-between">
              <div>
                <h3 className="font-semibold">Jane Eyre</h3>
                <p className="text-gray-500 text-sm">Returned by Ganga</p>
              </div>
              <span className="text-blue-500 font-semibold">Yesterday</span>
            </div>

            <div className="bg-[#f9f4ef] p-5 rounded-2xl flex justify-between">
              <div>
                <h3 className="font-semibold">Rich Dad Poor Dad</h3>
                <p className="text-gray-500 text-sm">Issued to Jamuna</p>
              </div>
              <span className="text-green-500 font-semibold">2 Days Ago</span>
            </div>
          </div>
        </div>

        {/* RIGHT - POPULAR BOOKS */}
        <div className="bg-white/80 backdrop-blur-md rounded-3xl shadow-xl p-6">
          <h2 className="text-2xl font-bold text-[#4b2e2e] mb-6">
            Popular Books
          </h2>

          <div className="space-y-6">
            {filteredBooks.map((book) => (
              <div key={book.id} className="flex gap-4 items-center">
                <img
                  src={book.image}
                  className="w-16 h-24 object-cover rounded-xl shadow"
                />

                <div>
                  <h3 className="font-bold">{book.title}</h3>
                  <p className="text-gray-500 text-sm">{book.author}</p>

                  <Link
                    to={`/book/${book.id}`}
                    className="mt-2 inline-block bg-[#6f4e37] text-white px-3 py-1 rounded-lg text-sm hover:bg-[#5a3d2b]"
                  >
                    View
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* BOTTOM */}
      <div className="grid md:grid-cols-2 gap-8 mt-10">
        <div className="bg-red-100 p-6 rounded-3xl">
          <h2 className="font-bold text-red-700 text-xl">Due Reminder</h2>
          <p className="mt-2 text-gray-700">
            18 books are overdue. Please notify members.
          </p>
        </div>

        <div className="bg-[#f2e6d8] p-6 rounded-3xl">
          <h2 className="font-bold text-[#4b2e2e] text-xl">Announcements</h2>
          <p className="mt-2 text-gray-700">New books added this week 📚</p>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
