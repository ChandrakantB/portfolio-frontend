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
  I'm a full-stack web developer who thrives on building meaningful, real-world solutions. I’ve created and deployed my own portfolio site to showcase my work and skills — but that’s just the beginning.
</p>

<p>
  I’m currently building <strong>BusSure</strong>, a scalable bus booking platform designed to connect not just cities, but even the most remote villages — bringing accessibility where it’s needed most. Alongside that, I’m developing a unique <strong>mechanic locator app</strong> that helps people find nearby help instantly when stranded on the road.
</p>

<p>
  My passion lies in crafting responsive UIs, scalable backends, and user-friendly experiences. I enjoy building full-stack projects from the ground up, whether it’s an admin dashboard, dynamic seat selection systems, or real-time service apps.
</p>

<p>
  Beyond development, I actively solve coding problems and have completed over <strong>200 challenges</strong> on platforms like LeetCode and GeeksforGeeks. I'm also exploring advanced system design and backend scalability to prepare myself for production-grade systems and high-performance APIs.
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
