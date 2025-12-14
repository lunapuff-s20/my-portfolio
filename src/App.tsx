import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Education from './components/Education';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Coursework from './components/Coursework';
import Experience from './components/Experience';
import Interests from './components/Interests';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-slate-900">
      <Navbar />
      <div className="pt-16">
        <Hero />
        <About />
        <Education />
        <Skills />
        <Projects />
        <Coursework />
        <Experience />
        <Interests />
        <Footer />
      </div>
    </div>
  );
}

export default App;
