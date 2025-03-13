import { motion } from "framer-motion";
import "./About.css";

const About = () => {
  return (
    <motion.section 
      className="about-section"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <h1 className="section-title">About Me</h1>
      <p className="about-description">
        I'm a passionate Front-End Developer with 1.5 years of experience in building modern web applications.
      </p>

      <motion.div 
        className="about-details"
        initial={{ x: -100, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.5 }}
      >
        <h2>👨‍💻 Skills & Technologies</h2>
        <ul>
          <li>🔹 JavaScript, React.js, Redux</li>
          <li>🔹 HTML, CSS, Tailwind CSS</li>
          <li>🔹 API integration with Axios</li>
          <li>🔹 Version control using Git</li>
        </ul>
      </motion.div>
    </motion.section>
  );
};

export default About;
