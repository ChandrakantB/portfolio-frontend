import FadeInWrapper from '../components/FadeInWrapper';
import { motion } from 'framer-motion';
import './About.css';

const About = () => {
  return (
    <section id="about" className="about-section">
      <FadeInWrapper>
        <div className="container about-content">
          <motion.h2
            className="section-title"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            About Me
          </motion.h2>

          <div className="about-grid">
            <motion.div
              className="about-text"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
            >
              <p>
                Hey! I’m <strong>Shivam</strong>, a passionate full-stack web developer with a mission to craft clean, efficient, and delightful digital experiences. I specialize in building scalable web apps using modern JavaScript technologies.
              </p>
              <p>
                I’ve worked on both startup projects and personal tools — blending great UX, high performance, and elegant design. I’m constantly learning and enjoy solving real-world problems through code.
              </p>
              <p>
                Right now, I’m diving deeper into advanced system design and contributing to meaningful projects that impact real users.
              </p>
            </motion.div>

            <motion.div
              className="about-skills"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
            >
              <h3>Tech Stack</h3>
              <ul className="skills-list">
                <li>⚛️ React</li>
                <li>🟨 JavaScript (ES6+)</li>
                <li>🧰 Node.js & Express</li>
                <li>🌐 REST APIs</li>
                <li>🔥 MongoDB & Firebase</li>
                <li>🎨 CSS / Tailwind</li>
                <li>🔧 Git & GitHub</li>
                <li>🧪 Testing Basics</li>
              </ul>
            </motion.div>
          </div>
        </div>
      </FadeInWrapper>
    </section>
  );
};

export default About;
