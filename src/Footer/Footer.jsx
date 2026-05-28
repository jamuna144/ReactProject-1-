import React from "react";
import { BookOpen } from "lucide-react";
import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";

const Footer = () => {
    return (
        <footer className="mt-16 bg-[#2f1d16] text-white rounded-t-3xl shadow-xl">

            <div className="max-w-6xl mx-auto px-6 py-10 grid md:grid-cols-3 gap-8">



                <div>
                    <div className="flex items-center gap-2 text-xl font-bold">
                        <BookOpen />
                        Library System
                    </div>

                    <p className="text-gray-300 mt-3 text-sm leading-6">
                        A modern library management system to track books, members,
                        and improve reading experience efficiently.
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
                            <FaFacebook size={18} />
                        </a>


                        <a
                            href="https://twitter.com"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="p-2 bg-white/10 rounded-xl hover:bg-sky-500 transition cursor-pointer"
                        >
                            <FaTwitter size={18} />
                        </a>

                    </div>
                </div>

            </div>



            <div className="border-t border-white/10 text-center py-4 text-sm text-gray-400">
                © {new Date().getFullYear()} Library Management System. All rights reserved.
            </div>

        </footer>
    );
};

export default Footer;