import { motion } from "framer-motion";
import { FaBriefcase, FaCalendarAlt } from "react-icons/fa";

const Experience = () => {
    return (
        <section id="experience" className="py-16 bg-dark-slate">
            <div className="max-w-6xl mx-auto px-4">
                <motion.h2
                    className="text-4xl font-bold text-center mb-8 text-light-gray"
                    initial={{ opacity: 0, y: -20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                >
                    My Experience
                </motion.h2>
                <motion.div
                    className="space-y-6"
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                >
                    {[
                        {
                            role: "Frontend Developer",
                            company: "Tech Corp",
                            duration: "Jan 2023 - Present",
                            desc: "Built responsive web apps with React and Tailwind.",
                        },
                        {
                            role: "Web Intern",
                            company: "Startup XYZ",
                            duration: "Jun 2022 - Dec 2022",
                            desc: "Assisted in UI design and JavaScript development.",
                        },
                    ].map((exp, index) => (
                        <motion.div
                            key={index}
                            className="bg-deep-blue p-6 rounded-lg shadow-lg"
                            initial={{ opacity: 0, x: -50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.8, delay: 0.2 * (index + 1) }}
                            viewport={{ once: true }}
                        >
                            <div className="flex items-center space-x-3 mb-3">
                                <FaBriefcase className="text-amber-pop text-xl" />
                                <h3 className="text-2xl font-semibold text-amber-pop">
                                    {exp.role}
                                </h3>
                            </div>
                            <p className="text-lg text-light-gray mb-2">{exp.company}</p>
                            <div className="flex items-center space-x-2 mb-3">
                                <FaCalendarAlt className="text-amber-pop" />
                                <p className="text-sm text-gray-400">{exp.duration}</p>
                            </div>
                            <p className="text-light-gray">{exp.desc}</p>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
};

export default Experience;