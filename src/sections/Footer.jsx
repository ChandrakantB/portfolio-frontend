import { FaGithub, FaLinkedin } from 'react-icons/fa';
import './Footer.css'

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="footer">
      <div className="footer-content">
        <p onClick={scrollToTop} className="footer-name">
          © {new Date().getFullYear()} Shivam — Back to Top ↑
        </p>
        <div className="footer-icons">
          <a
            href="https://github.com/ChandrakantB"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
          >
            <FaGithub />
          </a>
          <a
            href="https://linkedin.com/in/yourusername"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
          >
            <FaLinkedin />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
