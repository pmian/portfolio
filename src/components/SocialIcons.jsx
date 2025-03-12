import { motion } from "framer-motion";
import { FaLinkedin, FaGithub, FaTwitter } from "react-icons/fa";

const SocialIcons = () => {
    return (
        <motion.div
            className="fixed bottom-10 left-5 space-y-4"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 1 }}
        >
            <motion.a
                href="https://linkedin.com/in/yourhandle"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-amber-pop text-dark-slate flex items-center justify-center rounded-full shadow-lg hover:bg-yellow-500 transition-colors"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
            >
                <FaLinkedin size={20} />
            </motion.a>
            <motion.a
                href="https://github.com/yourhandle"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-amber-pop text-dark-slate flex items-center justify-center rounded-full shadow-lg hover:bg-yellow-500 transition-colors"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
            >
                <FaGithub size={20} />
            </motion.a>
            <motion.a
                href="https://twitter.com/yourhandle"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-amber-pop text-dark-slate flex items-center justify-center rounded-full shadow-lg hover:bg-yellow-500 transition-colors"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
            >
                <FaTwitter size={20} />
            </motion.a>
        </motion.div>
    );
};

export default SocialIcons;