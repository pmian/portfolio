import { motion } from "framer-motion";
import {
    FaLinkedin,
    FaGithub,
    FaTwitter,
    FaEnvelope,
    FaMapMarkerAlt,
} from "react-icons/fa";

const Contact = () => {
    return (
        <section id="contact" className="py-16 bg-dark-slate">
            <div className="max-w-6xl mx-auto px-4">
                <motion.h2
                    className="text-4xl font-bold text-center mb-8"
                    initial={{ opacity: 0, y: -20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                >
                    Get in Touch
                </motion.h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {/* Left Side: Contact Form */}
                    <motion.div
                        className="space-y-6"
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                    >
                        <p className="text-lg text-light-gray text-center md:text-left">
                            Have a question or want to collaborate? Feel free to reach out!
                            I'll get back to you as soon as possible.
                        </p>
                        <form
                            action="https://formspree.io/f/xdkeojae"
                            method="POST"
                            className="space-y-4"
                        >
                            <div className="flex flex-col space-y-2">
                                <label htmlFor="name" className="text-light-gray">
                                    Name
                                </label>
                                <input
                                    type="text"
                                    name="name"
                                    placeholder="Your Name"
                                    className="p-3 rounded-lg bg-deep-blue text-light-gray focus:outline-none focus:ring-2 focus:ring-amber-pop"
                                    required
                                />
                            </div>
                            <div className="flex flex-col space-y-2">
                                <label htmlFor="email" className="text-light-gray">
                                    Email
                                </label>
                                <input
                                    type="email"
                                    name="email"
                                    placeholder="Your Email"
                                    className="p-3 rounded-lg bg-deep-blue text-light-gray focus:outline-none focus:ring-2 focus:ring-amber-pop"
                                    required
                                />
                            </div>
                            <div className="flex flex-col space-y-2">
                                <label htmlFor="message" className="text-light-gray">
                                    Message
                                </label>
                                <textarea
                                    name="message"
                                    rows="5"
                                    placeholder="Your Message"
                                    className="p-3 rounded-lg bg-deep-blue text-light-gray focus:outline-none focus:ring-2 focus:ring-amber-pop"
                                    required
                                />
                            </div>
                            <button
                                type="submit"
                                className="w-full bg-amber-pop text-dark-slate px-6 py-3 rounded-full font-semibold hover:bg-yellow-500 transition-colors"
                            >
                                Send Message
                            </button>
                        </form>
                    </motion.div>

                    {/* Right Side: Contact Info */}
                    <motion.div
                        className="space-y-6"
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8, delay: 0.4 }}
                    >
                        <div className="space-y-4">
                            <h3 className="text-2xl font-semibold text-amber-pop">
                                Contact Information
                            </h3>
                            <div className="space-y-2">
                                <div className="flex items-center space-x-2">
                                    <FaMapMarkerAlt className="text-amber-pop" />
                                    <p className="text-light-gray">Balasore, Odisha, India</p>
                                </div>
                                <div className="flex items-center space-x-2">
                                    <FaEnvelope className="text-amber-pop" />
                                    <p className="text-light-gray">
                                        priyabratamajhimnnitian@gmail.com
                                    </p>
                                </div>
                            </div>
                        </div>

                        {/* Social Media Links */}
                        <div className="space-y-4">
                            <h3 className="text-2xl font-semibold text-amber-pop">
                                Follow Me
                            </h3>
                            <div className="flex space-x-4">
                                <a
                                    href="https://www.linkedin.com/in/priyabrata-majhi-a4a100206/"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-light-gray hover:text-amber-pop transition-colors"
                                >
                                    <FaLinkedin size={24} />
                                </a>
                                <a
                                    href="https://github.com/pmian"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-light-gray hover:text-amber-pop transition-colors"
                                >
                                    <FaGithub size={24} />
                                </a>
                                <a
                                    href="https://x.com/pmajhi2001"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-light-gray hover:text-amber-pop transition-colors"
                                >
                                    <FaTwitter size={24} />
                                </a>
                            </div>
                        </div>

                        {/* Optional: Embed a Map */}
                        <div className="rounded-lg overflow-hidden">
                            <iframe
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3778.276211205504!2d86.93993717499292!3d21.493127161670415!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a1bb9b2a38cdbe3%3A0x58efc12c94032993!2sBalasore%2C%20Odisha!5e0!3m2!1sen!2sin!4v1710223456789!5m2!1sen!2sin"
                                width="100%"
                                height="250"
                                style={{ border: 0 }}
                                allowFullScreen=""
                                loading="lazy"
                                className="rounded-lg"
                            />
                        </div>

                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default Contact;
