import { motion } from "framer-motion";
import "./Contact.css";

const Contact = () => {
  return (
    <motion.section 
      className="contact-section"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <h1 className="section-title">Contact Me</h1>
      <motion.p 
        className="contact-info"
        initial={{ y: 50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.5 }}
      >
        📧 Email: maniraj0618@gmail.com
      </motion.p>
    </motion.section>
  );
};

export default Contact;
