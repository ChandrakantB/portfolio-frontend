import Navbar from '../components/Navbar';
import Hero from '../sections/Hero';
import About from './About';
import Projects from '../sections/Projects';
import Contact from '../sections/Contact';
import Footer from '../sections/Footer';
import Education from '../sections/Education';
import TechStack from '../sections/TechStack';

const Home = () => {
  return (
    <>
      <Navbar />

      <main className="pt-24">
        <Hero />
        <About/>
        <Education/>
        <Projects/>
        <TechStack/>
        <Contact/>
        {/* Upcoming: About, Projects, Contact Preview */}
      </main>
      <Footer/>
    </>
  );
};

export default Home;
