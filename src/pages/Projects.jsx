import { motion } from "framer-motion";
import "./Projects.css";

const Projects = () => {
  return (
    <motion.section 
      className="projects-section"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <h1 className="section-title">My Projects</h1>

      <motion.div 
        className="project-card"
        initial={{ x: -100, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.3 }}
      >
        <h2 className="project-title">📌 DM Nature - Naturopathy Website</h2>
        <p className="project-description">
          A wellness website providing information on naturopathy therapies, treatments, and wellness benefits.
        </p>
        <ul className="project-list">
          <li>✅ Built with React.js and CSS Flexbox (d-flex) for responsive design.</li>
          <li>✅ Implemented multi-language support (English & French).</li>
          <li>✅ Developed an interactive Gallery Page and Article Section.</li>
          <li>✅ Integrated Leaflet.js for dynamic map functionality.</li>
        </ul>
      </motion.div>

      <motion.div 
        className="project-card"
        initial={{ x: 100, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.5 }}
      >
        <h2 className="project-title">📌 Personal Portfolio</h2>
        <p className="project-description">
          A portfolio website to showcase my skills, projects, and contact details.
        </p>
        <ul className="project-list">
          <li>✅ Built using React.js with a fully responsive design.</li>
          <li>✅ Implemented a fixed navbar with smooth scrolling.</li>
          <li>✅ Created a Projects section with dynamic elements.</li>
          <li>✅ Optimized performance for fast loading and responsiveness.</li>
        </ul>
      </motion.div>

      <motion.ul 
        className="extra-projects"
        initial={{ y: 50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.7 }}
      >
        <li>✅ React E-commerce App</li>
        <li>✅ Blog Website</li>
      </motion.ul>
      
    </motion.section>
  );
};

export default Projects;
