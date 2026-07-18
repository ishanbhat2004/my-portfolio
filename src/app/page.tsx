import Navbar from "./components/Navbar";
import Header from "./components/Header";
import About from "./components/About";
import Experience from "./components/Experience";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Education from "./components/Education";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Header />
        <About />
        <Experience />
        <Projects />
        <Skills />
        <Education />
      </main>
      <Footer />
    </>
  );
}
