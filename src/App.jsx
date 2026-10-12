import { MotionConfig, motion, useScroll, useSpring } from "framer-motion";
import Navbar from "./components/Navbar.jsx";
import Hero from "./components/Hero.jsx";
import About from "./components/About.jsx";
import Skills from "./components/Skills.jsx";
import Strengths from "./components/Strengths.jsx";
import Experience from "./components/Experience.jsx";
import Projects from "./components/Projects.jsx";
import Activities from "./components/Activities.jsx";
import Contact from "./components/Contact.jsx";
import Footer from "./components/Footer.jsx";

export default function App() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 120, damping: 24, restDelta: 0.001 });

  return (
    // reducedMotion="user" disables transform animations for visitors who ask for less motion
    <MotionConfig reducedMotion="user">
      <motion.div className="scroll-progress" style={{ scaleX }} aria-hidden="true" />
      <Navbar />
      <main>
        <Hero />
        <About />
        <Skills />
        <Strengths />
        <Experience />
        <Projects />
        <Activities />
        <Contact />
      </main>
      <Footer />
    </MotionConfig>
  );
}
