import Navbar from '../components/Navbar';
import Hero from '../sections/Hero';
import About from './About';
import Projects from '../sections/Projects';
import Contact from '../sections/Contact';
import Footer from '../sections/Footer';

const Home = () => {
  return (
    <>
      <Navbar />

      <main className="pt-24">
        <Hero />
        <About/>
        <Projects/>
        <Contact/>
        {/* Upcoming: About, Projects, Contact Preview */}
      </main>
      <Footer/>
    </>
  );
};

export default Home;
