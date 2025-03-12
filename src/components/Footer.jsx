import { FaArrowUp } from "react-icons/fa";

const Footer = () => {
    // Function to scroll to the top of the page
    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth",
        });
    };

    return (
        <footer className="bg-deep-blue py-8 text-light-gray">
            <div className="max-w-6xl mx-auto px-4">
                <div className="flex flex-col md:flex-row justify-between items-center space-y-6 md:space-y-0">
                    {/* Copyright Notice */}
                    <p className="text-center md:text-left">
                        &copy; {new Date().getFullYear()} Priyabrata Majhi. All rights reserved.
                    </p>

                    {/* Back to Top Button */}
                    <button
                        onClick={scrollToTop}
                        className="flex items-center space-x-2 bg-amber-pop text-dark-slate px-4 py-2 rounded-full hover:bg-yellow-500 transition-colors"
                    >
                        <span>Back to Top</span>
                        <FaArrowUp size={16} />
                    </button>
                </div>
            </div>
        </footer>
    );
};

export default Footer;