import { profile } from "./data/profile";
import { Hero } from "./sections/Hero";
import { Projects } from "./sections/Projects";
import { About } from "./sections/About";
import { Contact } from "./sections/Contact";
import { Experience } from "./sections/Experience";
import { Navbar } from "./components/Navbar";
import "./App.css";



function App() {
  return (
    <>
      <Navbar />

      <main id="home" className="container">
        <Hero />

        <About />

        <Experience />

        <Projects />

        <Contact />
      </main>

      <footer className="site-footer">
        <div className="container">
          © {new Date().getFullYear()} {profile.name}.
        </div>
      </footer>
    </>
  );
}

export default App;