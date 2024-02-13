import NavBar from "./components/NavBar";
import Home from "./components/Home";
import Media from "./components/Media";
// import About from "./components/About";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";


function App() {
  return (
    <div>
      <NavBar />
      <Home />
      {/* <About /> */}
      <Projects />
      <Contact />
      <Media />
      <Footer />
    </div>
  );
}

export default App;
