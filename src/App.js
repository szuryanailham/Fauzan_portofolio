import "./App.css";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Category from "./components/Category";
import Carousel from "./components/Carousel";
import Gallery from "./components/Gallery";
import Footer from "./components/Footer";
function App() {
  return (
    <>
      <Navbar />
      <div className="pt-[100px] flex flex-col">
        <Hero />
        <About />
        <Category />
        <Carousel />
        <Gallery />
        <Footer />
      </div>
    </>
  );
}

export default App;
