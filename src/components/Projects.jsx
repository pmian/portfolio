import { motion } from "framer-motion";

const Projects = () => {
    const projects = [
        {
            title: "To-Do App",
            description:
                "A feature-rich to-do app with authentication, drag & drop functionality, reminders, and real-time updates. Built with React, Firebase, and Tailwind CSS.",
            technologies: ["React", "Firebase", "Tailwind CSS", "Drag & Drop API"],
            link: "#",
            image: "https://via.placeholder.com/400x250", // Replace with your project image
        },
        {
            title: "Weather App",
            description:
                "A sleek weather forecasting app that provides real-time weather updates, 7-day forecasts, and location-based weather data. Integrated with OpenWeatherMap API.",
            technologies: ["React", "OpenWeatherMap API", "Tailwind CSS", "Axios"],
            link: "#",
            image: "https://via.placeholder.com/400x250", // Replace with your project image
        },
        {
            title: "Recipe Sharing App",
            description:
                "A platform for food enthusiasts to share and discover new recipes. Features include user authentication, recipe search, and a beautiful UI.",
            technologies: ["React", "Node.js", "MongoDB", "Express", "Tailwind CSS"],
            link: "#",
            image: "https://via.placeholder.com/400x250", // Replace with your project image
        },
        {
            title: "E-Commerce Store",
            description:
                "A fully functional e-commerce store with product listings, a shopping cart, and secure payment integration using Stripe.",
            technologies: ["React", "Stripe API", "Node.js", "MongoDB", "Tailwind CSS"],
            link: "#",
            image: "https://via.placeholder.com/400x250", // Replace with your project image
        },
    ];

    return (
        <section id="projects" className="py-16 bg-deep-blue">
            <div className="max-w-6xl mx-auto px-4">
                <motion.h2
                    className="text-4xl font-bold text-center mb-8"
                    initial={{ opacity: 0, y: -20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                >
                    My Projects
                </motion.h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {projects.map((project, index) => (
                        <motion.div
                            key={index}
                            className="bg-dark-slate p-6 rounded-xl shadow-lg hover:shadow-2xl transition-shadow"
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: index * 0.2 }}
                        >
                            <img
                                src={project.image}
                                alt={project.title}
                                className="w-full h-48 object-cover rounded-lg mb-4"
                            />
                            <h3 className="text-2xl font-semibold mb-2 text-amber-pop">
                                {project.title}
                            </h3>
                            <p className="text-light-gray mb-4">{project.description}</p>
                            <div className="flex flex-wrap gap-2 mb-4">
                                {project.technologies.map((tech, idx) => (
                                    <span
                                        key={idx}
                                        className="bg-deep-blue text-light-gray px-3 py-1 rounded-full text-sm"
                                    >
                                        {tech}
                                    </span>
                                ))}
                            </div>
                            <a
                                href={project.link}
                                className="inline-block bg-amber-pop text-dark-slate px-6 py-2 rounded-full font-semibold hover:bg-yellow-500 transition-colors"
                            >
                                View Project →
                            </a>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Projects;