import { motion } from "framer-motion";
import { TypeAnimation } from "react-type-animation";
import myPic from "../assets/my-pic.jpg"; // Replace with your image
import ResumePDF from "../assets/Priyabrata-Majhi-FlowCV-Resume-20250306.pdf";

const Hero = () => {
    return (
        <section id="home" className="min-h-screen flex items-center justify-center bg-gradient-to-br from-deep-blue to-dark-slate">
            <div className="max-w-6xl mx-auto px-4">
                <div className="flex flex-col md:flex-row items-center justify-between">
                    {/* Left Side: Text Content */}
                    <motion.div
                        className="text-center md:text-left md:w-2/3 mb-8 md:mb-0"
                        initial={{ opacity: 0, x: -50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                    >
                        <motion.h1
                            className="text-5xl md:text-6xl font-bold mb-4"
                            initial={{ opacity: 0, y: -20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.2 }}
                        >
                            Hey, I’m <span className="text-amber-pop">Priyabrata Majhi</span>
                        </motion.h1>
                        <TypeAnimation
                            sequence={[
                                "I build awesome web experiences.",
                                2000,
                                "I craft smooth UI/UX.",
                                2000,
                                "I love React & Tailwind.",
                                2000,
                            ]}
                            wrapper="p"
                            speed={50}
                            className="text-xl md:text-2xl mb-6 text-amber-pop"
                            repeat={Infinity}
                        />
                        <motion.p
                            className="text-lg text-light-gray mb-8"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.4 }}
                        >
                            A passionate web developer specializing in creating modern, responsive, and user-friendly applications. Let's build something amazing together!
                        </motion.p>
                        <div className="flex gap-4 justify-center md:justify-start">
                            <motion.a
                                href="#projects"
                                className="inline-block bg-amber-pop text-dark-slate px-6 py-3 rounded-full font-semibold hover:bg-yellow-500 transition-colors"
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                            >
                                See My Work
                            </motion.a>
                            <motion.a
                                href={ResumePDF}
                                download
                                className="inline-block border-2 border-amber-pop text-light-gray px-6 py-3 rounded-full font-semibold hover:bg-amber-pop hover:text-dark-slate transition-colors"
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                            >
                                Download Resume
                            </motion.a>
                        </div>
                    </motion.div>

                    {/* Right Side: Image */}
                    <motion.div
                        className="w-full md:w-1/3 max-w-sm"
                        initial={{ opacity: 0, x: 50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8, delay: 0.6 }}
                    >
                        <motion.img
                            src={myPic}
                            alt="Priyabrata Majhi Standing"
                            className="w-full h-auto border-4 border-amber-pop rounded-xl object-cover shadow-lg"
                            animate={{
                                y: [0, -15, 0], // Floating effect
                                rotate: [-2, 2, -2], // Gentle rotation for depth
                                scale: [1, 1.03, 1], // Breathing effect
                            }}
                            transition={{
                                duration: 4,
                                repeat: Infinity,
                                ease: "easeInOut"
                            }}
                            whileHover={{
                                scale: 1.05, // Subtle zoom on hover
                                rotate: 0, // Stabilize rotation on hover for clarity
                                boxShadow: "0px 15px 30px rgba(0, 0, 0, 0.3)", // Professional-level depth effect
                            }}
                        />

                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default Hero;