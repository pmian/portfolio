import { motion } from "framer-motion";
import { useState } from "react";

const Navbar = ({ isOpen, setIsOpen, scrollToSection }) => {
    return (
        <motion.nav
            initial={{ y: -50 }}
            animate={{ y: 0 }}
            transition={{ duration: 0.5 }}
            className="bg-deep-blue/80 backdrop-blur-md p-4 sticky top-0 z-50 shadow-lg"
        >
            <div className="max-w-6xl mx-auto flex justify-between items-center">
                {/* Logo / Name */}
                <motion.h1
                    className="text-2xl font-bold text-light-gray hover:text-amber-pop transition-colors"
                    whileHover={{ scale: 1.05 }}
                >
                    Priyabrata Majhi
                </motion.h1>

                {/* Hamburger Menu (Mobile) */}
                <button
                    className="md:hidden text-light-gray hover:text-amber-pop transition-colors"
                    onClick={() => setIsOpen(!isOpen)}
                >
                    {isOpen ? "✕" : "☰"}
                </button>

                {/* Navigation Links */}
                <ul
                    className={`${isOpen ? "block" : "hidden"
                        } md:flex md:space-x-6 absolute md:static top-16 left-0 w-full md:w-auto bg-deep-blue/80 backdrop-blur-md md:bg-transparent p-4 md:p-0`}
                >
                    {["Home", "Projects", "Contact"].map((item, index) => (
                        <motion.li
                            key={item}
                            initial={{ opacity: 0, y: -20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: index * 0.2 }}
                            className="mb-4 md:mb-0"
                        >
                            <a
                                href={`#${item.toLowerCase()}`}
                                className="block py-2 md:py-0 text-light-gray hover:text-amber-pop transition-colors"
                                onClick={() => {
                                    scrollToSection(item.toLowerCase());
                                    setIsOpen(false); // Close the menu on mobile after clicking a link
                                }}
                            >
                                {item}
                            </a>
                        </motion.li>
                    ))}
                </ul>
            </div>
        </motion.nav>
    );
};

export default Navbar;