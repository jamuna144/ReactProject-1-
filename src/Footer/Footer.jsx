function BookOpenIcon(props) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      {...props}
    >
      <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20" />
      <path d="M6.5 3H20v18H6.5A2.5 2.5 0 0 1 4 18.5v-13A2.5 2.5 0 0 1 6.5 3Z" />
    </svg>
  );
}

function FacebookIcon(props) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" {...props}>
      <path d="M13.5 22v-8.2h2.8l.4-3.2h-3.2V8.5c0-.9.2-1.5 1.6-1.5H17V4.2c-.4 0-1.7-.2-3.2-.2-3.1 0-5.1 1.9-5.1 5.3v1.5H5.5v3.2h3.2V22h4.8z" />
    </svg>
  );
}

function InstagramIcon(props) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" {...props}>
      <path d="M7 2h10a5 5 0 0 1 5 5v10a5 5 0 0 1-5 5H7a5 5 0 0 1-5-5V7a5 5 0 0 1 5-5zm0 2a3 3 0 0 0-3 3v10a3 3 0 0 0 3 3h10a3 3 0 0 0 3-3V7a3 3 0 0 0-3-3H7zm5 2.8A5.2 5.2 0 1 1 6.8 12 5.2 5.2 0 0 1 12 6.8zm0 2A3.2 3.2 0 1 0 15.2 12 3.2 3.2 0 0 0 12 8.8zm5.4-.9a1.1 1.1 0 1 1-1.1-1.1 1.1 1.1 0 0 1 1.1 1.1z" />
    </svg>
  );
}

function TwitterIcon(props) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" {...props}>
      <path d="M22 5.9c-.7.3-1.4.5-2.2.6.8-.5 1.4-1.2 1.7-2.1-.8.4-1.6.8-2.4 1-1.5-1.6-4-.8-4.8 1.2-.2.4-.3.8-.3 1.2-3.2-.2-6.1-1.7-8.1-4.2-1 1.8-.5 4.1 1.2 5.3-.6 0-1.1-.2-1.6-.4 0 2 1.4 3.7 3.3 4.1-.5.1-1 .1-1.5.1.4 1.7 2 3 3.8 3-1.8 1.4-4.1 2.1-6.4 1.8 1.9 1.2 4.1 1.9 6.4 1.9 7.7 0 12-6.5 11.7-12.3.8-.6 1.4-1.3 1.9-2.1z" />
    </svg>
  );
}

const Footer = () => {
  return (
    <footer className="mt-16 bg-[#2f1d16] text-white rounded-t-3xl shadow-xl">
      <div className="max-w-6xl mx-auto px-6 py-10 grid md:grid-cols-3 gap-8">
        <div>
          <div className="flex items-center gap-2 text-xl font-bold">
            <BookOpenIcon style={{ width: 24, height: 24 }} />
            Library System
          </div>

          <p className="text-gray-300 mt-3 text-sm leading-6">
            A modern library management system to track books, members, and
            improve reading experience efficiently.
          </p>
        </div>

        <div>
          <h2 className="text-lg font-semibold mb-4">Quick Links</h2>

          <ul className="space-y-2 text-gray-300">
            <li className="hover:text-orange-300 cursor-pointer">Home</li>
            <li className="hover:text-orange-300 cursor-pointer">Books</li>
            <li className="hover:text-orange-300 cursor-pointer">Dashboard</li>
            <li className="hover:text-orange-300 cursor-pointer">About</li>
          </ul>
        </div>

        <div>
          <h2 className="text-lg font-semibold mb-4">Follow Us</h2>

          <div className="flex gap-4">
            {/* Facebook */}
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 bg-white/10 rounded-xl hover:bg-blue-500 transition cursor-pointer"
            >
              <FacebookIcon style={{ width: 18, height: 18 }} />
            </a>

            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 bg-white/10 rounded-xl hover:bg-pink-500 transition cursor-pointer"
            >
              <InstagramIcon style={{ width: 18, height: 18 }} />
            </a>

            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 bg-white/10 rounded-xl hover:bg-sky-500 transition cursor-pointer"
            >
              <TwitterIcon style={{ width: 18, height: 18 }} />
            </a>
          </div>
        </div>
      </div>

      <div className="border-t border-white/10 text-center py-4 text-sm text-gray-400">
        © {new Date().getFullYear()} Library Management System. All rights
        reserved.
      </div>
    </footer>
  );
};

export default Footer;
