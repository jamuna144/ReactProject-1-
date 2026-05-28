import { useParams } from "react-router-dom";
import janeEyre from "../assets/JaneEyre.jpg";

const bookData = {
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
      image: "https://covers.openlibrary.org/b/id/8108691-L.jpg",
    },
    {
      id: 2,
      title: "The Hobbit",
      author: "J.R.R. Tolkien",
      type: "Fantasy Adventure",
      image: "https://covers.openlibrary.org/b/id/6979861-L.jpg",
    },
    {
      id: 3,
      title: "Robinson Crusoe",
      author: "Daniel Defoe",
      type: "Adventure",
      image: "https://covers.openlibrary.org/b/id/8231856-L.jpg",
    },
    {
      id: 4,
      title: "Around the World in 80 Days",
      author: "Jules Verne",
      type: "Adventure",
      image: "https://covers.openlibrary.org/b/id/8228691-L.jpg",
    },
    {
      id: 5,
      title: "The Call of the Wild",
      author: "Jack London",
      type: "Adventure",
      image: "https://covers.openlibrary.org/b/id/7222246-L.jpg",
    },
    {
      id: 6,
      title: "The Lost World",
      author: "Arthur Conan Doyle",
      type: "Adventure",
      image: "https://covers.openlibrary.org/b/id/8231990-L.jpg",
    },
    {
      id: 7,
      title: "Journey to the Center of the Earth",
      author: "Jules Verne",
      type: "Adventure",
      image: "https://covers.openlibrary.org/b/id/8281996-L.jpg",
    },
    {
      id: 8,
      title: "Life of Pi",
      author: "Yann Martel",
      type: "Adventure",
      image: "https://covers.openlibrary.org/b/id/8108691-L.jpg",
    },
    {
      id: 9,
      title: "The Three Musketeers",
      author: "Alexandre Dumas",
      type: "Adventure",
      image: "https://covers.openlibrary.org/b/id/8091016-L.jpg",
    },
    {
      id: 10,
      title: "The Old Man and the Sea",
      author: "Ernest Hemingway",
      type: "Adventure",
      image: "https://covers.openlibrary.org/b/id/8235236-L.jpg",
    },
  ],
  artsAndLiterature: [
    {
      id: 1,
      title: "Hamlet",
      author: "William Shakespeare",
      type: "Play",
      image: "https://covers.openlibrary.org/b/id/8221251-L.jpg",
    },
    {
      id: 2,
      title: "Don Quixote",
      author: "Miguel de Cervantes",
      type: "Novel",
      image: "https://covers.openlibrary.org/b/id/8231991-L.jpg",
    },
    {
      id: 3,
      title: "The Divine Comedy",
      author: "Dante Alighieri",
      type: "Poetry",
      image: "https://covers.openlibrary.org/b/id/8231856-L.jpg",
    },
    {
      id: 4,
      title: "Leaves of Grass",
      author: "Walt Whitman",
      type: "Poetry",
      image: "https://covers.openlibrary.org/b/id/8281996-L.jpg",
    },
    {
      id: 5,
      title: "The Picture of Dorian Gray",
      author: "Oscar Wilde",
      type: "Novel",
      image: "https://covers.openlibrary.org/b/id/8091016-L.jpg",
    },
    {
      id: 6,
      title: "Beloved",
      author: "Toni Morrison",
      type: "Novel",
      image: "https://covers.openlibrary.org/b/id/8108691-L.jpg",
    },
    {
      id: 7,
      title: "The Iliad",
      author: "Homer",
      type: "Epic",
      image: "https://covers.openlibrary.org/b/id/7235236-L.jpg",
    },
    {
      id: 8,
      title: "The Odyssey",
      author: "Homer",
      type: "Epic",
      image: "https://covers.openlibrary.org/b/id/8235236-L.jpg",
    },
    {
      id: 9,
      title: "Poems by Maya Angelou",
      author: "Maya Angelou",
      type: "Poetry",
      image: "https://covers.openlibrary.org/b/id/7222246-L.jpg",
    },
    {
      id: 10,
      title: "1984",
      author: "George Orwell",
      type: "Novel",
      image: "https://covers.openlibrary.org/b/id/8228691-L.jpg",
    },
  ],

  history: [
    {
      id: 1,
      title: "Guns, Germs, and Steel",
      author: "Jared Diamond",
      type: "History",
      image: "https://covers.openlibrary.org/b/id/8231990-L.jpg",
    },
    {
      id: 2,
      title: "The Silk Roads",
      author: "Peter Frankopan",
      type: "History",
      image: "https://covers.openlibrary.org/b/id/8228691-L.jpg",
    },
    {
      id: 3,
      title: "A People's History of the United States",
      author: "Howard Zinn",
      type: "History",
      image: "https://covers.openlibrary.org/b/id/8231856-L.jpg",
    },
    {
      id: 4,
      title: "The Rise and Fall of the Third Reich",
      author: "William L. Shirer",
      type: "History",
      image: "https://covers.openlibrary.org/b/id/8281996-L.jpg",
    },
    {
      id: 5,
      title: "The History of the Ancient World",
      author: "Susan Wise Bauer",
      type: "History",
      image: "https://covers.openlibrary.org/b/id/8091016-L.jpg",
    },
    {
      id: 6,
      title: "SPQR: A History of Ancient Rome",
      author: "Mary Beard",
      type: "History",
      image: "https://covers.openlibrary.org/b/id/8108691-L.jpg",
    },
    {
      id: 7,
      title: "The Wright Brothers",
      author: "David McCullough",
      type: "History",
      image: "https://covers.openlibrary.org/b/id/8235236-L.jpg",
    },
    {
      id: 8,
      title: "The Diary of a Young Girl",
      author: "Anne Frank",
      type: "History/Memoir",
      image: "https://covers.openlibrary.org/b/id/7222246-L.jpg",
    },
    {
      id: 9,
      title: "The Liberation Trilogy",
      author: "Rick Atkinson",
      type: "History",
      image: "https://covers.openlibrary.org/b/id/8221251-L.jpg",
    },
    {
      id: 10,
      title: "The Gulag Archipelago",
      author: "Aleksandr Solzhenitsyn",
      type: "History",
      image: "https://covers.openlibrary.org/b/id/8235236-L.jpg",
    },
  ],

  // added more sample books for other categories
  biography: [
    {
      id: 1,
      title: "Wings of Fire",
      author: "A.P.J. Abdul Kalam",
      type: "Biography",
      image: "https://covers.openlibrary.org/b/id/8231990-L.jpg",
    },
    {
      id: 2,
      title: "Long Walk to Freedom",
      author: "Nelson Mandela",
      type: "Biography",
      image: "https://covers.openlibrary.org/b/id/8155436-L.jpg",
    },
    {
      id: 3,
      title: "The Diary of a Young Girl",
      author: "Anne Frank",
      type: "Memoir",
      image: "https://covers.openlibrary.org/b/id/8221251-L.jpg",
    },
    {
      id: 4,
      title: "The Autobiography of Malcolm X",
      author: "Malcolm X & Alex Haley",
      type: "Autobiography",
      image: "https://covers.openlibrary.org/b/id/8281996-L.jpg",
    },
    {
      id: 5,
      title: "Steve Jobs",
      author: "Walter Isaacson",
      type: "Biography",
      image: "https://covers.openlibrary.org/b/id/8091016-L.jpg",
    },
    {
      id: 6,
      title: "Becoming",
      author: "Michelle Obama",
      type: "Memoir",
      image: "https://covers.openlibrary.org/b/id/8108691-L.jpg",
    },
    {
      id: 7,
      title: "Elon Musk",
      author: "Ashlee Vance",
      type: "Biography",
      image: "https://covers.openlibrary.org/b/id/8235236-L.jpg",
    },
    {
      id: 8,
      title: "Open",
      author: "Andre Agassi",
      type: "Memoir",
      image: "https://covers.openlibrary.org/b/id/7222246-L.jpg",
    },
    {
      id: 9,
      title: "Gandhi: An Autobiography",
      author: "Mahatma Gandhi",
      type: "Autobiography",
      image: "https://covers.openlibrary.org/b/id/8231856-L.jpg",
    },
    {
      id: 10,
      title: "The Wright Brothers",
      author: "David McCullough",
      type: "Biography",
      image: "https://covers.openlibrary.org/b/id/8228691-L.jpg",
    },
  ],

  scienceAndResearch: [
    {
      id: 1,
      title: "A Brief History of Time",
      author: "Stephen Hawking",
      type: "Science",
      image: "https://covers.openlibrary.org/b/id/240726-L.jpg",
    },
    {
      id: 2,
      title: "The Selfish Gene",
      author: "Richard Dawkins",
      type: "Biology",
      image: "https://covers.openlibrary.org/b/id/10909280-L.jpg",
    },
    {
      id: 3,
      title: "The Gene: An Intimate History",
      author: "Siddhartha Mukherjee",
      type: "Science",
      image: "https://covers.openlibrary.org/b/id/8231991-L.jpg",
    },
    {
      id: 4,
      title: "Sapiens: A Brief History of Humankind",
      author: "Yuval Noah Harari",
      type: "History/Science",
      image: "https://covers.openlibrary.org/b/id/8235236-L.jpg",
    },
    {
      id: 5,
      title: "The Elegant Universe",
      author: "Brian Greene",
      type: "Physics",
      image: "https://covers.openlibrary.org/b/id/8228691-L.jpg",
    },
    {
      id: 6,
      title: "The Origin of Species",
      author: "Charles Darwin",
      type: "Biology",
      image: "https://covers.openlibrary.org/b/id/8221251-L.jpg",
    },
    {
      id: 7,
      title: "Silent Spring",
      author: "Rachel Carson",
      type: "Environmental Science",
      image: "https://covers.openlibrary.org/b/id/8281996-L.jpg",
    },
    {
      id: 8,
      title: "The Immortal Life of Henrietta Lacks",
      author: "Rebecca Skloot",
      type: "Science",
      image: "https://covers.openlibrary.org/b/id/8091016-L.jpg",
    },
    {
      id: 9,
      title: "Cosmos",
      author: "Carl Sagan",
      type: "Science",
      image: "https://covers.openlibrary.org/b/id/8108691-L.jpg",
    },
    {
      id: 10,
      title: "The Structure of Scientific Revolutions",
      author: "Thomas S. Kuhn",
      type: "Philosophy of Science",
      image: "https://covers.openlibrary.org/b/id/8231856-L.jpg",
    },
  ],

  technologyAndInnovation: [
    {
      id: 1,
      title: "Clean Code",
      author: "Robert C. Martin",
      type: "Tech",
      image: "https://covers.openlibrary.org/b/id/8091016-L.jpg",
    },
    {
      id: 2,
      title: "Introduction to Algorithms",
      author: "Cormen et al.",
      type: "Computer Science",
      image: "https://covers.openlibrary.org/b/id/8311991-L.jpg",
    },
    {
      id: 3,
      title: "The Pragmatic Programmer",
      author: "Andrew Hunt & David Thomas",
      type: "Tech",
      image: "https://covers.openlibrary.org/b/id/8235236-L.jpg",
    },
    {
      id: 4,
      title: "Design Patterns",
      author: "Erich Gamma et al.",
      type: "Software Engineering",
      image: "https://covers.openlibrary.org/b/id/8221251-L.jpg",
    },
    {
      id: 5,
      title: "The Mythical Man-Month",
      author: "Frederick P. Brooks Jr.",
      type: "Software Engineering",
      image: "https://covers.openlibrary.org/b/id/8231856-L.jpg",
    },
    {
      id: 6,
      title: "Code Complete",
      author: "Steve McConnell",
      type: "Software Engineering",
      image: "https://covers.openlibrary.org/b/id/8228691-L.jpg",
    },
    {
      id: 7,
      title: "The Phoenix Project",
      author: "Gene Kim et al.",
      type: "DevOps",
      image: "https://covers.openlibrary.org/b/id/8281996-L.jpg",
    },
    {
      id: 8,
      title: "Artificial Intelligence: A Modern Approach",
      author: "Stuart Russell & Peter Norvig",
      type: "AI",
      image: "https://covers.openlibrary.org/b/id/8231990-L.jpg",
    },
    {
      id: 9,
      title: "The Lean Startup",
      author: "Eric Ries",
      type: "Business/Tech",
      image: "https://covers.openlibrary.org/b/id/8091016-L.jpg",
    },
    {
      id: 10,
      title: "Hackers & Painters",
      author: "Paul Graham",
      type: "Essays",
      image: "https://covers.openlibrary.org/b/id/8235236-L.jpg",
    },
  ],

  academicResources: [
    {
      id: 1,
      title: "Operating System Concepts",
      author: "Silberschatz",
      type: "CS",
      image: "https://covers.openlibrary.org/b/id/8231856-L.jpg",
    },
    {
      id: 2,
      title: "Computer Networks",
      author: "Andrew S. Tanenbaum",
      type: "CS",
      image: "https://covers.openlibrary.org/b/id/8228691-L.jpg",
    },
    {
      id: 3,
      title: "Database System Concepts",
      author: "Silberschatz, Korth",
      type: "CS",
      image: "https://covers.openlibrary.org/b/id/8108691-L.jpg",
    },
    {
      id: 4,
      title: "Linear Algebra Done Right",
      author: "Sheldon Axler",
      type: "Mathematics",
      image: "https://covers.openlibrary.org/b/id/8221251-L.jpg",
    },
    {
      id: 5,
      title: "Introduction to Electrodynamics",
      author: "David J. Griffiths",
      type: "Physics",
      image: "https://covers.openlibrary.org/b/id/8231990-L.jpg",
    },
    {
      id: 6,
      title: "Discrete Mathematics and Its Applications",
      author: "Kenneth H. Rosen",
      type: "Mathematics",
      image: "https://covers.openlibrary.org/b/id/8235236-L.jpg",
    },
    {
      id: 7,
      title: "Calculus",
      author: "James Stewart",
      type: "Mathematics",
      image: "https://covers.openlibrary.org/b/id/8281996-L.jpg",
    },
    {
      id: 8,
      title: "Modern Control Engineering",
      author: "K. Ogata",
      type: "Engineering",
      image: "https://covers.openlibrary.org/b/id/8091016-L.jpg",
    },
    {
      id: 9,
      title: "Principles of Economics",
      author: "N. Gregory Mankiw",
      type: "Economics",
      image: "https://covers.openlibrary.org/b/id/8108691-L.jpg",
    },
    {
      id: 10,
      title: "Artificial Intelligence: A Modern Approach",
      author: "Russell & Norvig",
      type: "AI",
      image: "https://covers.openlibrary.org/b/id/8228691-L.jpg",
    },
  ],

  businessAndEconomics: [
    {
      id: 1,
      title: "Rich Dad Poor Dad",
      author: "Robert Kiyosaki",
      type: "Finance",
      image: "https://covers.openlibrary.org/b/id/8108691-L.jpg",
    },
    {
      id: 2,
      title: "Thinking, Fast and Slow",
      author: "Daniel Kahneman",
      type: "Psychology/Economics",
      image: "https://covers.openlibrary.org/b/id/8231990-L.jpg",
    },
    {
      id: 3,
      title: "The Lean Startup",
      author: "Eric Ries",
      type: "Business",
      image: "https://covers.openlibrary.org/b/id/8281996-L.jpg",
    },
    {
      id: 4,
      title: "Freakonomics",
      author: "Steven D. Levitt & Stephen J. Dubner",
      type: "Economics",
      image: "https://covers.openlibrary.org/b/id/8091016-L.jpg",
    },
    {
      id: 5,
      title: "The Intelligent Investor",
      author: "Benjamin Graham",
      type: "Finance",
      image: "https://covers.openlibrary.org/b/id/8235236-L.jpg",
    },
    {
      id: 6,
      title: "Good to Great",
      author: "Jim Collins",
      type: "Business",
      image: "https://covers.openlibrary.org/b/id/8228691-L.jpg",
    },
    {
      id: 7,
      title: "Zero to One",
      author: "Peter Thiel",
      type: "Business",
      image: "https://covers.openlibrary.org/b/id/8231856-L.jpg",
    },
    {
      id: 8,
      title: "The Innovator's Dilemma",
      author: "Clayton M. Christensen",
      type: "Business",
      image: "https://covers.openlibrary.org/b/id/8221251-L.jpg",
    },
    {
      id: 9,
      title: "Principles",
      author: "Ray Dalio",
      type: "Business",
      image: "https://covers.openlibrary.org/b/id/8222246-L.jpg",
    },
    {
      id: 10,
      title: "Influence",
      author: "Robert Cialdini",
      type: "Psychology/Marketing",
      image: "https://covers.openlibrary.org/b/id/8281996-L.jpg",
    },
  ],
};

export default function Explore() {
  const { category } = useParams();

  const categoryMap = {
    novels: "novels",
    adventure: "adventure",
    "arts-and-literature": "artsAndLiterature",
    history: "history",
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
