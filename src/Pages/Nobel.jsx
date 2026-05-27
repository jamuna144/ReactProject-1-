const novels = [
  { id: 1, title: "Pride and Prejudice", author: "Jane Austen", type: "Classic" },
  { id: 2, title: "The Great Gatsby", author: "F. Scott Fitzgerald", type: "Classic" },
  { id: 3, title: "Jane Eyre", author: "Charlotte Brontë", type: "Classic" },
];

export default function Novels() {
  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <h1 className="text-3xl font-bold text-center mb-6">
        📖 Novels Books
      </h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {novels.map((book) => (
          <div key={book.id} className="bg-white p-5 rounded-2xl shadow">
            <h2 className="text-lg font-semibold">{book.title}</h2>
            <p className="text-gray-600 text-sm">by {book.author}</p>
          </div>
        ))}
      </div>
    </div>
  );
}