import { Typewriter } from 'react-simple-typewriter';
import FadeInWrapper from '../components/FadeInWrapper';
import { motion } from 'framer-motion';
import { Link } from 'react-scroll'; // for smooth scroll
import './Hero.css'

const Hero = () => {
  return (
    <section id="hero" className="hero-section">
      <FadeInWrapper>
        <div className="hero-content">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="hero-title"
          >
            <span className="gradient-name">Hi, I am Chandrkant.</span><br />
            <span className="hero-typewriter">
              <Typewriter
                words={['Full-Stack Developer', 'Creative Problem Solver', 'Tech Explorer']}
                loop={true}
                cursor
                cursorStyle="_"
                typeSpeed={60}
                deleteSpeed={40}
                delaySpeed={1500}
              />
            </span>
          </motion.h1>

          <motion.p
            className="hero-description"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
          >
            I build sleek full-stack web apps that solve real-world problems with a focus on design, performance & user experience.
          </motion.p>

          <motion.div
            className="hero-buttons"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
          >
            <Link to="projects" smooth duration={500} className="btn primary">
              View Work
            </Link>
            <a href="/resume.pdf" download className="btn secondary" style={{ marginLeft: '1rem' }}>
              Download Resume
            </a>
          </motion.div>
        </div>
      </FadeInWrapper>
    </section>
  );
};

export default Hero;
