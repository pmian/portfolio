import { motion } from "framer-motion";

const Projects = () => {
    const projects = [
        {
            title: "Recipe Sharing App",
            description:
                "Built a full-stack recipe-sharing app with user authentication, allowing users to post, edit, and manage recipes. Enabled recipe creation with detailed ingredients and step-by-step instructions. Allowed users to explore and interact with community-shared recipes. Implemented like and comment features to boost user engagement. Designed a clean and responsive UI with Tailwind CSS for a smooth browsing experience.",
            technologies: ["React", "Node.js", "Express.js", "MongoDB", "JWT", "Tailwind CSS", "Axios"],
            link: "https://recipe-sharing-app-numberone.vercel.app/",
            image: "https://via.placeholder.com/400x250", // Replace with your project image
        },
        {
            title: "To-Do App",
            description:
                "Built a full-stack to-do app with user authentication, enabling task creation, editing, and deletion. Implemented task categorization, and progress tracking for improved productivity. Designed a responsive and intuitive UI with Tailwind CSS.",
            technologies: ["React", "Node.js", "Express.js", "MongoDB", "JWT", "Tailwind CSS", "Axios"],
            link: "https://to-do-app-numberone.vercel.app/",
            image: "https://via.placeholder.com/400x250", // Replace with your project image
        },
        {
            title: "Weather App",
            description:
                "Developed a real-time weather app with Google authentication, allowing users to access personalized forecasts. Integrated OpenWeather API to display current weather conditions and 7-day forecasts. Implemented a search feature for global locations, enhancing accessibility. Designed a responsive and minimal UI using Tailwind CSS for a seamless user experience.",
            technologies: ["React", "Firebase Authentication", "OpenWeatherMap API", "Tailwind CSS", "Axios"],
            link: "https://weather-app-numberone.vercel.app/",
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
                                target="_blank"
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