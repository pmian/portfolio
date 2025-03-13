import { useState, useEffect } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import SocialIcons from "./components/SocialIcons";

function App() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [activeSection, setActiveSection] = useState("hero");

  // Handle scroll progress (Optimized with requestAnimationFrame)
  useEffect(() => {
    const handleScroll = () => {
      requestAnimationFrame(() => {
        const scrollTop = window.scrollY;
        const scrollHeight =
          document.documentElement.scrollHeight - window.innerHeight;
        setScrollProgress((scrollTop / scrollHeight) * 100);
      });
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Detect active section dynamically
  useEffect(() => {
    const handleSectionChange = () => {
      const sections = ["hero", "about", "projects", "contact"];
      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= 100 && rect.bottom >= 100) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleSectionChange);
    return () => window.removeEventListener("scroll", handleSectionChange);
  }, []);

  // Smooth scroll to section (Improved for better browser support)
  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    if (section) {
      window.scrollTo({
        top: section.offsetTop,
        behavior: "smooth",
      });
    }
  };

  return (
    <div className="min-h-screen bg-dark-slate text-light-gray font-sans relative">
      {/* Scroll Progress Bar */}
      <div
        className="fixed top-0 left-0 h-2 bg-yellow-500"
        style={{
          width: `${scrollProgress}%`,
          transition: "width 0.3s ease-in-out",
          opacity: scrollProgress > 0 ? 1 : 0.5,
          zIndex: 1000,
        }}
      />

      {/* Navbar with Active Section Highlighting */}
      <Navbar
        isOpen={isOpen}
        setIsOpen={setIsOpen}
        scrollToSection={scrollToSection}
        activeSection={activeSection}
      />

      {/* Hero Section */}
      <section id="hero">
        <Hero />
      </section>

      {/* About Section */}
      <section id="about">
        <About />
      </section>

      {/* Projects Section */}
      <section id="projects">
        <Projects />
      </section>

      {/* Contact Section */}
      <section id="contact">
        <Contact />
      </section>

      {/* Footer */}
      <Footer />

      {/* Floating Social Icons */}
      <SocialIcons />
    </div>
  );
}

export default App;
