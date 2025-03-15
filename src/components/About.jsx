import { motion } from "framer-motion";

const About = () => {
    return (
        <section id="about" className="py-16 bg-dark-slate">
            <div className="max-w-6xl mx-auto px-4">
                <motion.h2
                    className="text-4xl font-bold text-center mb-8"
                    initial={{ opacity: 0, y: -20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                >
                    About Me
                </motion.h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                    {/* Left Side: Personal Intro */}
                    <motion.div
                        className="space-y-6"
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                    >
                        <p className="text-lg text-light-gray leading-relaxed">
                            Hi, I'm <span className="text-amber-pop font-semibold">Priyabrata Majhi</span>, a passionate and creative web developer with a love for building beautiful, functional, and user-friendly applications. I specialize in <span className="text-amber-pop">front-end development</span> and have experience working with modern technologies like <span className="text-amber-pop">React</span>, <span className="text-amber-pop">Tailwind CSS</span>, and <span className="text-amber-pop">Node.js</span>.
                        </p>
                        <p className="text-lg text-light-gray leading-relaxed">
                            Beyond front-end development, I also work with <span className="text-amber-pop">Express.js</span> and <span className="text-amber-pop">MongoDB</span> to build scalable and efficient full-stack applications. I have a strong foundation in <span className="text-amber-pop">REST APIs</span> and <span className="text-amber-pop">JWT authentication</span>, ensuring seamless data flow and security in web applications.
                        </p>
                        <p className="text-lg text-light-gray leading-relaxed">
                            I am deeply passionate about solving real-world problems through **technology and logical thinking**. I actively enhance my problem-solving skills by practicing <span className="text-amber-pop">Data Structures & Algorithms</span> and participating in coding challenges on platforms like LeetCode. My ability to break down complex problems into efficient solutions helps me create optimized and high-performance applications.
                        </p>
                        <p className="text-lg text-light-gray leading-relaxed">
                            I believe that great design and seamless functionality go hand in hand. Whether it's crafting a responsive UI, optimizing performance, or deploying applications with <span className="text-amber-pop">Vercel</span> and <span className="text-amber-pop">Render</span>, I strive to deliver the best user experience possible. I enjoy collaborating with other developers and continuously learning new technologies to stay ahead in the fast-evolving tech landscape.
                        </p>
                        <p className="text-lg text-light-gray leading-relaxed">
                            When I’m not coding, I explore the latest advancements in web technologies, contribute to open-source projects, and work on **side projects** that challenge me to push my limits. I'm always excited to learn, experiment, and build solutions that make a difference.
                        </p>

                    </motion.div>

                    {/* Right Side: Skills */}
                    <motion.div
                        className="space-y-6"
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8, delay: 0.4 }}
                    >
                        <h3 className="text-2xl font-semibold text-amber-pop">My Skills</h3>
                        <div className="grid grid-cols-2 gap-4">
                            {[
                                "React.js",
                                "Tailwind CSS",
                                "JavaScript (ES6+)",
                                "Node.js",
                                "Express.js",
                                "MongoDB & Mongoose",
                                "Firebase Authentication",
                                "JWT Authentication",
                                "Git & GitHub",
                                "REST APIs",
                                "Responsive Design",
                                "UI/UX Design",
                                "Vercel & Render (Deployment)",
                                "Postman (API Testing)",
                                "MongoDB Atlas & Compass",
                                "Data Structures & Algorithms (DSA)",
                                "Problem-Solving & Competitive Programming (C++)"
                            ].map((skill, index) => (
                                <div
                                    key={index}
                                    className="flex items-center space-x-2 bg-deep-blue p-3 rounded-lg shadow-md"
                                >
                                    <span className="text-amber-pop">✔</span>
                                    <span className="text-light-gray">{skill}</span>
                                </div>
                            ))}
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default About;