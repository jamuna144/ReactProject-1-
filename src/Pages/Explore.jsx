


import { useParams } from "react-router-dom";
import janeEyre from "../assets/JaneEyre.jpg";

export const bookData = {
  novels: [
    {
      id: 1,
      title: "Pride and Prejudice",
      author: "Jane Austen",
      type: "Classic",
      image: "https://covers.openlibrary.org/b/id/7222246-L.jpg",
    },
    {
      id: 2,
      title: "The Great Gatsby",
      author: "F. Scott Fitzgerald",
      type: "Classic",
      image: "https://covers.openlibrary.org/b/id/8228691-L.jpg",
    },
    {
      id: 3,
      title: "Jane Eyre",
      author: "Charlotte Brontë",
      type: "Classic",
      image: janeEyre,
    },
    {
      id: 4,
      title: "Wuthering Heights",
      author: "Emily Brontë",
      type: "Classic",
      image: "https://covers.openlibrary.org/b/id/8231856-L.jpg",
    },

    {
      id: 5,
      title: "Moby Dick",
      author: "Herman Melville",
      type: "Classic",
      image: "https://covers.openlibrary.org/b/id/5551066-L.jpg",
    },

    {
      id: 6,
      title: "To Kill a Mockingbird",
      author: "Harper Lee",
      type: "Classic",
      image: "https://covers.openlibrary.org/b/id/8228691-L.jpg",
    },
    {
      id: 7,
      title: "Dracula",
      author: "Bram Stoker",
      type: "Classic",
      image: "https://covers.openlibrary.org/b/id/8228691-L.jpg",
    },

    {
      id: 8,
      title: "The Catcher in the Rye",
      author: "J.D. Salinger",
      type: "Classic",
      image: "https://covers.openlibrary.org/b/id/8231856-L.jpg",
    },

    {
      id: 9,
      title: "Little Women",
      author: "Louisa May Alcott",
      type: "Classic",
      image: "https://covers.openlibrary.org/b/id/8091016-L.jpg",
    },

    {
      id: 10,
      title: "Anna Karenina",
      author: "Leo Tolstoy",
      type: "Classic",
      image: "https://covers.openlibrary.org/b/id/8108691-L.jpg",
    },

    {
      id: 11,
      title: "Crime and Punishment",
      author: "Fyodor Dostoevsky",
      type: "Classic",
      image: "https://covers.openlibrary.org/b/id/8231990-L.jpg",
    },

    {
      id: 12,
      title: "The Odyssey",
      author: "Homer",
      type: "Epic",
      image: "https://covers.openlibrary.org/b/id/8235236-L.jpg",
    },
    {
      id: 13,
      title: "The Hobbit",
      author: "J.R.R. Tolkien",
      type: "Fantasy",
      image: "https://covers.openlibrary.org/b/id/6979861-L.jpg",
    },

    {
      id: 14,
      title: "Harry Potter and the Sorcerer's Stone",
      author: "J.K. Rowling",
      type: "Fantasy",
      image: "https://covers.openlibrary.org/b/id/7984916-L.jpg",
    },

    {
      id: 15,
      title: "The Alchemist",
      author: "Paulo Coelho",
      type: "Philosophical",
      image: "https://covers.openlibrary.org/b/id/8231991-L.jpg",
    },

    {
      id: 16,
      title: "Brave New World",
      author: "Aldous Huxley",
      type: "Dystopian",
      image: "https://covers.openlibrary.org/b/id/8775116-L.jpg",
    },

    {
      id: 17,
      title: "1984",
      author: "George Orwell",
      type: "Dystopian",
      image: "https://covers.openlibrary.org/b/id/7222246-L.jpg",
    },

    {
      id: 18,
      title: "The Book Thief",
      author: "Markus Zusak",
      type: "Historical",
      image: "https://covers.openlibrary.org/b/id/8281996-L.jpg",
    },

  ],

  adventure: [
    {
      id: 1,
      title: "Treasure Island",
      author: "Robert Louis Stevenson",
      type: "Adventure",
      image: "https://covers.openlibrary.org/b/id/8108691-L.jpg"
    },
    {
      id: 2,
      title: "The Hobbit",
      author: "J.R.R. Tolkien",
      type: "Fantasy Adventure",
      image: "https://covers.openlibrary.org/b/id/6979861-L.jpg"
    }
  ],
  artsAndLiterature: [
    {
      id: 1,
      title: "Treasure Island",
      author: "Robert Louis Stevenson",
      type: "Adventure",
      image: "https://covers.openlibrary.org/b/id/8108691-L.jpg"
    },
    {
      id: 2,
      title: "The Hobbit",
      author: "J.R.R. Tolkien",
      type: "Fantasy Adventure",
      image: "https://covers.openlibrary.org/b/id/6979861-L.jpg"
    }
  ],

  biography: [
    { id: 1, title: "Wings of Fire", author: "A.P.J. Abdul Kalam", type: "Biography" },
  ],

  scienceAndResearch: [
    { id: 1, title: "A Brief History of Time", author: "Stephen Hawking", type: "Science" },
  ],

  technologyAndInnovation: [
    { id: 1, title: "Clean Code", author: "Robert C. Martin", type: "Tech" },
  ],

  academicResources: [
    { id: 1, title: "Operating System Concepts", author: "Silberschatz", type: "CS" },
  ],

  businessAndEconomics: [
    { id: 1, title: "Rich Dad Poor Dad", author: "Robert Kiyosaki", type: "Finance" },
  ],
};

export default function Explore() {
  const { category } = useParams();

  const categoryMap = {
    novels: "novels",
    adventure: "adventure",
    "arts-and-literature": "artsAndLiterature",
    biography: "biography",
    "science-and-research": "scienceAndResearch",
    "technology-and-innovation": "technologyAndInnovation",
    "academic-resources": "academicResources",
    "business-and-economics": "businessAndEconomics",
  };

  const normalizedCategory = category?.toLowerCase();
  const key = categoryMap[normalizedCategory];

  if (!key) {
    return (
      <div className="p-10 text-center text-red-500 text-xl">
        Category not found
      </div>
    );
  }

  const books = bookData[key] || [];

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <h1 className="text-3xl font-bold text-center mb-6 capitalize">
        📖 {category?.replace(/-/g, " ")} Books
      </h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {books.map((book) => (
          <div
            key={book.id}
            className="bg-white rounded-2xl shadow hover:shadow-xl transition flex flex-col overflow-hidden"
          >
            <img
              src={book.image || "https://via.placeholder.com/300x400"}
              alt={book.title}
              className="w-full h-48 object-cover"
            />

            <div className="p-4">
              <h2 className="text-lg font-semibold">{book.title}</h2>
              <p className="text-gray-600 text-sm">by {book.author}</p>
              <p className="text-xs text-gray-400">{book.type}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}