import { Typewriter } from 'react-simple-typewriter';
import { motion } from 'framer-motion';
import { Link } from 'react-scroll';
import './Hero.css';
import heroImage from '../logo.png.png'; // use actual import path

const Hero = () => {
  return (
    <section id="hero" className="hero-section">
      <div className="hero-container">
        {/* 👤 Profile Picture */}
        <motion.img
          src={heroImage}
          alt="Chandrakant Profile"
          className="hero-image"
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
        />

        {/* 🧠 Headline */}
        <motion.h1
          className="hero-title"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Hi, I am <span className="highlighted-name">Chandrakant</span>
        </motion.h1>

        {/* ✍️ Subtitle with Typewriter */}
        <motion.h2
          className="hero-subtitle"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
        >
          <Typewriter
            words={['Full-Stack Developer', 'Creative Problem Solver', 'Tech Explorer']}
            loop
            cursor
            cursorStyle="|"
            typeSpeed={60}
            deleteSpeed={40}
            delaySpeed={1500}
          />
        </motion.h2>

        {/* 📝 Description */}
        <motion.p
          className="hero-description"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.6 }}
        >
          I create performant, scalable, and user-friendly full-stack applications with a focus on clean UI and functional UX.
        </motion.p>

        {/* 🔗 Buttons */}
        <motion.div
          className="hero-buttons"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
        >
          <Link to="projects" smooth duration={500} className="btn primary">
            View Projects
          </Link>
          <a href="/resume.pdf" download className="btn secondary">
            Resume
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
